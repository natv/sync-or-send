const ANALYSIS_DURATION_MS = 1500;
const LOADER_ROTATION_MS = 450;

const state = {
  activeTone: "polite",
  latestResult: null,
  latestInput: "",
  loaderIntervalId: null,
  loaderTimeoutId: null
};

const elements = {
  scenario: document.getElementById("scenario"),
  inputHint: document.getElementById("inputHint"),
  checkButton: document.getElementById("checkButton"),
  resultSection: document.getElementById("resultSection"),
  loaderCard: document.getElementById("loaderCard"),
  loaderMessage: document.getElementById("loaderMessage"),
  verdictCard: document.getElementById("verdictCard"),
  verdictBadge: document.getElementById("verdictBadge"),
  verdictIcon: document.getElementById("verdictIcon"),
  verdictLabel: document.getElementById("verdictLabel"),
  categoryTag: document.getElementById("categoryTag"),
  verdictTitle: document.getElementById("verdictTitle"),
  verdictExplanation: document.getElementById("verdictExplanation"),
  confidenceChip: document.getElementById("confidenceChip"),
  scenarioChip: document.getElementById("scenarioChip"),
  tryAnotherButton: document.getElementById("tryAnotherButton"),
  generateButton: document.getElementById("generateButton"),
  messageSection: document.getElementById("messageSection"),
  toneButtons: Array.from(document.querySelectorAll(".tone-button")),
  messageOutput: document.getElementById("messageOutput"),
  copyButton: document.getElementById("copyButton")
};

function resetLoaderTimers() {
  if (state.loaderIntervalId) {
    window.clearInterval(state.loaderIntervalId);
    state.loaderIntervalId = null;
  }

  if (state.loaderTimeoutId) {
    window.clearTimeout(state.loaderTimeoutId);
    state.loaderTimeoutId = null;
  }
}

function setHint(text, isError = false) {
  elements.inputHint.textContent = text;
  elements.inputHint.classList.toggle("error-text", isError);
  elements.scenario.parentElement.classList.toggle("error-state", isError);
}

function showLoader() {
  elements.resultSection.classList.remove("hidden");
  elements.loaderCard.classList.remove("hidden");
  elements.verdictCard.classList.add("hidden");
  elements.messageSection.classList.add("hidden");
}

function renderVerdict(result) {
  const { verdictConfig } = result;

  elements.loaderCard.classList.add("hidden");
  elements.verdictCard.classList.remove("hidden");
  elements.verdictBadge.className = `verdict-badge ${verdictConfig.badgeClass}`;
  elements.verdictIcon.textContent = verdictConfig.icon;
  elements.verdictLabel.textContent = verdictConfig.label;
  elements.categoryTag.textContent = result.categoryLabel;
  elements.verdictTitle.textContent = `${verdictConfig.label}.`;
  elements.verdictExplanation.textContent = result.explanation;
  elements.confidenceChip.textContent = `Confidence: ${result.confidence}`;
  elements.scenarioChip.textContent = `Input type: ${result.inputType}`;
}

function renderMessage() {
  if (!state.latestResult) {
    return;
  }

  const message = getGeneratedMessage(state.latestResult, state.activeTone);
  elements.messageOutput.textContent = message;
}

function startAnalysis(input) {
  resetLoaderTimers();
  showLoader();
  state.latestInput = input;
  elements.checkButton.disabled = true;
  elements.checkButton.textContent = "Analyzing...";
  elements.tryAnotherButton.disabled = true;

  let loaderIndex = 0;
  elements.loaderMessage.textContent = LOADER_MESSAGES[loaderIndex];

  state.loaderIntervalId = window.setInterval(() => {
    loaderIndex = (loaderIndex + 1) % LOADER_MESSAGES.length;
    elements.loaderMessage.textContent = LOADER_MESSAGES[loaderIndex];
  }, LOADER_ROTATION_MS);

  state.loaderTimeoutId = window.setTimeout(() => {
    resetLoaderTimers();
    state.latestResult = getResponseForScenario(input);
    renderVerdict(state.latestResult);
    elements.checkButton.disabled = false;
    elements.checkButton.textContent = "Check";
    elements.tryAnotherButton.disabled = false;
  }, ANALYSIS_DURATION_MS);
}

function handleCheck() {
  const input = elements.scenario.value.trim();

  if (!input) {
    setHint("Please describe the scenario before asking the internet's least patient consultant.", true);
    elements.resultSection.classList.add("hidden");
    elements.messageSection.classList.add("hidden");
    return;
  }

  setHint("Be specific. Rambling will be judged accordingly.");
  startAnalysis(input);
}

async function handleCopy() {
  const text = elements.messageOutput.textContent.trim();
  if (!text) {
    return;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "absolute";
      helper.style.left = "-9999px";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }

    const original = elements.copyButton.textContent;
    elements.copyButton.textContent = "Copied";
    elements.copyButton.classList.add("success-flash");

    window.setTimeout(() => {
      elements.copyButton.textContent = original;
      elements.copyButton.classList.remove("success-flash");
    }, 1400);
  } catch (error) {
    elements.copyButton.textContent = "Copy failed";
    window.setTimeout(() => {
      elements.copyButton.textContent = "Copy Message";
    }, 1400);
  }
}

elements.checkButton.addEventListener("click", handleCheck);

elements.generateButton.addEventListener("click", () => {
  state.activeTone = "polite";
  for (const button of elements.toneButtons) {
    button.classList.toggle("active", button.dataset.tone === state.activeTone);
  }

  renderMessage();
  elements.messageSection.classList.remove("hidden");
  elements.messageSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.tryAnotherButton.addEventListener("click", () => {
  const input = state.latestInput || elements.scenario.value.trim();
  if (!input) {
    return;
  }

  startAnalysis(input);
});

elements.toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTone = button.dataset.tone;
    elements.toneButtons.forEach((candidate) => {
      candidate.classList.toggle("active", candidate === button);
    });
    renderMessage();
  });
});

elements.copyButton.addEventListener("click", handleCopy);

elements.scenario.addEventListener("input", () => {
  if (elements.scenario.value.trim()) {
    setHint("Be specific. Rambling will be judged accordingly.");
  }
});

window.addEventListener("beforeunload", resetLoaderTimers);

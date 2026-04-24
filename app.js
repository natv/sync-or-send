const ANALYSIS_DURATION_MS = 6500;
const LOADER_ROTATION_MS = 1500;
const COMMON_SENSE_EXTRA_MS = 2400;

const state = {
  activeTone: "polite",
  latestResult: null,
  latestInput: "",
  loaderIntervalId: null,
  loaderTimeoutId: null,
  messageFlashTimeoutId: null,
  verdictFlashTimeoutId: null,
  toneFlashTimeoutId: null
};

const elements = {
  scenario: document.getElementById("scenario"),
  inputHint: document.getElementById("inputHint"),
  checkButton: document.getElementById("checkButton"),
  resultSection: document.getElementById("resultSection"),
  loaderCard: document.getElementById("loaderCard"),
  loaderMessage: document.getElementById("loaderMessage"),
  verdictCard: document.getElementById("verdictCard"),
  categoryTag: document.getElementById("categoryTag"),
  verdictTitle: document.getElementById("verdictTitle"),
  verdictExplanation: document.getElementById("verdictExplanation"),
  confidenceChip: document.getElementById("confidenceChip"),
  generateButton: document.getElementById("generateButton"),
  messageSection: document.getElementById("messageSection"),
  toneButtons: Array.from(document.querySelectorAll(".tone-button")),
  messageOutput: document.getElementById("messageOutput"),
  copyButton: document.getElementById("copyButton"),
  startOverButton: document.getElementById("startOverButton"),
  stepLabels: Array.from(document.querySelectorAll(".step-label"))
};

function setActiveStep(stepNumber) {
  elements.stepLabels.forEach((label) => {
    label.classList.toggle("active", label.dataset.step === String(stepNumber));
  });
}

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

function resetMessageFlash() {
  if (state.messageFlashTimeoutId) {
    window.clearTimeout(state.messageFlashTimeoutId);
    state.messageFlashTimeoutId = null;
  }

  if (state.verdictFlashTimeoutId) {
    window.clearTimeout(state.verdictFlashTimeoutId);
    state.verdictFlashTimeoutId = null;
  }

  if (state.toneFlashTimeoutId) {
    window.clearTimeout(state.toneFlashTimeoutId);
    state.toneFlashTimeoutId = null;
  }

  elements.verdictTitle.classList.remove("flash-attention");
  elements.messageOutput.classList.remove("flash-attention");
  elements.toneButtons.forEach((button) => {
    button.classList.remove("flash-attention");
  });
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
  elements.verdictCard.classList.remove("animate-in");
  void elements.verdictCard.offsetWidth;
  elements.verdictCard.classList.add("animate-in");
  elements.categoryTag.textContent = result.categoryLabel;
  elements.verdictTitle.textContent = `${verdictConfig.label}.`;
  elements.verdictExplanation.textContent = result.explanation;
  elements.confidenceChip.textContent = `Confidence: ${result.confidence}`;

  state.activeTone = "polite";
  for (const button of elements.toneButtons) {
    button.classList.toggle("active", button.dataset.tone === state.activeTone);
  }

  elements.messageSection.classList.remove("hidden");
  syncMessageHeight();
  renderMessage();
  scheduleMessageFlash();
  window.setTimeout(() => {
    elements.verdictCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
}

function renderMessage() {
  if (!state.latestResult) {
    return;
  }

  const message = getGeneratedMessage(state.latestResult, state.activeTone);
  elements.messageOutput.textContent = message;
}

function scheduleMessageFlash() {
  resetMessageFlash();
  elements.verdictTitle.classList.add("flash-attention");
  state.verdictFlashTimeoutId = window.setTimeout(() => {
    elements.verdictTitle.classList.remove("flash-attention");
  }, 2400);

  state.messageFlashTimeoutId = window.setTimeout(() => {
    elements.messageOutput.classList.add("flash-attention");
    window.setTimeout(() => {
      elements.messageOutput.classList.remove("flash-attention");
    }, 1800);
  }, 4200);

  state.toneFlashTimeoutId = window.setTimeout(() => {
    elements.toneButtons.forEach((button) => {
      button.classList.add("flash-attention");
    });

    window.setTimeout(() => {
      elements.toneButtons.forEach((button) => {
        button.classList.remove("flash-attention");
      });
    }, 1400);
  }, 9200);
}

function syncMessageHeight() {
  if (!state.latestResult || !elements.messageOutput) {
    return;
  }

  const toneSets = MESSAGE_TEMPLATES[state.latestResult.verdict];
  if (!toneSets) {
    return;
  }

  const width = Math.max(
    elements.messageOutput.getBoundingClientRect().width,
    elements.messageOutput.clientWidth
  );

  if (!width) {
    return;
  }

  const computed = window.getComputedStyle(elements.messageOutput);
  const measurer = document.createElement("div");
  measurer.style.position = "absolute";
  measurer.style.visibility = "hidden";
  measurer.style.pointerEvents = "none";
  measurer.style.left = "-9999px";
  measurer.style.top = "0";
  measurer.style.width = `${width}px`;
  measurer.style.padding = computed.padding;
  measurer.style.border = computed.border;
  measurer.style.borderRadius = computed.borderRadius;
  measurer.style.font = computed.font;
  measurer.style.fontSize = computed.fontSize;
  measurer.style.fontWeight = computed.fontWeight;
  measurer.style.lineHeight = computed.lineHeight;
  measurer.style.letterSpacing = computed.letterSpacing;
  measurer.style.whiteSpace = computed.whiteSpace;
  measurer.style.boxSizing = computed.boxSizing;
  measurer.style.wordBreak = computed.wordBreak;
  measurer.style.overflowWrap = computed.overflowWrap;

  document.body.appendChild(measurer);

  let tallest = 0;
  for (const messages of Object.values(toneSets)) {
    for (const message of messages) {
      measurer.textContent = message;
      tallest = Math.max(tallest, measurer.offsetHeight);
    }
  }

  document.body.removeChild(measurer);

  if (tallest > 0) {
    elements.messageOutput.style.minHeight = `${tallest}px`;
  }
}

function startAnalysis(input) {
  resetLoaderTimers();
  showLoader();
  setActiveStep(2);
  elements.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  state.latestInput = input;
  elements.checkButton.disabled = true;
  elements.checkButton.textContent = "Analyzing...";

  let loaderIndex = 0;
  elements.loaderMessage.textContent = LOADER_MESSAGES[loaderIndex];
  const advanceLoaderMessage = () => {
    loaderIndex = (loaderIndex + 1) % LOADER_MESSAGES.length;
    elements.loaderMessage.textContent = LOADER_MESSAGES[loaderIndex];

    const currentDelay = LOADER_MESSAGES[loaderIndex] === "Running common sense filter..."
      ? LOADER_ROTATION_MS + COMMON_SENSE_EXTRA_MS
      : LOADER_ROTATION_MS;

    state.loaderIntervalId = window.setTimeout(advanceLoaderMessage, currentDelay);
  };

  state.loaderIntervalId = window.setTimeout(advanceLoaderMessage, LOADER_ROTATION_MS);

  state.loaderTimeoutId = window.setTimeout(() => {
    resetLoaderTimers();
    state.latestResult = getResponseForScenario(input);
    renderVerdict(state.latestResult);
    elements.checkButton.disabled = false;
    elements.checkButton.textContent = "Check";
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

function handleStartOver() {
  resetLoaderTimers();
  state.latestResult = null;
  state.latestInput = "";
  state.activeTone = "polite";
  elements.scenario.value = "";
  elements.checkButton.disabled = false;
  elements.checkButton.textContent = "Check";
  elements.resultSection.classList.add("hidden");
  elements.loaderCard.classList.add("hidden");
  elements.verdictCard.classList.add("hidden");
  elements.messageSection.classList.add("hidden");
  resetMessageFlash();
  elements.toneButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tone === "polite");
  });
  elements.messageOutput.style.minHeight = "";
  setHint("Be specific. Rambling will be judged accordingly.");
  setActiveStep(1);
  elements.scenario.focus();
  elements.scenario.scrollIntoView({ behavior: "smooth", block: "start" });
}

elements.checkButton.addEventListener("click", handleCheck);

elements.generateButton.addEventListener("click", () => {
  setActiveStep(3);
  state.activeTone = "polite";
  for (const button of elements.toneButtons) {
    button.classList.toggle("active", button.dataset.tone === state.activeTone);
  }

  renderMessage();
  elements.messageSection.classList.remove("hidden");
  scheduleMessageFlash();
  elements.messageSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

elements.toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTone = button.dataset.tone;
    elements.toneButtons.forEach((candidate) => {
      candidate.classList.toggle("active", candidate === button);
    });
    syncMessageHeight();
    renderMessage();
    scheduleMessageFlash();
  });
});

elements.copyButton.addEventListener("click", handleCopy);
elements.startOverButton.addEventListener("click", handleStartOver);

elements.scenario.addEventListener("input", () => {
  if (elements.scenario.value.trim()) {
    setHint("Be specific. Rambling will be judged accordingly.");
  }

  setActiveStep(1);
});

window.addEventListener("beforeunload", () => {
  resetLoaderTimers();
  resetMessageFlash();
});
window.addEventListener("resize", () => {
  if (state.latestResult) {
    syncMessageHeight();
  }
});

const RESPONSE_LIBRARY = {
  statusUpdate: [
    "Email. This is a progress update, not an excuse to trap six people in a rectangle.",
    "Email. A few bullet points will do more than a calendar invite ever could.",
    "Email. If the main event is 'just keeping everyone posted,' nobody needs a live performance.",
    "Email. The status already happened. It does not need a sequel episode.",
    "Email. This is an asynchronous species of problem.",
    "Email. Send the update. Add a deadline if you want attention.",
    "Email. You are describing information transfer, not a discussion.",
    "Email. A meeting for this would just be people taking turns reading your summary aloud.",
    "Email. Put the update in writing so future-you can prove it was sent.",
    "Email. The best part of this meeting is that it can be read in under a minute.",
    "Email. This belongs in inboxes, not on calendars.",
    "Email. If nobody has to decide anything, this is documentation wearing a fake mustache.",
    "Email. The agenda is 'here is what happened.' That is not an agenda.",
    "Email. A short note with owners and dates beats thirty awkward nods.",
    "Email. Please do not book a sync just to announce that things are mostly on track."
  ],
  fyi: [
    "Email. 'For your awareness' has never required a room reservation.",
    "Email. This is an FYI, which is professional code for 'read when you can.'",
    "Email. A calendar invite is a hostile way to distribute information.",
    "Email. If the audience mostly needs to know, not talk, send it.",
    "Email. People do not need to clear their afternoon to learn this fact.",
    "Email. This is a memo pretending to be a collaboration opportunity.",
    "Email. Send it in writing so everyone can skim it at their preferred speed.",
    "Email. The phrase 'just sharing' should end all meeting proposals immediately.",
    "Email. Unless the FYI is on fire, let the inbox handle it.",
    "Email. This is pure broadcast energy.",
    "Email. You are distributing context, not hosting a show.",
    "Email. One concise paragraph can do the entire job.",
    "Email. That thought belongs in a written update with a subject line.",
    "Email. If nobody needs to respond live, this is inbox material.",
    "Email. A meeting here would just be ceremonial inefficiency."
  ],
  simpleQuestion: [
    "Teams or Slack. This is one answer away from being finished.",
    "Teams or Slack. A quick ping is cheaper than an event invite.",
    "Teams or Slack. You need a reply, not a formal gathering.",
    "Teams or Slack. One message, one answer, everyone moves on.",
    "Teams or Slack. Do not make someone commute digitally for a yes-or-no question.",
    "Teams or Slack. This is a chat-shaped problem.",
    "Teams or Slack. Ask the question where people already ignore notifications in peace.",
    "Teams or Slack. If the answer can fit in one bubble, use bubbles.",
    "Teams or Slack. A meeting would only prove that typing was an option all along.",
    "Teams or Slack. You are one well-aimed sentence from closure.",
    "Teams or Slack. Short question, short channel, short life.",
    "Teams or Slack. This can be resolved before the meeting invite would finish loading.",
    "Teams or Slack. Hit send, not schedule.",
    "Teams or Slack. Nobody needs prep time for this.",
    "Teams or Slack. This is exactly what chat tools were invented to absorb."
  ],
  approval: [
    "Email. Put the ask in writing, include the decision needed, and let people approve like adults.",
    "Email. Approval requests age well in inboxes because there is a record.",
    "Email. If the outcome is a yes, no, or minor edit, do not convene a summit.",
    "Email. Attach the relevant details and spare everyone a performative sync.",
    "Email. This is a decision request, not a panel discussion.",
    "Email. Approval chains are boring, which is exactly why they should be written.",
    "Email. Ask clearly, set a due date, and resist the siren song of calendars.",
    "Email. People can approve this faster than they can accept the meeting.",
    "Email. If they need context, put it in bullets and make them read.",
    "Email. This belongs in a documented request, not a digital conference room.",
    "Email. Approval by meeting is usually just procrastination with snacks removed.",
    "Email. The inbox loves binary outcomes.",
    "Email. Request, context, deadline, done.",
    "Email. Meetings for approvals are how simple workflows become folklore.",
    "Email. A written ask creates accountability. A meeting creates witnesses."
  ],
  brainstorm: [
    "Meeting. Real-time back-and-forth might actually help here, which is deeply inconvenient for my brand.",
    "Meeting. If the goal is genuine ideation with active tradeoffs, live discussion can earn its keep.",
    "Meeting. This sounds collaborative enough to justify a short, tightly scoped session.",
    "Meeting. Brainstorming is one of the few reasons to let multiple people talk on purpose.",
    "Meeting. Fine. A 25-minute idea session could be valid here.",
    "Meeting. If you need people building on each other in real time, a meeting is defensible.",
    "Meeting. This is rare but legitimate: creativity usually benefits from live momentum.",
    "Meeting. Keep it small, keep it short, and do not turn it into a recap theater production.",
    "Meeting. Live discussion makes sense when the point is generating options together.",
    "Meeting. This is not permission to invite twelve observers.",
    "Meeting. A focused brainstorm is one of the few meetings with legal standing.",
    "Meeting. Only if participants are expected to contribute ideas, not just occupy squares.",
    "Meeting. Short agenda, smaller group, visible goal. Otherwise I revoke my support.",
    "Meeting. Congratulations on finding one of the five acceptable meeting use cases.",
    "Meeting. Set a timebox before this evolves into a vague civic ceremony."
  ],
  decision: [
    "Meeting. If stakeholders genuinely need to debate tradeoffs and leave with a decision, a short meeting is reasonable.",
    "Meeting. When ambiguity is high and a decision must land today, live alignment can be faster.",
    "Meeting. This sounds like an actual decision forum, not a disguised announcement.",
    "Meeting. If unresolved conflict is blocking progress, a structured decision meeting can help.",
    "Meeting. Real decisions with real tradeoffs occasionally deserve synchronous attention.",
    "Meeting. This earns a meeting if the group is small and the decision is specific.",
    "Meeting. Make the decision, document it, end the call, disappear.",
    "Meeting. This can justify a calendar slot, but only if someone owns the final call.",
    "Meeting. A focused decision session beats six separate side conversations.",
    "Meeting. Rare approval granted. Use it wisely and briefly.",
    "Meeting. You seem to need alignment, not mere awareness.",
    "Meeting. This is dangerously close to being legitimate.",
    "Meeting. Short, clear, and decisive or not at all.",
    "Meeting. If nobody can decide asynchronously, bring the right people together once.",
    "Meeting. A real decision with competing options is one of the few good reasons to gather."
  ],
  tooManyPeople: [
    "Email. If the attendee list looks like a small village, write it down instead.",
    "Email. Large groups convert meetings into spectator sports.",
    "Email. The more people involved, the less this should depend on a live call.",
    "Email. With this many names, clarity scales better than conversation.",
    "Email. A mass sync is usually just confusion with better lighting.",
    "Email. Big distribution list means written update, not communal suffering.",
    "Email. Do not organize a human traffic jam when a summary will do.",
    "Email. If half the invitees are optional, all of them are optional.",
    "Email. This should be documented once, not repeated live to thirteen listeners.",
    "Email. Large meetings are where accountability goes to hide.",
    "Email. A broad audience means broadcast, not discussion.",
    "Email. Send notes, not summons.",
    "Email. This many attendees guarantees fifteen minutes of introductions and zero progress.",
    "Email. Group size has officially invalidated the meeting proposal.",
    "Email. If you need this many people, you probably need a document."
  ],
  oneOnOne: [
    "Teams or Slack. Start with a direct message before escalating to calendar theater.",
    "Teams or Slack. A one-on-one clarification usually fits in chat.",
    "Teams or Slack. Ask directly. If it grows legs, then maybe schedule something.",
    "Teams or Slack. This sounds like a quick message between two functioning adults.",
    "Teams or Slack. If both parties can type, start there.",
    "Teams or Slack. One person, one question, one chat.",
    "Teams or Slack. Private message first. Meeting later only if nuance refuses to cooperate.",
    "Teams or Slack. You do not need Outlook to speak to one colleague.",
    "Teams or Slack. This is direct-message territory until proven otherwise.",
    "Teams or Slack. A short chat thread can absorb this easily.",
    "Teams or Slack. Keep the bar high before converting a two-person exchange into scheduled labor.",
    "Teams or Slack. This can stay lightweight.",
    "Teams or Slack. A meeting might still happen, but it has not earned that privilege yet.",
    "Teams or Slack. Start async and preserve everybody's day.",
    "Teams or Slack. One-on-one does not automatically mean thirty minutes."
  ],
  urgentIncident: [
    "Teams or Slack. Use the incident channel now. The calendar can arrive after the smoke clears.",
    "Teams or Slack. Urgent beats formal. Message the people who can help immediately.",
    "Teams or Slack. In a live issue, chat is faster than waiting for accepted invites.",
    "Teams or Slack. Start the war room in chat and escalate only if coordination collapses.",
    "Teams or Slack. Emergencies are not improved by scheduler latency.",
    "Teams or Slack. Page the right people and move.",
    "Teams or Slack. This needs response time, not calendar etiquette.",
    "Teams or Slack. If production is making strange noises, type first and type fast.",
    "Teams or Slack. Treat this like an incident, not a networking opportunity.",
    "Teams or Slack. You need a channel with urgency, not an agenda with bullets.",
    "Teams or Slack. Chat first, call second, retrospective later.",
    "Teams or Slack. Nobody wants to miss a fire because they were still reading the invite.",
    "Teams or Slack. Incident response belongs where people can react instantly.",
    "Teams or Slack. Speed matters more than ceremony here.",
    "Teams or Slack. Move this into the fastest shared channel available."
  ],
  rambling: [
    "Email. This input wandered through three neighborhoods and still ended up as a memo.",
    "Email. Your scenario contains enough clauses to qualify as weather, which is another reason to write it down.",
    "Email. If the explanation requires oxygen breaks, the meeting will somehow be worse.",
    "Email. Please condense this into bullets before it harms another calendar.",
    "Email. The rambling alone disqualifies it from being spoken live.",
    "Email. Nobody should have to hear this in real time for the first time.",
    "Email. This is a document looking for boundaries.",
    "Email. You need editing, not scheduling.",
    "Email. A meeting would simply broadcast the confusion at full volume.",
    "Email. Put this in writing and let punctuation do some governance.",
    "Email. Long-winded input is the strongest argument against live conversation.",
    "Email. This thought should be domesticated before it meets attendees.",
    "Email. Cancel the meeting and hire a paragraph break.",
    "Email. An inbox can survive this. A room full of coworkers should not have to.",
    "Email. Your scenario has become a habitat. Document it."
  ],
  generic: [
    "Email. Defaulting to written communication until reality proves otherwise.",
    "Email. If the problem statement is vague, the meeting would be vaguer.",
    "Email. The safest assumption is that this can be written clearly.",
    "Email. When in doubt, send something concise and avoid the calendar damage.",
    "Email. Generic problem, generic answer: write it down.",
    "Email. This does not yet contain enough evidence to justify live coordination.",
    "Email. You have not earned a meeting from this description.",
    "Email. The burden of proof remains firmly on the calendar invite.",
    "Email. As a baseline, async wins.",
    "Email. The fastest path to clarity is usually a message, not a meeting.",
    "Email. Until I hear actual complexity, this is inbox work.",
    "Email. Nothing here screams 'book thirty minutes.'",
    "Email. A simple written note is still the adult choice.",
    "Email. The generic answer remains gloriously boring and correct.",
    "Email. Default: send it."
  ],
  legitMeeting: [
    "Meeting. This is annoyingly legitimate: multiple dependencies, active tradeoffs, and actual decisions.",
    "Meeting. You may proceed with a short meeting because the alternative is a week of fragmented chaos.",
    "Meeting. This earns live time, but only with the exact people who matter.",
    "Meeting. Against my instincts, this sounds like real coordination.",
    "Meeting. The scope, urgency, and interdependence make synchronous discussion reasonable.",
    "Meeting. You found the narrow tunnel where a meeting is not a cry for help.",
    "Meeting. This could justify a calendar block if you publish the outcome immediately after.",
    "Meeting. Genuine complexity has entered the chat.",
    "Meeting. Keep it disciplined or I will retroactively change my answer to email.",
    "Meeting. This is the rare case where coordination overhead may be lower than asynchronous drift.",
    "Meeting. Small group, clear decision, finite time. That is the only acceptable formula.",
    "Meeting. There is enough ambiguity here to support a real conversation.",
    "Meeting. Barely approved. Do not get smug about it.",
    "Meeting. If executed properly, this might save time instead of consuming it.",
    "Meeting. Unpleasant but valid."
  ]
};

const VERDICT_EXPLANATIONS = {
  email: [
    "Email. This can be handled in writing without drafting half the company into a live ritual.",
    "Email. The clearest version of this idea involves a subject line, not a scheduled audience.",
    "Email. If people can read it, they do not need to gather around it.",
    "Email. A concise written note will outperform a meeting and leave evidence behind.",
    "Email. This is exactly the kind of thing that should arrive quietly and asynchronously.",
    "Email. The calendar remains innocent here.",
    "Email. This needs clarity and record-keeping, both of which email does better than performative discussion.",
    "Email. Nobody should have to stop their day so this can be spoken aloud.",
    "Email. Write it once, send it once, let everyone move on.",
    "Email. The solution is still boring, documented, and correct."
  ],
  chat: [
    "Teams or Slack. This should be solved in a few messages, not elevated into an event.",
    "Teams or Slack. A quick ping is the right level of ceremony for this.",
    "Teams or Slack. This is conversational, but not meeting-worthy.",
    "Teams or Slack. If the answer fits in chat, keep it in chat.",
    "Teams or Slack. You need speed and context, not scheduling overhead.",
    "Teams or Slack. This deserves a notification, not a timeslot.",
    "Teams or Slack. Short-form coordination wins here.",
    "Teams or Slack. A lightweight exchange should finish this faster than a meeting invite could.",
    "Teams or Slack. Use the tool built for quick back-and-forth.",
    "Teams or Slack. Fast channel, fast answer, problem closed."
  ],
  meeting: [
    "Meeting. This has just enough ambiguity and coordination to justify a short live session.",
    "Meeting. Real-time discussion could actually reduce confusion here, which is rare.",
    "Meeting. This one may benefit from synchronous conversation if the group stays small and focused.",
    "Meeting. Live discussion looks defensible for once.",
    "Meeting. There is enough complexity here to earn a short calendar block.",
    "Meeting. Against the odds, this may be faster to settle in real time.",
    "Meeting. A focused discussion with the right people could legitimately help.",
    "Meeting. This barely clears the bar, but it does clear it.",
    "Meeting. If there is a precise goal and an actual decider, synchronous discussion is reasonable.",
    "Meeting. Unpleasantly valid."
  ]
};

const LOADER_MESSAGES = [
  "Analyzing meeting necessity...",
  "Reviewing attendee impact...",
  "Checking if this could be handled in Teams or Slack...",
  "Running common sense filter...",
  "Measuring calendar damage potential...",
  "Estimating how many people would nod silently...",
  "Comparing this idea against the known limits of human patience..."
];

const MESSAGE_TEMPLATES = {
  email: {
    polite: [
      "Hi team,\n\nThis looks like something we can handle asynchronously. I'm sending the details here so everyone can review on their own time and reply if needed.\n\nThanks.",
      "Hello,\n\nI don't think we need a meeting for this one. Sharing the context here so we can keep things moving without adding calendar time.\n\nBest,",
      "Hi everyone,\n\nI'm sending this as a note instead of booking time so you can review it when convenient. If anything needs clarification, feel free to reply here.\n\nThank you,",
      "Hello team,\n\nTo keep things efficient, I'm outlining the situation here instead of scheduling a call. Please send any feedback or decisions directly in reply.\n\nBest regards,",
      "Hi all,\n\nThis seems straightforward enough to handle in writing. I've included the context below so we can keep progress moving without another meeting on the calendar.\n\nThanks,"
    ],
    direct: [
      "Team,\n\nNo meeting needed. Please review the details in this message and respond here if anything needs discussion.\n",
      "Sending this async so we can keep momentum. Please reply with questions or approvals by end of day.\n",
      "No call for this. Review the details below and respond in writing.\n",
      "Keeping this out of the calendar. Please read, reply, and move it forward.\n",
      "This can stay async. Send your answer or approval here once you've reviewed it.\n"
    ],
    passiveAggressive: [
      "Hi all,\n\nTo save everyone the joy of another meeting, I'm putting the full context here. Please review and respond directly so we can avoid scheduling what could be three sentences.\n",
      "Sharing this in writing since that is still technically allowed. If anything truly requires discussion, we can revisit after people have actually read it.\n",
      "Putting this in an email first, on the off chance we can solve it without inviting eight people to watch each other paraphrase.\n",
      "Documenting this here because written communication remains dramatically faster than pretending every update deserves live commentary.\n",
      "Sending the details below so we can try the unusual experiment of reading before scheduling.\n"
    ],
    brutal: [
      "No meeting.\n\nRead this, reply if necessary, and let's not convert basic literacy into a recurring event.\n",
      "This is being handled by message because it never deserved a calendar invite in the first place.\n",
      "Here is the information. Consume it asynchronously and leave the calendar out of it.\n",
      "This belongs in writing. If someone tries to schedule it, that is a separate problem.\n",
      "The answer is still email. Read, respond, continue functioning.\n"
    ]
  },
  chat: {
    polite: [
      "Quick question when you have a moment: can you help with this? I don't think it needs a meeting, just a fast answer here.\n",
      "Hi, sending this as a quick chat rather than scheduling time. Can you confirm the right next step when you're free?\n",
      "Hi, this seems like a quick one. Can you reply here when you have a minute so we can keep it moving?\n",
      "Hello, I think a short message should do the job here. Can you confirm the answer in chat when convenient?\n",
      "Quick note instead of a meeting invite: can you take a look and reply here when you're able?\n"
    ],
    direct: [
      "Quick check: what's the answer here?\nNo meeting needed, just reply in chat.\n",
      "Can you confirm this in chat today? Trying to keep this out of the calendar.\n",
      "Need a quick answer here. Reply in chat when you see this.\n",
      "This should be a message, not a meeting. Send the answer here.\n",
      "Can you resolve this in chat today? No need to schedule time.\n"
    ],
    passiveAggressive: [
      "Using chat because I'm optimistic this can be resolved in one message instead of thirty minutes.\nCan you confirm?\n",
      "Trying the radical approach of asking this directly in chat before anyone sends an invite. What's the answer?\n",
      "Posting this here first in the faint hope that a keyboard can spare us all a calendar event.\nCan you reply?\n",
      "Seeing whether this can survive as a chat message before it is promoted to a fully unnecessary meeting.\n",
      "Attempting the efficient version first: one message, one answer, no synchronized performance.\n"
    ],
    brutal: [
      "Answer here.\nIf this turns into a meeting, something has gone badly wrong.\n",
      "Quick reply needed. Let's not schedule a call to exchange one sentence.\n",
      "Reply in chat. If this becomes a meeting, we've failed.\n",
      "Need the answer here, not in a room full of microphones.\n",
      "One message should end this. Do not escalate it into a call.\n"
    ]
  },
  meeting: {
    polite: [
      "I think this one would benefit from a short meeting so we can resolve the open points live and leave with a decision. I'll keep the group tight and the agenda focused.\n",
      "This seems complex enough to justify a brief sync. I'll propose a short meeting with the key people only and circulate outcomes afterward.\n",
      "This looks like a case where a short meeting could save time overall. I'll keep it focused and make sure we leave with clear next steps.\n",
      "I think a brief discussion with the right people would help us resolve this efficiently. I'll keep the meeting short and outcome-oriented.\n",
      "This may be easier to sort out in real time. I'll propose a concise meeting with a clear objective and send follow-up notes afterward.\n"
    ],
    direct: [
      "This needs a short meeting. We have dependencies to sort through and should leave with a decision.\n",
      "Let's do a focused meeting with the relevant people only. Goal: resolve the open questions and move on.\n",
      "Book a short meeting. We need live discussion to settle this.\n",
      "This should be handled in a tight meeting with the decision-makers only.\n",
      "Let's meet briefly, resolve the open issues, and close it out.\n"
    ],
    passiveAggressive: [
      "This is one of the rare cases where a meeting may actually be faster than another chain of fragmented messages. Let's keep it short enough to remain defensible.\n",
      "Reluctantly recommending a meeting here because the async version will likely become twelve separate misunderstandings.\n",
      "It appears we have found one of the few situations where a meeting might do less damage than continued back-and-forth.\n",
      "Suggesting a short meeting before this turns into a sprawling message chain with no owner and no outcome.\n",
      "A brief meeting may be the least inefficient option available here, which is not a sentence I enjoy writing.\n"
    ],
    brutal: [
      "Fine. Book the meeting.\nSmall group, clear decision, no wandering, no storytelling.\n",
      "This has barely earned synchronous time. Keep it short, useful, and aggressively specific.\n",
      "Meeting approved. Keep the attendee list small and the nonsense smaller.\n",
      "Book the call, make the decision, end it fast.\n",
      "This can be a meeting, but only if it behaves like one.\n"
    ]
  }
};

const LAST_MESSAGE_BY_TONE = {
  polite: "",
  direct: "",
  passiveAggressive: "",
  brutal: ""
};

const CATEGORY_LABELS = {
  statusUpdate: "Status update",
  fyi: "FYI / info",
  simpleQuestion: "Simple question",
  approval: "Approval",
  brainstorm: "Brainstorm",
  decision: "Decision",
  tooManyPeople: "Too many people",
  oneOnOne: "One-on-one",
  urgentIncident: "Urgent incident",
  rambling: "Rambling input",
  generic: "Generic",
  legitMeeting: "Legit meeting"
};

const VERDICT_CONFIG = {
  email: { label: "Email", icon: "\u2709", badgeClass: "email" },
  chat: { label: "Teams or Slack", icon: "\u{1F4AC}", badgeClass: "chat" },
  meeting: { label: "Meeting", icon: "\u{1F5D3}", badgeClass: "meeting" }
};

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickWeighted(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;

  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) {
      return item.value;
    }
  }

  return items[items.length - 1].value;
}

function normalizeText(input) {
  return input.toLowerCase().replace(/\s+/g, " ").trim();
}

function countMatches(text, keywords) {
  return keywords.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0);
}

function detectCategory(input) {
  const text = normalizeText(input);
  const wordCount = text ? text.split(" ").length : 0;

  if (wordCount > 32 || input.trim().length > 220) {
    return "rambling";
  }

  const scores = {
    urgentIncident: countMatches(text, ["urgent", "incident", "outage", "broken", "sev", "p1", "down", "production", "asap"]),
    brainstorm: countMatches(text, ["brainstorm", "ideas", "ideate", "workshop", "creative", "concepts"]),
    decision: countMatches(text, ["decision", "decide", "tradeoff", "options", "alignment", "choose", "final call"]),
    statusUpdate: countMatches(text, ["status", "update", "progress", "weekly", "checkpoint", "where things stand"]),
    fyi: countMatches(text, ["fyi", "for your awareness", "sharing", "heads up", "just so you know", "inform"]),
    simpleQuestion: countMatches(text, ["quick question", "can you", "do we", "should we", "what is", "where is", "who owns"]),
    approval: countMatches(text, ["approve", "approval", "sign off", "review and approve", "okay to proceed"]),
    tooManyPeople: countMatches(text, ["everyone", "whole team", "all hands", "all involved", "many people", "leadership and team"]),
    oneOnOne: countMatches(text, ["1:1", "one-on-one", "one on one", "my manager", "one person", "directly with"]),
    legitMeeting: countMatches(text, ["cross-functional", "dependencies", "multiple teams", "complex", "blocked", "working session"])
  };

  if (wordCount <= 4) {
    return "generic";
  }

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topCategory, topScore] = ranked[0];

  if (topScore === 0) {
    return wordCount > 55 ? "rambling" : "generic";
  }

  if (scores.brainstorm > 0 && scores.decision > 0) {
    return "legitMeeting";
  }

  if (scores.urgentIncident >= 2) {
    return "urgentIncident";
  }

  if (scores.tooManyPeople >= 2) {
    return "tooManyPeople";
  }

  return topCategory;
}

function determineVerdict(category, input) {
  if (category === "generic") {
    return pickWeighted([
      { value: "email", weight: 78 },
      { value: "chat", weight: 18 },
      { value: "meeting", weight: 4 }
    ]);
  }

  return getDefaultVerdictForCategory(category);
}

function getDefaultVerdictForCategory(category) {
  const defaults = {
    statusUpdate: "email",
    fyi: "email",
    simpleQuestion: "chat",
    approval: "email",
    brainstorm: "meeting",
    decision: "meeting",
    tooManyPeople: "email",
    oneOnOne: "chat",
    urgentIncident: "chat",
    rambling: "email",
    generic: "email",
    legitMeeting: "meeting"
  };

  return defaults[category] || "email";
}

function getConfidenceLabel(category, verdict) {
  if (category === "generic") {
    return "moderate";
  }

  if (verdict === "meeting" && (category === "brainstorm" || category === "decision" || category === "legitMeeting")) {
    return "surprisingly justified";
  }

  if (category === "rambling") {
    return "aggressively confident";
  }

  return "high";
}

function getInputTypeLabel(input) {
  const words = normalizeText(input).split(" ").filter(Boolean).length;

  if (words <= 8) {
    return "very short";
  }

  if (words <= 30) {
    return "concise";
  }

  if (words <= 70) {
    return "detailed";
  }

  return "rambling";
}

function getResponseForScenario(input) {
  const category = detectCategory(input);
  const verdict = determineVerdict(category, input);
  const responsePool = RESPONSE_LIBRARY[category] || RESPONSE_LIBRARY.generic;
  const defaultVerdict = getDefaultVerdictForCategory(category);
  const explanation = verdict === defaultVerdict
    ? randomFrom(responsePool)
    : randomFrom(VERDICT_EXPLANATIONS[verdict]);

  return {
    category,
    categoryLabel: CATEGORY_LABELS[category],
    verdict,
    explanation,
    verdictConfig: VERDICT_CONFIG[verdict],
    confidence: getConfidenceLabel(category, verdict),
    inputType: getInputTypeLabel(input)
  };
}

function getGeneratedMessage(result, tone) {
  const toneSet = MESSAGE_TEMPLATES[result.verdict][tone] || MESSAGE_TEMPLATES[result.verdict].polite;
  if (toneSet.length === 1) {
    LAST_MESSAGE_BY_TONE[tone] = toneSet[0];
    return toneSet[0];
  }

  const lastMessage = LAST_MESSAGE_BY_TONE[tone];
  let message = randomFrom(toneSet);
  let attempts = 0;

  while (message === lastMessage && attempts < 6) {
    message = randomFrom(toneSet);
    attempts += 1;
  }

  LAST_MESSAGE_BY_TONE[tone] = message;
  return message;
}

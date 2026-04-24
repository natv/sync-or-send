# Sync or Send

`Sync or Send` is a lightweight static web app that answers one question:

**Should this be a meeting?**

The app looks like a productivity tool, but the verdicts are intentionally dry, judgmental, and a little ridiculous. A user pastes a work scenario, clicks `Check`, waits through a fake analysis phase, and gets a recommendation:

- `Email`
- `Teams or Slack`
- `Meeting`

If they want, they can then generate a copyable message in one of four tones:

- `Polite`
- `Direct`
- `Passive Aggressive`
- `Brutal`

## What It Does

- Takes a freeform scenario in a textarea
- Runs a short fake analysis animation
- Classifies the input with simple keyword and length rules
- Returns a verdict and humorous explanation
- Lets the user regenerate a fresh verdict from the same input with `Try another`
- Generates copyable follow-up messages based on the verdict and selected tone
- Works as a fully static frontend with no backend, auth, database, or external APIs

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

No build step is required.

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── responses.js
└── README.md
```

## How It Works

### Verdict logic

The app uses keyword detection plus input length to map a scenario into categories such as:

- `status update`
- `FYI / info`
- `simple question`
- `approval`
- `brainstorm`
- `decision`
- `too many people`
- `one-on-one`
- `urgent incident`
- `rambling`
- `generic`
- `legit meeting`

Most categories map to a default verdict. Only the `generic` bucket uses weighted randomness, biased heavily toward async communication.

### Response system

- `responses.js` contains `180` verdict explanations across the categories
- The app keeps verdict and explanation aligned so the copy does not contradict itself
- The message generator uses separate templates for each verdict and tone

### UX flow

1. User enters a scenario
2. User clicks `Check`
3. App shows rotating fake analysis messages for about `1.5 seconds`
4. App reveals the verdict and explanation
5. User can click `Try another` to reroll from the same input
6. User can click `Generate Message`
7. User can switch tones and copy the message

## Running Locally

Because the app is static, you can run it by opening `index.html` directly in a browser.

If you want to serve it locally instead of opening the file directly, any static server works. For example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Validation

The project has been checked with:

```powershell
node --check app.js
node --check responses.js
```

Additional logic checks were run against representative scenarios to confirm:

- email-style scenarios resolve to `Email`
- short question and incident scenarios resolve to `Teams or Slack`
- brainstorm / decision / dependency scenarios resolve to `Meeting`
- long inputs resolve to the `rambling` path

## Deployment

This app is suitable for any static hosting platform, including:

- GitHub Pages
- Netlify
- Vercel static hosting
- Cloudflare Pages

Because there is no backend, deployment is just serving the repository contents as static files.

## Notes

- Clipboard copy uses the modern clipboard API when available and falls back to a legacy copy approach otherwise.
- The app is intentionally humorous. It should feel like a real SaaS tool on first glance, but the copy is the joke.

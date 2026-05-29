# PublishingOS — Full Offer & Process Overview

**Operated by:** Nespola LTD  
**Website:** https://www.publishingos.io

---

## What Is PublishingOS?

PublishingOS is a one-on-one AI publishing coaching and mentorship program. Students build a digital asset book business on Amazon KDP (Kindle Direct Publishing) using AI tools, with the goal of generating passive income in 1–2 hours per day — no writing or publishing experience required.

The program is not a course or standard mentorship. It's a partnership model where students are expected to commit fully once they decide it's aligned with their goals.

---

## The Offer

- **Model:** AI-powered Amazon KDP book publishing
- **Time commitment:** 1–2 hours/day to start; ~3–6 hours/month at scale
- **AI's role:** AI handles ~80% of the work (research, writing, formatting); student handles the remaining 20% (oversight, decisions, strategy)
- **Platform:** Amazon KDP (primary); Spotify audiobooks (secondary income stream)
- **Goal:** Build a "Minimal Viable Portfolio" of books that generates consistent monthly royalties
- **Exit opportunity:** Portfolio can be sold as an asset (e.g. Guy's portfolio valued at ~$250,000)
- **Multiple packages available** (pricing addressed 1-on-1 on the sales call)

---

## The Funnel

### Step 1 — Ad → `/home`
- Visitor lands on the home page
- Headline: *"Build a digital asset book business with 1–2 hours a day that generates passive income"*
- VSL (video sales letter) plays via Wistia
- **5-minute countdown timer** locks the Typeform application — visitor must watch the full video first
- After 5 minutes, the Typeform unlocks and they can apply

### Step 2 — Typeform Application (`/home` & `/application`)
- Lead fills out the application
- Redirect URL passes first name + email as URL parameters:  
  `https://www.publishingos.io/thankyou?email=[Email]&name=[First Name]`

### Step 3 — Thank You Page (`/thankyou` or `/thankyou-1k`)
- Personalized headline: *"Congratulations [NAME]! You've booked your call"*
- Phone call alert: *"You will receive a phone call from our team. Keep your phone nearby."*
- Team calls from **(352) area code**
- Page contains 4 steps for the lead to complete before the meeting:
  1. Watch the PublishingOS overview video
  2. Check email (move to inbox, star it, respond)
  3. Read the Program Breakdown document
  4. Watch FAQ videos (19 questions answered)
  5. Watch student testimony interviews

### Step 4 — Sales Call (Zoom)
- 1-on-1 Zoom call with a team member
- Focus: understanding the lead's goals and game plan
- Requirements: good internet, working camera/mic, full attention
- No-show/cancel policy: leads are blacklisted if they don't communicate

### Step 5 — Onboarding (`/onboarding`)
- Program: **PublishingOS Veloce**
- Setup takes ~15 minutes, 3 steps:
  1. **Join Slack** — Private channel named `firstname-lastname-lounge`; primary line of communication with the team
  2. **Join Skool** — Course content, resources, community, and weekly Q&A calls
  3. **Fill out onboarding form** — Via the Slack Shared Canvas; gives team context to start immediately
- Team follows up inside private Slack channel **within 24 hours**

---

## Resources Page (`/resource-page`)

Seven resources provided to leads before or after the call:

| # | Resource |
|---|----------|
| 1 | PublishingOS Overview Video |
| 2 | Program Breakdown Document (Google Doc) |
| 3 | FAQ Videos (19 questions) |
| 4 | Student Testimonies (video interviews + screenshots) |
| 5 | Emails (check inbox, move, star) |
| 6 | YouTube videos |
| 7 | TrustPilot Reviews (via Senja widget) |

---

## FAQ Topics Covered (19 Videos)

1. How much capital do you need?
2. What are the packages?
3. What is the price?
4. How long does it take to get results?
5. The "Exit" opportunity
6. Addressing online reviews
7. Common reasons why some publishers fail
8. How we leverage AI
9. What kind of books are we publishing?
10. What are the net profits?
11. If AI does 80% of the work, what is the 20% we do?
12. How do Amazon KDP payouts work?
13. Time needed for this business weekly?
14. Can I do this without book writing or publishing experience?
15. How do we prevent failure in our program?
16. What is the minimal viable portfolio?
17. Is this business saturated?
18. Why shouldn't I do this without help?
19. Why do you sell a program?

---

## Student Results

| Student | Result | Notes |
|---------|--------|-------|
| **Ricard** | ~$30,000/month profit | $51,565.87 gross, $30,370.30 net; 10,356 units; 143% ROI; 30% ACoS |
| **James** | 6 figures/month | Former JP Morgan employee; 3–6 hours/month; no writing background |
| **Graciela** | $700,000+ in 11 months | One book earns $30k/month; co-managed with brother-in-law |
| **Joe** | $6,000/month | Audiobooks on Spotify; 99% profit margins; runs separate cleaning business full-time |
| **Gaurav** | $7,000/month | Almost quit before joining; now earns consistently |
| **Guy** | ~$250,000 portfolio asset | Broadway actor; consistent, scalable, sellable income |

---

## Pre-Call Checklist (For Leads)

- Watch the overview video
- Check email: find it in spam/promotions → Report not spam → Star → Move to inbox → Reply to the question
- Keep phone nearby for a call from **(352) area code**
- Read the Program Breakdown document
- Watch FAQ videos
- Watch student interviews

## Meeting Requirements

- Good internet connection
- Working camera and microphone
- Full attention (no driving, no multitasking)
- Calls are on Zoom — details sent via email and text
- Cancellation/reschedule must be communicated — no-shows are blacklisted

---

## Tracking & Tech Stack

| Tool | Details |
|------|---------|
| **Meta Pixel** | ID: `587628653021848` — fires `PageView`, `Schedule`, `Purchase` events |
| **Hyros** | Universal script on all 16 pages (`215376.t.hyros.com`) |
| **Typeform** | Two forms: home funnel (`01KGNNW87S5K3DAX3YMXSACR3A`), application page (`01KJDA8BCJ1TBF9AZF727CN9J8`) |
| **Wistia** | Video hosting for VSL and FAQ videos |
| **YouTube** | Student testimony interviews |
| **Skool** | Course platform + community |
| **Slack** | 1-on-1 student-team communication |
| **Senja** | TrustPilot review widget |
| **Vercel** | Hosting (auto-deploys from GitHub: `kauaoliveira0606/publishingos.io`) |

---

## All Pages

| URL | Purpose |
|-----|---------|
| `/` | Root/landing |
| `/home` | Main funnel (VSL + countdown + Typeform) |
| `/application` | Direct application page |
| `/thankyou` | Thank you — main funnel (personalized) |
| `/thankyou-1k` | Thank you — 1k funnel (personalized) |
| `/ty-page` | Secondary thank you page |
| `/resource-page` | 7-resource pre-call page |
| `/testimonies` | Full case studies page |
| `/onboarding` | Post-sale onboarding (Veloce) |
| `/onboarding-pro` | Onboarding — Pro tier |
| `/onboarding-ds` | Onboarding — DS tier |
| `/onboarding-accelerator` | Onboarding — Accelerator tier |
| `/workshop` | Workshop page |
| `/replay` | Replay page |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

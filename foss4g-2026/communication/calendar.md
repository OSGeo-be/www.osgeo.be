# Communications Calendar — FOSS4G Belgium 2026

> Check ✅ when a post is published.  
> **Comms lead:** _to assign_  
> Channels: ML = Mailing list · MX = Matrix · MD = Mastodon · TW = Twitter/X · LI = LinkedIn · FB = Facebook · TG = Telegram

---

## Message types

| Type | Description |
|------|-------------|
| 📣 `call` | Launch of a Call (Sponsors, Presentations, Volunteers, Maps) |
| 🔔 `reminder` | Upcoming deadline reminder |
| 📅 `save-date` | Save the date / event reminder |
| 🎉 `announce` | Major announcement (programme, speakers, venue…) |
| 📸 `post-event` | Post-event communications |

---

## June 2026

| Date | Type | Message | ML | MX | MD | TW | LI | FB | TG |
|------|------|---------|----|----|----|----|----|----|---|
| 1 June | 📣 `call` | **Launch Call for Sponsors** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 15 June | 📅 `save-date` | Save the date — 15 October, Brussels | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 30 June | 🔔 `reminder` | CfS reminder — "a few sponsor slots left" | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

---

## July 2026

| Date | Type | Message | ML | MX | MD | TW | LI | FB | TG |
|------|------|---------|----|----|----|----|----|----|---|
| 7 July | 📣 `call` | **Launch Call for Presentations** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 July | 📣 `call` | **Launch Call for Volunteers** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 7 July | 📣 `call` | **Launch Call for Maps** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 20 July | 🔔 `reminder` | CfP reminder — "3 weeks left to submit" | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

---

## August 2026

| Date | Type | Message | ML | MX | MD | TW | LI | FB | TG |
|------|------|---------|----|----|----|----|----|----|---|
| 3 Aug | 🔔 `reminder` | CfP — **"Last week!"** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 10 Aug | 🔔 `reminder` | **CfP closed** — "Submissions are closed" | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 25 Aug | 🎉 `announce` | Speaker notifications _(direct email only)_ | ☐ | — | — | — | — | — | — |

---

## September 2026

| Date | Type | Message | ML | MX | MD | TW | LI | FB | TG |
|------|------|---------|----|----|----|----|----|----|---|
| 1 Sept | 🎉 `announce` | **Programme published!** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 1 Sept | 🎉 `announce` | **Registrations open** (Pretix) | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 1 Sept | 🔔 `reminder` | CfV — "volunteer spots still available" | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 15 Sept | 🔔 `reminder` | CfM — "16 days left to submit your map" | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 20 Sept | 🔔 `reminder` | Registration reminder | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

---

## October 2026 — Before the event

| Date | Type | Message | ML | MX | MD | TW | LI | FB | TG |
|------|------|---------|----|----|----|----|----|----|---|
| 1 Oct | 🔔 `reminder` | **2 weeks to go!** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 8 Oct | 🔔 `reminder` | **1 week to go** — full programme + practical info | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 14 Oct | 🔔 `reminder` | **Tomorrow!** — venue address and schedule | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 15 Oct | 📅 `save-date` | **Live posts during the event** (comms volunteer) | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

---

## October–November 2026 — Post-event

| Date | Type | Message | ML | MX | MD | TW | LI | FB | TG |
|------|------|---------|----|----|----|----|----|----|---|
| 16 Oct | 📸 `post-event` | "Thank you all!" + photos | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 31 Oct | 📸 `post-event` | Slides and videos online | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| 15 Nov | 📸 `post-event` | Edition wrap-up (mailing list + website) | ☐ | — | ☐ | — | ☐ | — | — |

---

## Automation options

### Option 1 — Manual with structure (recommended to start)
- This file as a shared checklist on GitHub
- Comms lead checks off and publishes
- GitHub Issues with due dates for each send

### Option 2 — Semi-automated with GitHub Actions
- A `cron` workflow auto-creates a GitHub Issue on each key date
- The Issue contains the text to publish
- The comms lead publishes manually → checks off → closes the Issue
- See: [automation/github-actions.md](../automation/github-actions.md)

### Option 3 — Social automation (Mastodon + Matrix)
- GitHub Action → Mastodon API (fosstodon.org) for short posts
- GitHub Action → Matrix webhook for channel reminders
- Facebook/LinkedIn require an approved app (more complex)

# TechNova 2026: College Tech-Fest Event Portal 🎉

**TechNova 2026** is a responsive, front-end-only event portal built by **Team 11** for the **User Interface Design (UID)** end-semester hackathon. Students can browse fest events, register for them through interactive dialogs, and leave star-rated feedback. The whole site runs in the browser and needs no backend.

---

## ✨ Features

- 🏠 **Home page** with the fest branding and a live "today" date card
- 📅 **Events page** where cards are generated from a JavaScript events object (category, date, time, venue, fee, open/closed status, caption)
- 📝 **Event registration** in **SweetAlert2** modal forms (name, email, registration number, mobile, team name and size, participation type)
- ⭐ **Feedback form** with a clickable 5-star rating, an event dropdown populated from data, and regex validation of the university registration number (`XX.XX.XNXXXNNNNN`)
- 📊 **Instant feedback summary**: average rating per event with a qualitative verdict ("Excellent", "Good", "Needs improvement")
- 🧩 **Reusable footer** injected through JavaScript on every page

---

## 🏗️ Architecture & Concepts

```
index.html ──┐
events.html ─┼──► script.js  (shared logic)
feedback.html┘      ├── events{} data model (single source of truth)
                    ├── renderers: date card, event cards, event dropdown, footer
                    ├── registration flow (SweetAlert2 modals)
                    └── feedback flow: validate → store (in-memory) → aggregate → popup
style.css / style2.css ──► layout, cards, navbar, responsive styling
```

**Concepts:** UI/UX design principles (consistency, feedback, affordance) · semantic HTML5 · CSS Flexbox layouts and responsive design · **data-driven DOM rendering** with vanilla JavaScript · event handling · client-side form validation with **regular expressions** · simple data aggregation (average ratings) · third-party UI library integration (SweetAlert2 through a CDN)

---

## ⚙️ Getting Started

No build step or dependencies are required.

```bash
git clone https://github.com/God-Gamer-Manyu/UID_Hackathon_End_Sem_team_11.git
cd UID_Hackathon_End_Sem_team_11
```

Open `index.html` in any modern browser, or serve the folder locally:

```bash
python -m http.server 8000     # → http://localhost:8000
```

> An internet connection is needed for the SweetAlert2 CDN script. Feedback is kept in memory, so it resets when the page reloads.

---

## 📁 Project Structure

```
├── index.html      # Landing page
├── events.html     # Event listing + registration
├── feedback.html   # Feedback form with star rating
├── script.js       # Shared data and interaction logic
├── style.css       # Main styles
└── style2.css      # Feedback page styles
```

## 🛠️ Tech Stack

`HTML5` · `CSS3` · `JavaScript (ES6)` · `SweetAlert2`

## 👥 Team

**Team 11**, including **Rtamanyu N J** ([@God-Gamer-Manyu](https://github.com/God-Gamer-Manyu))

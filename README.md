
## Fullstack Components

This repository is a daily practice initiative focused on strengthening full-stack web development skills through the consistent creation of reusable frontend components, each optionally paired with backend functionality. All components are modular, well-documented, and built with real-world reusability in mind.

---

## Goal

- Build a frontend component (React + Tailwind/DaisyUI)
- (Optional) Add a small backend API (Node.js/Express or Django)
- Document the logic, props, and API in README
- Push code daily to maintain consistency & contribution streak

---
## Folder Structure

```
fullstack-components/
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── README.md
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Modal.module.css
│   │   │   │   └── README.md
│   │   │   └── index.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Docs.jsx
│   │   │   └── ...
│   │   │
│   │   ├── index.html
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── modal/
│   │   └── logModalEvent.js
│   └── ...
│
├── public-demo/
│   └── screenshots/
│       └── modal-preview.png
│
├── README.md         ← Main project overview
└── .gitignore
```

## How to Run Components

###  Frontend

```bash
cd frontend
npm install
npm run dev
````

You can also run a Vite project or load individual files into a parent app.

###  Backend (if used)

```bash
cd backend
node <component-api>.js
# Example:
node modal-log-api.js
```

---

## 🧠 Daily Component Blueprint

Each component lives inside `components/<ComponentName>` and includes:

*  `Component.jsx` – Functional, clean code
*  `README.md` – Logic, API details, and usage
*  `style.css` or Tailwind-based styling
*  (Optional) `backend-snippets/<api>.js` – Demo API logic

---

## 📘 Component Index

| # | Component    | Frontend | Backend | Docs                                |
| - | ------------ | -------- | ------- | ----------------------------------- |
| 1 | Modal        | ✅        | ✅       | [View](components/Modal/README.md)  |
| 2 | Button       | ✅        | ❌       | [View](components/Button/README.md) |
| 3 | FileUploader | ❌        | ❌       | Coming Soon                         |
| 4 | Toast/Alert  | ❌        | ❌       | Coming Soon                         |

> ✅ = Complete, ❌ = Pending

---

## How I Work Each Day

### 1. Pick a component idea (e.g., Modal, Stepper, Dropdown)

### 2. Design frontend using React + Tailwind

### 3. Add backend logic (if relevant)

### 4. Write component-specific README with:

* Features
* State/prop logic
* API explanation
* Usage example

### 5. Git workflow

```bash
git checkout -b feat/<component-name>
git add .
git commit -m "feat: add <component-name>"
git push origin feat/<component-name>
```

Then merge to `main` or via PR.

---

## Why This Repo Exists

This is not just practice — it's:

* A habit-builder
* A learning accelerator
* A component library in progress
* A portfolio booster

---

## Tech Stack

* **Frontend**: React (Vite), Tailwind CSS, DaisyUI
* **Backend (Optional)**: Express.js / Django REST
* **Versioning**: Git + GitHub

---

## Git workflow
```
git checkout -b feat/<component-name>
git add .
git commit -m "feat: add <component-name>"
git push origin feat/<component-name>
```

## License

MIT License – free to use, modify, and contribute.

---
# 1Fi Marketplace - MERN Stack SDE Assignment

A mobile-first, responsive, and production-ready MERN (MongoDB, Express, React, Node.js) marketplace application designed to replicate the 1Fi financial application design language. This module enables users to explore products, view mutual-fund backed No-Cost EMI plans, and simulate a seamless fintech shopping experience.

---

## **Features**
* **Mobile-First Responsive UI:** Designed with a strict max-width container (480px), deep purple branding (`#3B1280`), rounded UI cards, and a bottom navigation layout mirroring the 1Fi ecosystem.
* **Dynamic Marketplace & Search:** Fetches product inventory dynamically from MongoDB and features a real-time reactive search bar tailored to active tabs.
* **EMI Plan Selection:** Interactive breakdown of duration, interest rates (No-Cost vs. Interest-bearing plans), and monthly installments with validation locking for primary action buttons.
* **Unified Server Architecture:** Express backend configured to serve both the REST API endpoints and the compiled React production build (`/dist`) from a single server instance.

---

## **Tech Stack**
* **Frontend:** React (Vite), Lucide-React (Iconography), Axios, Global CSS.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB Atlas (Mongoose ODM).
* **Deployment:** Render (Unified Web Service).

---

## **Project Structure**
```text
1Fi-Marketplace/
├── backend/
│   ├── database/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── data/
│   │   └── products.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── index.js
│   ├── seeder.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    └── package.json

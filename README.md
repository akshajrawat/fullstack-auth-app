readme: |

# 🔐 Fullstack Authentication System (MERN Stack)

A clean and secure fullstack authentication system using **Node.js**, **Express**, **MongoDB**, and **React (Vite)**. Features JWT-based authentication, cookie handling, role-based access (admin/user), and login logs — with a modular codebase for scalability.

---

## ✅ Features

### 🔒 Backend (Express + MongoDB)

- ✅ JWT token-based login & register
- 🍪 Token set securely in `httpOnly` cookie
- 🧠 `express-async-handler` used with centralized error handling
- 📦 `tokenGenerator()` utility for JWT signing
- 🛡️ Protected routes via custom `tokenHandler` middleware
- 📄 User login logs stored per request (device info, timestamp, message)
- 🧩 Error constants handled through a utility file

### 💻 Frontend (React + Tailwind)

- ⚛️ Built with **Vite + React Router DOM**
- 🎨 **Tailwind CSS** for responsive styling
- 🔁 Reusable `FormBuilder` component
- 🔐 Role-based route protection via `<ProtectedRoutes />`
- 🧠 Uses `useFetch()` hook for fetching user & logs
- 📋 `Dashboard` shows user login logs
- 📊 `AdminDashboard` shows all users (admin-only)

---

## 🧰 Technologies Used

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT
- bcrypt
- cookie-parser
- express-async-handler

### Frontend

- React
- React Router DOM
- Tailwind CSS
- react-hot-toast
- Vite

---

## 📦 Installation

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/fullstack-auth.git
   ```

2. Setup backend

   ```bash
   cd Backend
   npm install
   touch .env
   ```

   Fill in `.env`:

   ```env
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```

3. Start backend

   ```bash
   npm run dev
   ```

4. Setup frontend
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

---

## 🌟 Highlights

| Feature                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| ✅ Auth (Login/Register) | With hashed password and secure cookies     |
| 📋 Login Logs            | Track IP, agent, and custom messages        |
| 🔐 Role Protection       | `/adminDashboard` only accessible by admins |
| 📁 Modular Structure     | Follows best practice directory structure   |
| 🧠 Error Handling        | Clean, reusable, and centralized            |

---

## 📸 UI Screens

- Login/Register forms
- Dashboard showing logs
- Admin dashboard showing users with S.No, name, email, role, etc.

---

## 📄 License

MIT License — free to use, modify, or share.

---

> Made with 💻 and ☕ as a learning project to showcase fullstack skills including backend auth logic, JWT handling, and clean frontend UX.

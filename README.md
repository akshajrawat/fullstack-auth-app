# 🔐 Fullstack Auth API (Backend Only)

This project is a backend authentication system built using **Node.js**, **Express**, and **MongoDB**. It features **JWT token-based authentication**, secure cookie handling, and a modular folder structure for scalability and maintainability.

---

## ✨ Features

- ✅ JWT token-based authentication
- 🍪 JWT token stored securely in HTTP-only cookies
- 🧠 Centralized async error handling using `express-async-handler`
- 📦 Custom error middleware for consistent error responses
- ♻️ Reusable token generator utility
- 📁 Environment-based config setup for database connection
- 🧩 Constants for status codes to avoid magic numbers

---

## ⚙️ Utilities

- **Token Generator**
  - A utility function in `/Util` to create JWT tokens.
  - Pure and reusable.
- **Status Code Constants**
  - Centralized `STATUS_CODES` object for use across middleware and controllers.

---

## 🍪 Cookie-Based Authentication

- JWT token is securely sent to the client in an HTTP-only cookie.
- Cookie is:
  - `httpOnly` for security
  - `sameSite: strict` to reduce CSRF risks
  - `secure` in production (HTTPS)

---

## ✅ What's Done

- [x] Backend API complete
- [x] Cookie-based token handling
- [x] Clean modular folder setup
- [x] Middleware-driven error management

---

## 🚧 Frontend

Frontend is **coming soon**. This backend is built to support a React or similar frontend in the future with secure JWT cookie-based login/logout flow.

---

## 📌 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- cookie-parser

---

## 📄 License

MIT

---

> Feel free to clone, fork, or use this repo as a starter for your own secure auth system!

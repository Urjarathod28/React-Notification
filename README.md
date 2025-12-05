# 🔔 React Notification System

## Screenshots

### Login Page

<img width="1918" height="969" alt="image" src="https://github.com/user-attachments/assets/be9dec94-43d8-44c7-90c8-c32b3aefe6b4" />

<img width="1911" height="977" alt="image" src="https://github.com/user-attachments/assets/a42fe9da-2177-4969-a8ad-a50ffeb27412" />

<img width="1919" height="965" alt="image" src="https://github.com/user-attachments/assets/d96fe9d6-b4b6-4bdf-85eb-f92d6e8351c7" />

### Register Page

<img width="1917" height="976" alt="image" src="https://github.com/user-attachments/assets/4b64ee9b-7bed-415b-adb5-80ce8a5bdb6f" />

<img width="1917" height="976" alt="image" src="https://github.com/user-attachments/assets/5ccb1a49-6177-440b-bb9a-aac7baf0acca" />



---

A fully functional **React project** to show notifications using **Toast, Alerts, and Async Notifications**. It includes authentication features and communicates with a backend API.

### Features

- 🔔 **Toast Notifications**
- ⚠️ **Alert Messages**
- 🔄 **Async Notifications** (Loading → Success → Error)
- 🌐 **Real API example** (Login / Register)
- 👤 **Authentication**
  - User Registration API
  - User Login API
  - Bcrypt password hashing
  - JSON Web Tokens (JWT)

This project helps you notify users when:

- API is loading
- Action is successful
- Something goes wrong
- You want to show warnings

---

## 📂 Folder Structure

### Frontend
```
frontend/
│── src/
│   ├── components/
│   │   ├── LoadingButton.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   └── main.jsx
│── index.html
│── package.json
│── vite.config.js
```

### Backend
```
backend/
│── src/
│   ├── controllers/
│   │   ├── authController.js
│   ├── models/
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   └── app.js
│── .env
│── package.json
```

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite
- Axios
- Custom Toast Component

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JWT authentication

---

## 🚀 Backend Setup

1️⃣ Install Dependencies
```bash
cd backend
npm install
```

2️⃣ Setup Environment File
Create a `.env` file in the backend root:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

3️⃣ Start Server
```bash
npm run dev
```

---

## 🖥️ Frontend Setup

1️⃣ Install Dependencies
```bash
cd frontend
npm install
```

2️⃣ Start React App
```bash
npm run dev
```

The app should now be running at `http://localhost:5173` (or the port Vite shows) and connected to your backend APIs.


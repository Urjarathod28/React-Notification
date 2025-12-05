1.Login Page
![alt text](<Screenshot 2025-12-05 173716.png>) 
![alt text](<Screenshot 2025-12-05 173734.png>)

2.Register Page
![alt text](<Screenshot 2025-12-05 173936.png>) 
![alt text](<Screenshot 2025-12-05 173858.png>) 
![alt text](<Screenshot 2025-12-05 173808.png>)

React Notification System (Toast + Alerts + Async Notifications)

A fully functional React project to show:

🔔 Toast Notifications

⚠️ Alert Messages

🔄 Async Notifications (Loading → Success → Error)

🌐 Real API example (Login / Register)

👤 Authentication

User Registration API
User Login API
Bcrypt password hashing
JSON Web Tokens (JWT)

This project helps you notify users when:

.API is loading

.Action is successful

.Something goes wrong

.You want to show warnings

frontend/
│── src/
│   ├── components/
│   │   ├── LoadingButton.jsx
│   │ 
│   │   
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   └── Register.jsx
│   │  
│   ├── App.jsx
│   └── main.jsx
│── index.html
│── package.json
│── vite.config.js

backend/
│── controllers/
│   ├── authController.js
│── models/
│   ├── userModel.js
│── routes/
│   ├── authRoutes.js
│── config/
│   ├── db.js
│── middleware/
│   ├── authMiddleware.js
│── app.js
│── .env
│── package.json

🛠️ Tech Stack
Frontend

React + Vite
-Axios
-Custom Toast Component

Backend

-Node.js
-Express.js
-MongoDB
-Mongoose
-bcrypt
-JWT authentication

Backend Setup
1️⃣ Install Dependencies
cd backend
npm init
npm run dev

2️⃣ Setup Environment File

Create .env

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

3️⃣ Start Server
npm run dev

🖥️ Frontend Setup
1️⃣ Install Dependencies
cd frontend
npm install

2️⃣ Start React App
npm run dev
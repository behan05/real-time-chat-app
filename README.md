# Real-Time Chat App

A full-stack real-time chat application with user authentication, private messaging, and instant communication using **React**, **Node.js**, **Express**, **Socket.IO**, and **MongoDB**.

## 🚀 Features

- 🔐 User Authentication (Login/Signup)
- 💬 One-to-one Private Messaging
- 📡 Real-time Message Updates using Socket.IO
- 📜 Chat History Stored in MongoDB
- ✏️ Typing Indicator (Optional)
- 📱 Responsive UI with modern UX
- 🕵️‍♂️ Protected Routes for authenticated users
- 📅 Timestamped Messages for logs

---

## 🧱 Tech Stack

**Frontend:**
- React (with Context API / Redux)
- Material UI or Tailwind (if used)
- Socket.IO-client

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO
- JWT for authentication
- bcrypt for password hashing

---

## 📁 Project Structure

```
real-time-chat-app/
├── client/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── App.jsx
│ └── package.json
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── socket/
│ ├── server.js
│ └── .env
├── README.md
├── package.json (if root setup)
└── LICENSE

```
---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app
```

##  Setup Backend
```bash
cd server
npm install
cp .env.example .env  # Add Mongo URI, JWT_SECRET
npm start
```

## Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

## 🔒 Environment Variables
```
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```

## 🌟 Acknowledgements
- Socket.IO Docs
- MUI / Tailwind CSS
- MongoDB & Mongoose
- JWT Authentication

## 📄 License
MIT License
© 2025 Behan Kumar
Contact: behankrbth@outlook.com

---

Let me know if:
- You used Tailwind or MUI — I’ll mention specifically.
- You included video/audio calling — I’ll expand the features.
- You want a PDF version — I can generate it too.





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
- WebRTC

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
git clone https://github.com/behan05/real-time-chat-app.git
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
Create a `.env` file with the following:
PORT=5000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```

## 🌟 Acknowledgements
- Socket.IO Docs
- Material UI (for consistent design components)
- MongoDB & Mongoose
- JWT Authentication

## 🚀 Deployment
Frontend deployed on: [Vercel](https://connect-link-three.vercel.app)  
Backend hosted on: Render
---


## 👨‍💻 About the Project
This is a passion project built to explore real-time technologies with full-stack development. It supports real-time communication, private messaging, and modern UX features — perfect for learning, collaboration, or extending into a social platform.


Let me know if:
- You used Tailwind or MUI — I’ll mention specifically.
- You included video/audio calling — I’ll expand the features.
- You want a PDF version — I can generate it too.
---


## 📬 Contact
For queries or contributions: [behankrbth@outlook.com](mailto:behankrbth@outlook.com)

## 📄 License
This project is licensed under the [MIT License](./LICENSE)

---


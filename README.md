

<h1 align="center">💬 MERN Real-Time Chat Application 🚀.</h1>

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack-4caf50?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Zustand-State_Management-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Socket.io-RealTime-black?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Server-3C873A?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

<p align="center">
  A <b>real-time chatting application</b> built with the <b>MERN Stack</b> 💻 — featuring <b>Socket.io</b> for instant communication and <b>Zustand</b> 🐻 for lightweight, efficient state management.
</p>

---

## ✨ Features
🔥 **Real-Time Messaging** — powered by **Socket.io** for instant bi-directional communication.  
👤 **User Authentication** — secure login/signup using **JWT** and **bcrypt**.  
💬 **Private One-on-One Chat** — persistent chat history with MongoDB.  
💡 **Online Status Indicators** — see who’s active in real-time.  
📱 **Responsive Design** — optimized for both desktop and mobile.  
⚡ **Zustand** — lightweight state management with minimal boilerplate.  
🗄️ **MongoDB** — for scalable data storage of users and messages.  

---

## 🏗️ Tech Stack
| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, Tailwind CSS, Zustand |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Real-Time Engine** | Socket.io |
| **Auth & Security** | JWT, bcrypt.js |
| **Tools** | Postman, Git, VS Code |

---

## 📂 Folder Structure


MERN-Chat-App/
├── backend/
│ ├── server.js
│ ├── package.json
│ ├── config/
│ │ └── db.js
│ ├── models/
│ ├── routes/
│ └── controllers/
│
└── frontend/
├── src/
│ ├── components/
│ ├── context/ (Zustand Store)
│ ├── pages/
│ ├── utils/
│ └── App.jsx
├── tailwind.config.js
└── package.json


---

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/VISWAR06/MERN-Chat-app.git
cd MERN-Chat-app

2️⃣ Backend Setup
cd backend
npm install
npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

4️⃣ Environment Variables

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

⚡ Zustand Store Example
// src/context/useChatStore.js
import { create } from "zustand";

const useChatStore = create((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
  clearChat: () => set({ messages: [] }),
}));

export default useChatStore;


🧠 Simple, Fast, and Scalable — Zustand keeps chat state clean and minimal 🐻

🎨 Screenshots (Optional)

Add screenshots later:

📸 Login Page  
💬 Chat Interface  
👥 Active Users Sidebar

🤝 Contributing

Contributions are welcome!
Fork this repo, create a new branch, make your changes, and submit a pull request. 🌱

🧑‍💻 Author

Viswa R
📧 viswaravikumr@gmail.com

🔗 LinkedIn

🐙 GitHub

🌟 Show Your Support

If you like this project, please ⭐ it on GitHub — your support motivates me to build more amazing projects! 🚀✨

<h3 align="center">💬 Built with ❤️ using MERN + Zustand + Socket.io</h3> ```

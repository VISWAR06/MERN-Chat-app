import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import LoginUpPage from "./Pages/LoginUpPage";
import SignUpPage from "./Pages/SignUpPage";
import { AuthStore } from "./store/AuthStore.js";

const App = () => {
  const { fucheck } = AuthStore();

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const data = await fucheck();
        console.log("✅ Auth Check Response:", data);
      } catch (error) {
        console.error("❌ Auth check failed:", error);
      }
    };

    fetchAuthData();
  }, [fucheck]);

  return (
    <div
      className="min-h-screen bg-slate-900 relative flex items-center justify-center
    p-4 overflow-hidden"
    >
      <div className="absolute top-0 -left-1 size-96 bg-pink-400 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -right-0 size-96 bg-cyan-400 opacity-20 blur-[100px]" />
      <div className="absolute bottom-0 -left-0 size-96 bg-cyan-400 opacity-20 blur-[100px]" />

      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;

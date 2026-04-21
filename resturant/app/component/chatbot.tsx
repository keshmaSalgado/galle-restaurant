"use client";
import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", text: message };
    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const botMsg = {
        role: "bot",
        text: data.reply || "Sorry, I couldn't understand that.",
      };

      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { role: "bot", text: "Error connecting to server." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🔘 Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-black text-white px-4 py-3 rounded-full shadow-lg z-50 hover:bg-amber-800"
      >
        💬
      </button>

      {/* 💬 Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-100 bg-white shadow-xl rounded-2xl z-50 flex flex-col">

          {/* Header */}
          <div className="bg-amber-900 text-white p-3 rounded-t-2xl flex justify-between items-center">
            <span>Galle Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {chat.length === 0 && (
              <p className="text-gray-400 text-sm">
                Ask me about menu, recipes, or opening hours 🍽️
              </p>
            )}

            {chat.map((msg, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded-lg max-w-[75%] ${msg.role === "user"
                    ? "bg-amber-100 ml-auto text-right  text-black"
                    : "bg-gray-100  text-black"
                  }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <p className=" text-sm  text-black" >Typing...</p>
            )}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none  text-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}

            />

            <button
              onClick={sendMessage}
              className="bg-amber-900 text-white px-3 rounded-lg hover:bg-amber-800"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
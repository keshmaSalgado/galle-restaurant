🍽️ Galle Restaurant AI Chatbot

An AI-powered restaurant web application built with Next.js frontend and FastAPI backend, integrated with Google Gemini AI to provide smart food recommendations, menu assistance, and customer support.

🚀 Features
🤖 AI-powered restaurant chatbot (Gemini)
🍔 Smart food recommendations
💬 Real-time chat interface
⚡ FastAPI backend (Python)
🌐 Next.js frontend (React)
🔐 Secure environment variables (.env)
🌍 CORS-enabled API for frontend integration
🏗️ Tech Stack
Frontend
Next.js
React
Tailwind CSS
Backend
FastAPI
Python
Pydantic
Uvicorn
AI
Google Gemini API
📁 Project Structure
restaurant-chatbot/
│
├── backend/
│   ├── main.py
│   ├── .env (not pushed to GitHub)
│   ├── .env.example
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   ├── components/
│   └── pages/
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/restaurant-chatbot.git
cd restaurant-chatbot
🖥️ Backend Setup (FastAPI)
2️⃣ Navigate to backend
cd backend
3️⃣ Create virtual environment
py -m venv venv
venv\Scripts\activate
4️⃣ Install dependencies
py -m pip install fastapi uvicorn google-generativeai python-dotenv
5️⃣ Create .env file
GEMINI_API_KEY=your_api_key_here
6️⃣ Run backend server
py -m uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000
🌐 Frontend Setup (Next.js)
7️⃣ Navigate to frontend
cd frontend
npm install
8️⃣ Run frontend
npm run dev

Frontend runs at:

http://localhost:3000
💬 Chatbot API
POST /chat

Request:

{
  "message": "What food do you recommend?"
}

Response:

{
  "reply": "Chicken Kottu is our most popular dish!"
}
🔐 Environment Variables

⚠️ Never push .env file to GitHub.

backend/.env
GEMINI_API_KEY=your_api_key_here
📌 Features in Detail
🍽️ Restaurant Assistant
Suggests food items
Answers menu questions
Helps with recommendations
🤖 AI Integration
Uses Google Gemini 1.5 Flash model
Context-based prompt for restaurant
⚡ Fast API Backend
Handles chat requests
Connects frontend to AI model
🛡️ Security
API keys stored in .env
CORS enabled for frontend communication
No sensitive data exposed
🚀 Future Improvements
🧠 Chat memory (user history)
💾 Database integration (MongoDB/PostgreSQL)
🛒 Food ordering system
📊 Admin dashboard
🎤 Voice assistant chatbot
🍽️ 3D AI waiter (React Three Fiber)
👨‍💻 Author

Keshma Salgado

Full Stack Developer
React & Next.js Developer
3D Web (React Three Fiber)
📄 License

This project is for educational and personal use.

⭐ Support

If you like this project:

Give a ⭐ on GitHub
Share it with others
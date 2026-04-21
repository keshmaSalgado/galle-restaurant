# 🍽️ Galle Restaurant — Full Stack Platform

> A modern, full-featured restaurant platform featuring a public-facing website with recipe management, an admin dashboard, and an **AI-powered chatbot** — built with **Next.js**, **FastAPI**, **Tailwind CSS**, and **Google Gemini AI**.

---

## 📸 Preview

```
User: "What do you recommend today?"
Bot:  "Our Chicken Kottu is a crowd favourite! Would you like to know what's in it?"
```

---

## ✨ Features

### 🌐 Public Website
| Feature | Description |
|---|---|
| 🏠 Home Page | Beautiful landing page with restaurant introduction |
| 🍲 Recipes Page | Grid layout with recipe descriptions and ingredients |
| 📬 Contact Page | Contact form and restaurant information |

### 👨‍💼 Admin Dashboard
| Feature | Description |
|---|---|
| 🔐 Secure Login | Admin authentication with protected routes |
| 📋 Recipe Management | Add, view, and delete recipes |
| 🖼️ Image Upload | Upload and display recipe images |
| 📱 Responsive Design | Fully optimized for desktop and mobile |

### 🤖 AI Chatbot
| Feature | Description |
|---|---|
| 🤖 Gemini AI | Powered by Google Gemini 1.5 Flash |
| 🍔 Smart Recommendations | Context-aware food suggestions |
| 💬 Real-time Chat | Fluid, responsive chat interface |
| 🌍 CORS Support | Seamless frontend–backend communication |

---

## 🏗️ Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

### Backend
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Uvicorn](https://img.shields.io/badge/Uvicorn-499848?style=flat)

### AI
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=flat&logo=google&logoColor=white)

---

## 📁 Project Structure

```
galle-restaurant/
│
├── frontend/                        # Next.js website & chat UI
│   ├── app/
│   │   ├── layout.tsx               # Root layout with navigation
│   │   ├── page.tsx                 # Home page
│   │   ├── recipes/
│   │   │   └── page.tsx             # Recipes listing page
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact form page
│   │   └── admin/
│   │       ├── login/
│   │       │   └── page.tsx         # Admin login page
│   │       └── dashboard/
│   │           └── page.tsx         # Admin dashboard
│   ├── api/
│   │   ├── recipes/
│   │   │   ├── route.ts             # GET & POST recipes
│   │   │   └── [id]/route.ts        # DELETE recipe
│   │   └── admin/
│   │       └── login/route.ts       # Admin authentication
│   ├── components/                  # Reusable UI components
│   ├── public/
│   │   └── uploads/                 # Recipe image storage
│   └── data/
│       └── recipes.json             # Recipe data (auto-created)
│
├── backend/                         # FastAPI + Gemini AI server
│   ├── main.py                      # Chat endpoint & AI logic
│   ├── .env                         # Secret keys (never push!)
│   ├── .env.example                 # Environment variable template
│   └── requirements.txt             # Python dependencies
│
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+
- Python 3.9+
- A [Google Gemini API key](https://makersuite.google.com/app/apikey)

---

### 🌐 Frontend Setup (Next.js Website)

```bash
# 1. Navigate to frontend
cd frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> ✅ Website running at: `http://localhost:3000`

---

### 🖥️ Backend Setup (FastAPI + AI Chatbot)

```bash
# 1. Navigate to backend
cd backend

# 2. Create and activate a virtual environment
py -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS/Linux

# 3. Install dependencies
py -m pip install fastapi uvicorn google-generativeai python-dotenv

# 4. Create your .env file
echo GEMINI_API_KEY=your_api_key_here > .env

# 5. Start the backend server
py -m uvicorn main:app --reload
```

> ✅ Backend running at: `http://127.0.0.1:8000`

---

## 💬 API Reference

### Website — Recipe API

#### `GET /api/recipes`
Fetch all recipes.

**Response**
```json
[
  {
    "id": "1234567890",
    "name": "Chicken Kottu",
    "description": "A Sri Lankan street food classic",
    "ingredients": ["roti", "chicken", "vegetables"],
    "instructions": ["step1", "step2"],
    "image": "/uploads/kottu.jpg",
    "createdAt": "2026-04-20T10:00:00Z"
  }
]
```

#### `POST /api/recipes`
Create a new recipe via FormData.

| Field | Type | Required |
|---|---|---|
| `name` | string | ✅ |
| `description` | string | ✅ |
| `ingredients` | string (newline-separated) | ✅ |
| `instructions` | string (newline-separated) | ✅ |
| `image` | File | ❌ |

#### `DELETE /api/recipes/[id]`
Delete a recipe by ID.

---

### Chatbot — AI API

#### `POST /chat`
Send a message to the restaurant AI assistant.

**Request**
```json
{ "message": "What food do you recommend?" }
```

**Response**
```json
{ "reply": "Chicken Kottu is our most popular dish! It's made with shredded roti, vegetables, and your choice of protein." }
```

---

## 🔐 Admin Dashboard

**Default Login Credentials**

| Field | Value |
|---|---|
| Username | `admin` |
| Password | `admin123` |

> ⚠️ Change these credentials before deploying to production.

---

## 🔑 Environment Variables

> ⚠️ **Never commit your `.env` file to GitHub.** Use `.env.example` as a safe template.

**`backend/.env`**
```env
GEMINI_API_KEY=your_api_key_here
```

**`backend/.env.example`**
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Make sure `.env` is added to `.gitignore`:
```
# .gitignore
backend/.env
```

---

## 🎨 Styling

The project uses Tailwind CSS with a warm restaurant color palette:

| Role | Color | Token |
|---|---|---|
| Primary | Rich Brown | `amber-900` |
| Accent | Light Tan | `amber-200` |
| Text | Neutral | `gray-600` |

---

## 📦 Available Scripts

```bash
# Frontend
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint

# Backend
py -m uvicorn main:app --reload   # Development with hot reload
```

---

## 🚀 Roadmap

- [x] Public website with recipes & contact page
- [x] Admin dashboard with recipe CRUD
- [x] Image upload for recipes
- [x] AI chatbot with Gemini integration
- [x] FastAPI backend with CORS
- [ ] 🧠 Persistent chat memory (conversation history)
- [ ] 💾 Database integration (MongoDB / PostgreSQL)
- [ ] 🔑 JWT authentication for admin
- [ ] 🛒 Food ordering & cart system
- [ ] ⭐ Recipe ratings and reviews
- [ ] 🔍 Search and filter functionality
- [ ] 📊 Admin analytics dashboard
- [ ] 🎤 Voice assistant support
- [ ] 🍽️ 3D AI waiter (React Three Fiber)

---

## 👨‍💻 Author

**Keshma Salgado**

Full Stack Developer · React & Next.js · 3D Web (React Three Fiber)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/your-username)

---

## 📄 License

This project is open source and available under the **MIT License**.  
Feel free to fork, learn, and build upon it!

---

## ⭐ Support

If you found this project helpful:

- Give it a **⭐ star** on GitHub
- Share it with fellow developers
- Open an issue or PR if you'd like to contribute!

---

> 📧 For questions or support: **keshmasalgado11@gmail.com**

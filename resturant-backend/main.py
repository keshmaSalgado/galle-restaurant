from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# =========================
# CORS (ALLOW FRONTEND)
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later change to your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# GEMINI CONFIG
# =========================
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# =========================
# REQUEST MODEL
# =========================
class ChatRequest(BaseModel):
    message: str

# =========================
# CHAT ENDPOINT
# =========================
@app.post("/chat")
async def chat(req: ChatRequest):
    try:
        model = genai.GenerativeModel("gemini-2.5-flash")

        prompt = f"""
You are a helpful AI assistant for a restaurant called "Galle Restaurant".

Your job:
- Answer customer questions
- Recommend food
- Be friendly and short
- Focus on menu and ordering

Menu:
- Chicken Kottu
- Seafood Rice
- Cheese Pizza
- Spicy Pasta
- Fried Rice
chicken kottu is the most popular dish.
chicken kottu is LKR 5000
Seafood Rice is LKR 4000
Cheese Pizza is LKR 2000
Fried Rice is LKR 1000
you can go to receipies with this link 👉 https://resturant-ecru-zeta.vercel.app/recipes
User message:
{req.message}
"""

        response = model.generate_content(prompt)

        return {
            "reply": response.text
        }

    except Exception as e:
        return {
            "reply": "Sorry, something went wrong with the AI server."
        }
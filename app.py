from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import uvicorn
import os
from dotenv import load_dotenv


load_dotenv()


client = OpenAI(
    api_key="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", 
    base_url="https://api.groq.com/openai/v1"
)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": "You are a helpful finance expert."},
                {"role": "user", "content": request.message}
            ]
        )
        return {"response": completion.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
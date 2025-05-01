from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv
import json

load_dotenv()

app = FastAPI(title="LeetSquad API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Player(BaseModel):
    username: str
    total_solved: int
    easy_solved: int
    medium_solved: int
    hard_solved: int
    streak: int
    rank: Optional[int] = None

class LeaderboardResponse(BaseModel):
    players: List[Player]
    last_updated: str

# Routes
@app.get("/")
async def root():
    return {"message": "Welcome to LeetSquad API"}

@app.get("/leaderboard", response_model=LeaderboardResponse)
async def get_leaderboard():
    try:
        with open("leaderboard.json", "r") as f:
            data = json.load(f)
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading leaderboard: {e}")

@app.get("/player/{username}")
async def get_player_stats(username: str):
    # TODO: Implement player stats fetching from LeetCode
    return {
        "username": username,
        "stats": {
            "total_solved": 100,
            "easy_solved": 50,
            "medium_solved": 40,
            "hard_solved": 10,
            "streak": 7,
            "rank": 1
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
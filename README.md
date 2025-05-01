# LeetSquad

A gamified LeetCode leaderboard that turns your coding practice into a fun competition with friends.

## Features

- 🏆 Live leaderboard with real-time updates
- 🔥 Streak tracking and celebrations
- 🎮 Friday Boss Battle challenges
- 📊 Personal stats and progress tracking
- 📱 Mobile-first responsive design
- 🚀 No login required - just visit and see the action

## Tech Stack

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: FastAPI, Python
- Database: SQLite (for simplicity)
- Deployment: Vercel (frontend), Railway (backend)

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd backend
   pip install -r requirements.txt
   ```
3. Set up environment variables (see `.env.example`)
4. Run development servers:
   ```bash
   # Frontend
   cd frontend
   npm run dev

   # Backend
   cd backend
   uvicorn main:app --reload
   ```

## Project Structure

```
.
├── frontend/           # Next.js frontend application
├── backend/           # FastAPI backend service
├── scripts/          # Utility scripts and cron jobs
└── README.md
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

<img width="1467" alt="image" src="https://github.com/user-attachments/assets/96b91188-de52-4b95-aae5-98ff4937dc68" />

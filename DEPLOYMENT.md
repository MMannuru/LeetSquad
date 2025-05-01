# Deployment Guide

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- A server with cron support (for data fetching)
- Domain name (optional)

## Backend Deployment

1. Set up the Python environment:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your LeetCode usernames
   ```

3. Set up the cron job:
   ```bash
   # Edit crontab
   crontab -e

   # Add this line to run every 3 hours
   0 */3 * * * /path/to/leetsquad/backend/scripts/run_cron.sh
   ```

4. Start the FastAPI server:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

## Frontend Deployment

1. Build the Next.js application:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your API URL
   ```

3. Start the production server:
   ```bash
   npm start
   ```

## Recommended Deployment Platforms

### Backend
- Railway.app
- DigitalOcean App Platform
- Heroku

### Frontend
- Vercel
- Netlify
- GitHub Pages

## Monitoring

- Set up error tracking (e.g., Sentry)
- Monitor API rate limits
- Set up alerts for cron job failures

## Maintenance

- Regularly update dependencies
- Monitor LeetCode API changes
- Backup the leaderboard data
- Review and update the roster periodically
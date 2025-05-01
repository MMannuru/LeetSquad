import { LeaderboardResponse, PlayerStats } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchLeaderboard(): Promise<LeaderboardResponse> {
    const response = await fetch(`${API_BASE_URL}/leaderboard`);
    if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
    }
    return response.json();
}

export async function fetchPlayerStats(username: string): Promise<PlayerStats> {
    const response = await fetch(`${API_BASE_URL}/player/${username}`);
    if (!response.ok) {
        throw new Error('Failed to fetch player stats');
    }
    return response.json();
}
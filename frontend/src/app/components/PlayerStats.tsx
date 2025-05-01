'use client';
import { useEffect, useState } from 'react';
import { PlayerStats as PlayerStatsType } from '../types';
import { fetchPlayerStats } from '../api/leetSquad';

interface PlayerStatsProps {
  username: string;
}

export default function PlayerStats({ username }: PlayerStatsProps) {
  const [stats, setStats] = useState<PlayerStatsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchPlayerStats(username);
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load player stats');
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, [username]);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
  if (!stats) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{stats.username}'s Stats</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Problem Solving Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <div className="text-sm text-gray-500">Total Solved</div>
              <div className="text-2xl font-bold">{stats.stats.total_solved}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="text-sm text-gray-500">Current Streak</div>
              <div className="text-2xl font-bold">
                {stats.stats.streak >= 7 && '🔥'}
                {stats.stats.streak} days
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <div className="text-sm text-green-600">Easy</div>
              <div className="text-2xl font-bold text-green-600">{stats.stats.easy_solved}</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
              <div className="text-sm text-yellow-600">Medium</div>
              <div className="text-2xl font-bold text-yellow-600">{stats.stats.medium_solved}</div>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <div className="text-sm text-red-600">Hard</div>
              <div className="text-2xl font-bold text-red-600">{stats.stats.hard_solved}</div>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <div className="text-sm text-blue-600">Global Rank</div>
              <div className="text-2xl font-bold text-blue-600">#{stats.stats.rank}</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Leaderboard
          </a>
        </div>
      </div>
    </div>
  );
}
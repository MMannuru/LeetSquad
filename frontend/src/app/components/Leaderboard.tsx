'use client';
import { useEffect, useState } from 'react';
import { Player, LeaderboardResponse } from '../types';
import { fetchLeaderboard } from '../api/leetSquad';

const medalGlow = [
  'from-yellow-400 via-yellow-200 to-yellow-500', // Gold
  'from-gray-400 via-gray-200 to-gray-500',      // Silver
  'from-orange-600 via-orange-300 to-orange-700' // Bronze
];

const DSA_TAGS = [
  { name: 'Graph', icon: <svg width="20" height="20" viewBox="0 0 48 48"><circle cx="12" cy="36" r="4" fill="#60a5fa"/><circle cx="36" cy="12" r="4" fill="#fbbf24"/><circle cx="24" cy="24" r="4" fill="#34d399"/><line x1="12" y1="36" x2="24" y2="24" stroke="#888" strokeWidth="2"/><line x1="24" y1="24" x2="36" y2="12" stroke="#888" strokeWidth="2"/></svg> },
  { name: 'DP', icon: <svg width="20" height="20" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="8" fill="#f472b6"/><path d="M24 16v16M16 24h16" stroke="#fff" strokeWidth="3"/></svg> },
  { name: 'Stack', icon: <svg width="20" height="20" viewBox="0 0 48 48"><rect x="10" y="32" width="28" height="6" rx="2" fill="#f87171"/><rect x="14" y="24" width="20" height="6" rx="2" fill="#fbbf24"/><rect x="18" y="16" width="12" height="6" rx="2" fill="#60a5fa"/></svg> },
  { name: 'Binary Search', icon: <svg width="20" height="20" viewBox="0 0 48 48"><circle cx="20" cy="20" r="10" stroke="#a78bfa" strokeWidth="4" fill="none"/><rect x="32" y="32" width="10" height="4" rx="2" fill="#a78bfa" transform="rotate(45 32 32)"/></svg> },
  { name: 'Heap', icon: <svg width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="12" r="4" fill="#fbbf24"/><circle cx="16" cy="28" r="4" fill="#60a5fa"/><circle cx="32" cy="28" r="4" fill="#34d399"/><line x1="24" y1="16" x2="16" y2="28" stroke="#888" strokeWidth="2"/><line x1="24" y1="16" x2="32" y2="28" stroke="#888" strokeWidth="2"/></svg> },
];

const DSA_BADGES = [
  {
    label: 'Graph Master',
    icon: <svg width="18" height="18" viewBox="0 0 48 48"><circle cx="12" cy="36" r="4" fill="#60a5fa"/><circle cx="36" cy="12" r="4" fill="#fbbf24"/><circle cx="24" cy="24" r="4" fill="#34d399"/><line x1="12" y1="36" x2="24" y2="24" stroke="#888" strokeWidth="2"/><line x1="24" y1="24" x2="36" y2="12" stroke="#888" strokeWidth="2"/></svg>,
    gradient: 'from-blue-500 via-yellow-400 to-pink-400',
  },
  {
    label: 'DP Pro',
    icon: <svg width="18" height="18" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="8" fill="#f472b6"/><path d="M24 16v16M16 24h16" stroke="#fff" strokeWidth="3"/></svg>,
    gradient: 'from-pink-400 via-yellow-300 to-blue-400',
  },
  {
    label: 'Stack Guru',
    icon: <svg width="18" height="18" viewBox="0 0 48 48"><rect x="10" y="32" width="28" height="6" rx="2" fill="#f87171"/><rect x="14" y="24" width="20" height="6" rx="2" fill="#fbbf24"/><rect x="18" y="16" width="12" height="6" rx="2" fill="#60a5fa"/></svg>,
    gradient: 'from-yellow-400 via-pink-400 to-blue-400',
  },
];

function ProgressBar({ easy, medium, hard }: { easy: number; medium: number; hard: number }) {
  const total = easy + medium + hard || 1;
  const easyPct = (easy / total) * 100;
  const medPct = (medium / total) * 100;
  const hardPct = (hard / total) * 100;
  return (
    <div className="w-full h-3 rounded-full bg-gray-800/60 flex overflow-hidden mt-4 shadow-inner">
      <div className="bg-green-400" style={{ width: `${easyPct}%` }} />
      <div className="bg-yellow-400" style={{ width: `${medPct}%` }} />
      <div className="bg-red-400" style={{ width: `${hardPct}%` }} />
    </div>
  );
}

function DSATagBar({ highlight = [] }: { highlight?: string[] }) {
  return (
    <div className="flex gap-2 mt-4">
      {DSA_TAGS.map(tag => (
        <span
          key={tag.name}
          className={`group relative flex items-center justify-center rounded-full p-1 transition-all duration-200 ${highlight.includes(tag.name) ? 'bg-yellow-500/30 ring-2 ring-yellow-400' : 'bg-gray-700/40'}`}
        >
          {tag.icon}
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition-all duration-200 z-20 whitespace-nowrap shadow-lg">
            {tag.name}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await fetchLeaderboard();
        setLeaderboard(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
    // Refresh every 60 seconds
    const interval = setInterval(loadLeaderboard, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center p-4 text-white">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-400">{error}</div>;
  if (!leaderboard) return null;

  return (
    <div className="flex flex-col items-center w-full px-2 py-8">
      <h1 className="text-4xl font-extrabold text-white mb-10 drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)] tracking-wide text-center animate-pulse">
        Leaderboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {leaderboard.players.map((player: Player, idx: number) => (
          <div
            key={player.username}
            className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col items-center transition-transform hover:scale-105 hover:border-streak hover:shadow-[0_0_32px_8px_rgba(255,215,0,0.15)] hover:-rotate-2 ${
              idx < 3 ? `border-4 animate-glow bg-gradient-to-br ${medalGlow[idx]}` : ''
            }`}
            style={{ minHeight: 240 }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {idx === 0 && <span className="text-3xl animate-bounce">🥇</span>}
              {idx === 1 && <span className="text-3xl animate-bounce">🥈</span>}
              {idx === 2 && <span className="text-3xl animate-bounce">🥉</span>}
            </div>
            <a
              href={`/player/${player.username}`}
              className="text-2xl font-fun font-extrabold text-gold drop-shadow-[0_2px_8px_rgba(255,215,0,0.25)] hover:underline mt-6"
            >
              {player.username}
            </a>
            {/* DSA Mastery Badge for top 3 users */}
            {idx < 3 && (
              <div className={`flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-gradient-to-r ${DSA_BADGES[idx].gradient} text-black font-bold text-xs shadow-lg animate-pulse`}>
                {DSA_BADGES[idx].icon}
                {DSA_BADGES[idx].label}
              </div>
            )}
            <div className="flex gap-4 mt-4 text-lg font-bold">
              <span className="text-white">{player.total_solved} <span className="text-xs font-normal text-gray-400">total</span></span>
              <span className="text-green-400">{player.easy_solved} <span className="text-xs font-normal text-gray-400">easy</span></span>
              <span className="text-yellow-400">{player.medium_solved} <span className="text-xs font-normal text-gray-400">med</span></span>
              <span className="text-red-400">{player.hard_solved} <span className="text-xs font-normal text-gray-400">hard</span></span>
            </div>
            <ProgressBar easy={player.easy_solved} medium={player.medium_solved} hard={player.hard_solved} />
            <DSATagBar highlight={idx === 0 ? ['Graph', 'DP'] : idx === 1 ? ['Stack'] : ['Heap']} />
            <div className="mt-4 flex items-center gap-2">
              {player.streak >= 7 && (
                <span className="animate-fire text-streak text-2xl">🔥</span>
              )}
              <span className="text-white font-mono text-lg">{player.streak}d streak</span>
            </div>
            <div className="absolute top-4 right-4 text-xs text-gray-400 font-mono">#{player.rank}</div>
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-400 mt-8 text-center">
        Last updated: {new Date(leaderboard.last_updated).toLocaleString()}
      </div>
    </div>
  );
}

// Add fun glow and fire animations
// Add this to your globals.css:
// .animate-glow { box-shadow: 0 0 16px 4px #FFD70055, 0 0 32px 8px #FFD70033; }
// .animate-fire { animation: fire 1s infinite alternate; }
// @keyframes fire { 0% { filter: brightness(1); } 100% { filter: brightness(1.5) drop-shadow(0 0 8px #FF5722); } }
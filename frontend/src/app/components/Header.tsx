'use client';

const LeetCodeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg animate-spin-slow">
    <path d="M34.5 13.5L24 3L13.5 13.5" stroke="#FFA116" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 34.5L24 45L34.5 34.5" stroke="#FFA116" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 24H45" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="9" stroke="#111" strokeWidth="3"/>
    <circle cx="24" cy="24" r="5" stroke="#FFA116" strokeWidth="3"/>
  </svg>
);

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-8 mb-8">
      <div className="flex items-center gap-4">
        <LeetCodeIcon />
        <span className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(255,200,0,0.25)] tracking-tight">
          LeetSquad
        </span>
      </div>
      <span className="mt-2 text-lg text-gray-300 font-mono tracking-wide">Compete. Climb. Celebrate.</span>
    </header>
  );
}

// Add this to your globals.css for slow spin:
// .animate-spin-slow { animation: spin 4s linear infinite; }
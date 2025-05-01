'use client';

const LeetCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle">
    <path d="M34.5 13.5L24 3L13.5 13.5" stroke="#FFA116" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 34.5L24 45L34.5 34.5" stroke="#FFA116" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 24H45" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="9" stroke="#111" strokeWidth="3"/>
    <circle cx="24" cy="24" r="5" stroke="#FFA116" strokeWidth="3"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-6 mt-12 border-t border-white/10 bg-black/80">
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm">Made by</span>
        <span className="font-bold text-yellow-400 text-lg tracking-wide">LeetSquad</span>
        <LeetCodeIcon />
      </div>
      <span className="text-xs text-gray-600 mt-1">Not affiliated with LeetCode</span>
    </footer>
  );
}
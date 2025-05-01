'use client';

// SVGs for DSA icons
const icons = [
  // Graph
  <svg key="graph" width="48" height="48" className="opacity-20 absolute animate-float1" style={{top: '10%', left: '8%'}} viewBox="0 0 48 48"><circle cx="12" cy="36" r="4" fill="#60a5fa"/><circle cx="36" cy="12" r="4" fill="#fbbf24"/><circle cx="24" cy="24" r="4" fill="#34d399"/><line x1="12" y1="36" x2="24" y2="24" stroke="#888" strokeWidth="2"/><line x1="24" y1="24" x2="36" y2="12" stroke="#888" strokeWidth="2"/></svg>,
  // DP (Puzzle)
  <svg key="dp" width="48" height="48" className="opacity-20 absolute animate-float2" style={{top: '60%', left: '15%'}} viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="8" fill="#f472b6"/><path d="M24 16v16M16 24h16" stroke="#fff" strokeWidth="3"/></svg>,
  // Stack
  <svg key="stack" width="48" height="48" className="opacity-20 absolute animate-float3" style={{top: '30%', left: '80%'}} viewBox="0 0 48 48"><rect x="10" y="32" width="28" height="6" rx="2" fill="#f87171"/><rect x="14" y="24" width="20" height="6" rx="2" fill="#fbbf24"/><rect x="18" y="16" width="12" height="6" rx="2" fill="#60a5fa"/></svg>,
  // Binary Search (Magnifier)
  <svg key="binary" width="48" height="48" className="opacity-20 absolute animate-float4" style={{top: '75%', left: '70%'}} viewBox="0 0 48 48"><circle cx="20" cy="20" r="10" stroke="#a78bfa" strokeWidth="4" fill="none"/><rect x="32" y="32" width="10" height="4" rx="2" fill="#a78bfa" transform="rotate(45 32 32)"/></svg>,
  // Heap (Pyramid/Tree)
  <svg key="heap" width="48" height="48" className="opacity-20 absolute animate-float5" style={{top: '15%', left: '60%'}} viewBox="0 0 48 48"><circle cx="24" cy="12" r="4" fill="#fbbf24"/><circle cx="16" cy="28" r="4" fill="#60a5fa"/><circle cx="32" cy="28" r="4" fill="#34d399"/><line x1="24" y1="16" x2="16" y2="28" stroke="#888" strokeWidth="2"/><line x1="24" y1="16" x2="32" y2="28" stroke="#888" strokeWidth="2"/></svg>
];

export default function DSAIconsBackground() {
  return <div className="pointer-events-none fixed inset-0 z-0 w-full h-full overflow-hidden">{icons}</div>;
}

// Add these to globals.css:
// .animate-float1 { animation: float1 12s ease-in-out infinite alternate; }
// .animate-float2 { animation: float2 14s ease-in-out infinite alternate; }
// .animate-float3 { animation: float3 10s ease-in-out infinite alternate; }
// .animate-float4 { animation: float4 16s ease-in-out infinite alternate; }
// .animate-float5 { animation: float5 18s ease-in-out infinite alternate; }
// @keyframes float1 { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
// @keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(30px); } }
// @keyframes float3 { 0% { transform: translateY(0); } 100% { transform: translateY(-15px); } }
// @keyframes float4 { 0% { transform: translateY(0); } 100% { transform: translateY(25px); } }
// @keyframes float5 { 0% { transform: translateY(0); } 100% { transform: translateY(-18px); } }
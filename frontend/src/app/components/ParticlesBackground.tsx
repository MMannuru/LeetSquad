'use client';
import React, { useEffect, useState } from 'react';

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => {
      const size = Math.random() * 2 + 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 8;
      return (
        <circle
          key={i}
          cx={left + '%'}
          cy={top + '%'}
          r={size}
          fill="#fff"
          opacity={0.08 + Math.random() * 0.08}
          style={{
            animation: `particle-float 12s ease-in-out ${delay}s infinite alternate`,
          }}
        />
      );
    });
    setParticles(generated);
  }, []);

  return (
    <svg className="pointer-events-none fixed inset-0 w-full h-full z-0" style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh' }}>
      {particles}
    </svg>
  );
}

// Add this to globals.css:
// @keyframes particle-float { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
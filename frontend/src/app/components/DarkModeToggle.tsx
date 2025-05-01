'use client';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // On mount, check local storage or system preference
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.theme = newDark ? 'dark' : 'light';
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDark}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-black/80 shadow-lg hover:scale-110 transition-transform border border-gray-200 dark:border-gray-700"
    >
      {dark ? (
        <span role="img" aria-label="moon" className="text-xl">🌙</span>
      ) : (
        <span role="img" aria-label="sun" className="text-xl">☀️</span>
      )}
    </button>
  );
}
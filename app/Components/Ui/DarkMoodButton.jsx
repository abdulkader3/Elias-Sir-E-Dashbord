import React, { useState, useEffect } from 'react';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

const DarkMoodButton = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage and system preference on mount
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode ? JSON.parse(savedMode) : prefersDark;
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newState = !isDark;
    setIsDark(newState);
    localStorage.setItem('darkMode', JSON.stringify(newState));
    
    if (newState) {
      document.documentElement.classList.add('dark');
      console.log('Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Dark mode disabled');
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-4 rounded-full ">
      {/* Moon Icon */}
      <button
        className="rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        aria-label="Dark mode"
      >
        <IoMoon/>
      </button>

      {/* Toggle Switch */}
      <button
        onClick={toggleDarkMode}
        className={`w-10 h-6 rounded-full transition-all flex items-center justify-center ${
          isDark ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gray-400'
        }`}
        aria-label="Toggle dark mode"
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-md transition-all ${
            isDark ? 'translate-x-2' : '-translate-x-2'
          }`}
        />
      </button>

      {/* Sun Icon */}
      <button
        className=" rounded-full text-gray-400 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors"
        aria-label="Light mode"
      >
        <MdOutlineWbSunny/>
      </button>
    </div>
  );
}

export default DarkMoodButton;

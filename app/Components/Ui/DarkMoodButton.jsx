'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

const DarkMoodButton = () => {

  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  console.log(isDark)

  return (
    <div className="flex items-center justify-center gap-4 rounded-full">


      {/* Sun Icon */}
      <button
        className="rounded-full text-gray-400 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors"
        aria-label="Light mode"
      >
        <MdOutlineWbSunny size={20}/>
      </button>

      {/* Toggle Switch */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark" )}
        className={`w-10 h-6 rounded-full transition-all flex items-center justify-center ${
          isDark ? 'bg-linear-to-r from-purple-500 to-purple-600' : 'bg-gray-400'
        }`}
        aria-label="Toggle dark mode"
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-md transition-all ${
            isDark ? 'translate-x-2' : '-translate-x-2'
          }`}
        />
      </button>

      {/* Moon Icon */}
      <button
        className="rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        aria-label="Dark mode"
      >
        <IoMoon size={20}/>
      </button>


    </div>
  );
}

export default DarkMoodButton;

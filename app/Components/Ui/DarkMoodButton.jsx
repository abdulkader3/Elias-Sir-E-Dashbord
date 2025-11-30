import React, { useState, useEffect } from 'react';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

const DarkMoodButton = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if dark mode class already exists on the html element
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    setMounted(true);

    // Listen for changes to the dark class
    const observer = new MutationObserver(() => {
      const hasDarkClass = document.documentElement.classList.contains('dark');
      setIsDark(hasDarkClass);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-4 rounded-full">
      {/* Moon Icon */}
      <button
        className="rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        aria-label="Dark mode"
      >
        <IoMoon size={20}/>
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
        className="rounded-full text-gray-400 hover:text-orange-500 dark:hover:text-yellow-400 transition-colors"
        aria-label="Light mode"
      >
        <MdOutlineWbSunny size={20}/>
      </button>
    </div>
  );
}

export default DarkMoodButton;

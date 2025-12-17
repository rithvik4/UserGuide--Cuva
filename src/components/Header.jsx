import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [query, setQuery] = useState("");
  const [isDark, setIsDark] = useState(() => typeof document !== "undefined" && document.documentElement.classList.contains("dark"));

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 relative">
      {/* Logo pinned to the left corner */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40">
        <a href="/" className="flex items-center text-gray-900 dark:text-gray-100">
          <img src={logo} alt="Cuva AI" className="w-15 h-10 object-contain rounded" />
        </a>
      </div>

      <div className="ml-[20%] w-[80%] h-16 flex items-center px-6">

        {/* Center: Search */}
        <div className="flex-1 flex justify-center px-4">
          <div className="w-full max-w-2xl">
            <label className="sr-only">Search</label>
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the docs..."
                className="w-full border rounded-lg py-2 pl-10 pr-4 text-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1.5 text-sm rounded-md bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100">
            Support
          </button>

          <a
            href="https://appstudio.cuva.ai/"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Hub
          </a>

          <button
            onClick={() => setIsDark((v) => !v)}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 19v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.22 4.22l1.42 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.36 18.36l1.42 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.22 19.78l1.42-1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

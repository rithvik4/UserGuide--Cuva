import React from 'react';

export const Icons = {
  Agents: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="w-5 h-5" {...props}>
      <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Workflows: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M3 7h6l2 3 4-6 6 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Triggers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Connectors: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  KB: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4.5A2.5 2.5 0 016.5 2H20v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Templates: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  FAQ: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 10.5a3 3 0 016 0c0 1.6-1.7 2-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Key: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M21 11l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Chat: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Cloud: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M20 17.5A4.5 4.5 0 0016 10h-1.26A6 6 0 106 18h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M12 2l7 4v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Database: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  User: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  Book: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6.5A2.5 2.5 0 016.5 4H20v15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default Icons;

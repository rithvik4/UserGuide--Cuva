import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Sidebar({ sections, activeId, onSelect }) {
  function SidebarItem({ item }) {
    const Icon = item.icon;
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const isActive = item.id === activeId || (hasChildren && item.children.some((c) => c.id === activeId));
    const [open, setOpen] = useState(isActive);

    useEffect(() => {
      if (isActive) setOpen(true);
    }, [isActive]);

    return (
      <li>
        <div className="flex items-center px-4 py-2">
          <button
            onClick={() => {
              if (hasChildren) setOpen((v) => !v);
              else onSelect(item.id);
            }}
            className={cn(
              "flex items-center w-full text-left rounded px-3 py-2 transition-colors",
              isActive
                ? "bg-blue-50 text-blue-700 font-semibold dark:bg-blue-900 dark:text-blue-300"
                : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            )}
            aria-expanded={hasChildren ? open : undefined}
          >
            {Icon ? (
              <span className="mr-3 text-gray-500 dark:text-gray-400" aria-hidden>
                <Icon />
              </span>
            ) : (
              <span className="mr-3 w-5" />
            )}
            <span className="flex-1">{item.label}</span>
            {hasChildren ? (
              <svg className={cn("w-4 h-4 ml-2 transform transition-transform", open ? "rotate-90" : "rotate-0")} viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </button>
        </div>

        {hasChildren ? (
          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="pl-12"
              >
                {item.children.map((child) => (
                  <li key={child.id} className="mb-1">
                    <button
                      className={cn(
                        "w-full text-left px-3 py-2 rounded transition-colors text-sm",
                        activeId === child.id
                          ? "bg-blue-100 text-blue-700 font-medium dark:bg-blue-900 dark:text-blue-300"
                          : "hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
                      )}
                      onClick={() => onSelect(child.id)}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        ) : null}
      </li>
    );
  }

  return (
    <aside className="w-1/5 min-w-[220px] max-w-xs h-screen bg-white border-r border-gray-200 fixed left-0 top-16 flex flex-col dark:bg-gray-900 dark:border-gray-800">
      <div className="p-6 pb-2 text-xl font-bold text-gray-900 dark:text-gray-100">Documentation</div>
      <nav className="flex-1 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              {section.title}
            </div>
            <ul>
              {section.items.map((item) => (
                <SidebarItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

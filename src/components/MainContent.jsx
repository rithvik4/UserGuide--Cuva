import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import docsSections from '../data/navigation';
import docsContent from '../content';

export default function MainContent({ activeId }) {
  const content = docsContent[activeId] || {
    heading: 'Content Coming Soon',
    body: (
      <>
        <p className="text-gray-700 dark:text-gray-200">This section doesn't have content yet. Check back soon or contact the docs owner.</p>
      </>
    ),
  };

  function getBreadcrumbParts(id) {
    for (const section of docsSections) {
      for (const item of section.items) {
        if (item.id === id) return [section.title, item.label];
        if (Array.isArray(item.children)) {
          for (const child of item.children) {
            if (child.id === id) return [section.title, item.label, child.label];
          }
        }
      }
    }
    return null;
  }

  const bc = getBreadcrumbParts(activeId);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25 }}
        className="max-w-3xl mx-auto py-12 px-8"
      >
        {bc ? (
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {bc.map((p, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">›</span>}
                <span className="inline-block">{p}</span>
              </span>
            ))}
          </div>
        ) : null}

        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{content.heading}</h1>
        <div className="prose prose-blue max-w-none text-gray-800 dark:text-gray-200">{content.body}</div>
      </motion.div>
    </AnimatePresence>
  );
}

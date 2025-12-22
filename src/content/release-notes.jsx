import React from 'react';

export default {
  heading: 'Release Notes',
  body: (
    <>
      <p className="mt-2 text-gray-500 dark:text-gray-400">Track product updates, improvements, and notable changes.</p>

      <section className="mt-8">
        <h4 className="font-bold text-gray-900 dark:text-white">v1.4.0 — 2025-11-10</h4>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>Improved workflow execution tracing and retry behavior.</li>
          <li>New connector templates for common enterprise systems.</li>
          <li>UX improvements in the Agent Studio.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h4 className="font-bold text-gray-900 dark:text-white">v1.3.2 — 2025-07-02</h4>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>Security patch for connector token refresh logic.</li>
          <li>Minor bug fixes and performance optimizations.</li>
        </ul>
      </section>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400 italic">For full changelogs and migration notes, see your account release emails or contact support for archived release artifacts.</p>
    </>
  ),
};

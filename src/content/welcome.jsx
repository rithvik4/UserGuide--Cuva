import React from 'react';
import { Icons } from '../lib/icons';

const welcomeCards = [
  {
    title: 'AI-Powered Processing',
    description:
      'Extract data, summarize content, categorize information, and generate insights using advanced AI models',
    icon: Icons.Agents,
  },
  {
    title: 'Integration Hub',
    description:
      'Connect Gmail, Slack, Salesforce, Airtable, Google Sheets, and 50+ other services seamlessly',
    icon: Icons.Connectors,
  },
  {
    title: 'Smart Automation',
    description:
      'Trigger workflows from schedules, webhooks, emails, or Slack messages—or use agents on-demand',
    icon: Icons.Triggers,
  },
  {
    title: 'Team Collaboration',
    description:
      'Share workflows, credentials, and agents across your workspace for true team automation',
    icon: Icons.User,
  },
  {
    title: 'Visual Interfaces',
    description:
      'Transform complex workflows into simple forms that anyone on your team can use',
    icon: Icons.Book,
  },
  {
    title: 'Scalable Infrastructure',
    description:
      'Run thousands of automations simultaneously with enterprise-grade reliability',
    icon: Icons.Database,
  },
];

export default {
  heading: 'Welcome to Cuva AI 👋',
  body: (
    <>
      <p>
        Welcome to the Cuva AI documentation. This guide will take you from setting up your first workflow to building advanced, intelligent automations.
      </p>
      <div className="my-4" />
      <p>
        "Follow this step-by-step walkthrough to configure your system. We’ve broken the process down into manageable stages to ensure a smooth and successful setup. It's actively maintained and <span className="font-bold"> we invite your </span>  <span className="font-bold text-blue-600 dark:text-blue-400 underline underline-offset-4">contributions</span> to make it even better."
      </p>
      <div className="mt-6 border rounded p-4 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
        <strong>Introduction</strong>
        <div className="mt-3 w-full rounded overflow-hidden border border-gray-200 dark:border-gray-700">
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              title="Cuva overview"
              src="https://www.youtube.com/embed/BnquzIGVuKc"
              loading="lazy"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Build AI Automations Without Code</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-200">Cuva AI is your platform for creating powerful automations using <span className="font-semibold">visual workflows</span> and <span className="font-semibold">intelligent agents</span>—no programming required.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600"><Icons.Workflows className="w-6 h-6" /></div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Workflows</h4>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Build reliable, repeatable automations that run the same way every time. Perfect for high-volume, mission-critical tasks.</p>
                <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 list-inside list-none space-y-1">
                  <li>→ Drag-and-drop visual builder</li>
                  <li>→ 100+ pre-built nodes</li>
                  <li>→ Fast, predictable execution</li>
                </ul>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('select-doc', { detail: 'visual-workflow-builder' }))}
                  className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
                >
                  Get Started with Workflows →
                </button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600"><Icons.Agents className="w-6 h-6" /></div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Agents</h4>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Create AI assistants that intelligently use your workflows and tools to solve open-ended tasks. Perfect for complex, decision-based work.</p>
                <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 list-inside list-none space-y-1">
                  <li>→ Natural language interface</li>
                  <li>→ Works in Gumloop or Slack</li>
                  <li>→ Adaptive problem-solving</li>
                </ul>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('select-doc', { detail: 'processing-agents' }))}
                  className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
                >
                  Get Started with Agents →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">What You Can Build</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {welcomeCards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="border rounded-lg p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-blue-50 text-blue-600"><Icon className="w-5 h-5" /></div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{c.title}</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ),
};
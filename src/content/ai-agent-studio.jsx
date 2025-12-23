import React from 'react';
import { Icons } from '../lib/icons';

const AIAgentStudio = {
    heading: "AI Agent Studio",
    body: (
        <>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                The <strong>AI Agent Studio</strong> is the integrated development environment (IDE) for your autonomous workforce. It seamlessly blends a visual, no-code interface with advanced configuration capabilities, enabling both business users and developers to build, test, and deploy sophisticated multi-agent workflows.
            </p>

            {/* Core Components Section */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-blue-600 pl-4">Core Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-colors group">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Visual Flow Canvas</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            A drag-and-drop infinite canvas where you map out agent logic. Connect nodes for triggers, actions, decisions, and parallel processing branches visually.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-400 transition-colors group">
                        <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Agent Library</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            A repository of pre-built, specialized agents (e.g., "PDF Parser," "Sentiment Analyzer") that you can drag onto your canvas and configure instantly.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-green-400 transition-colors group">
                        <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Live Debugger</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Test your flows in real-time. The debugger highlights the active path, shows variable states at each step, and logs errors for rapid troubleshooting.
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Features List */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-indigo-600 pl-4">Key Features</h3>
                <div className="bg-slate-50 dark:bg-slate-900/30 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">1</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Prompt-to-Agent</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    Describe your process in plain English (e.g., "When a new lead arrives in HubSpot, enrich it with LinkedIn data and add it to Slack"). The Studio generates the complete workflow structure for you to refine.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">2</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Versioning & Rollbacks</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    Every save creates a new version. Freely experiment with new logic, knowing you can instantly roll back to a stable "Production" snapshot if needed.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">3</div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Sandbox Environment</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    Safely test agents with mock data before they touch your live enterprise systems. Simulate connectivity errors and edge cases to ensure robustness.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Technical Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">For Developers</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>Inject <strong>Custom JavaScript/Python</strong> nodes</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>Direct access to <strong>API Headers & Payloads</strong></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span><strong>Webhooks</strong> for external triggers</span>
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">For Business Users</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span><strong>No-Code</strong> drag-and-drop builder</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span>Pre-configured <strong>Integration Templates</strong></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span><strong>Human-in-the-Loop</strong> approval nodes</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    ),
};

export default AIAgentStudio;

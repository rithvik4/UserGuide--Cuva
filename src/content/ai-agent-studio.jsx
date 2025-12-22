import React from 'react';
import { Icons } from '../lib/icons';

const AIAgentStudio = {
    heading: "AI Agent Studio",
    body: (
        <>
            <p>
                The <strong>AI Agent Studio</strong> is the command center for your autonomous workforce. It is an enterprise-grade environment designed to help you build, deploy, and manage AI agents that work alongside your team to handle complex, repetitive, and data-heavy tasks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 rounded-2xl border border-blue-100/50 dark:border-blue-800/30 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Build with a Prompt</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
                        Don't start from scratch. Simply describe your business scenario in natural language, and the Studio will automatically architect the initial agent logic and workflow structure for you.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-100/50 dark:border-purple-800/30 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20">
                        <Icons.Cloud className="w-6 h-6" />
                    </div>
                    <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Universal Deployment</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400">
                        Once built, deploy your agents anywhere with a single click. Cuva supports Cloud, On-Premises, and Hybrid environments to meet your security and infrastructure requirements.
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Centralized Management</h3>
            <p>
                Beyond creation, the Studio provides a unified dashboard to monitor performance, audit agent decisions, and iterate on logic in real-time. It ensures your AI workforce remains aligned with evolving business goals.
            </p>

            <div className="mt-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">The "Story-Based" Building Process</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                                <span className="text-[14px] text-gray-600 dark:text-gray-400">Define the <strong>Goal</strong> (e.g., "Automate client onboarding").</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                                <span className="text-[14px] text-gray-600 dark:text-gray-400">The Studio proposes <strong>Specialized Agents</strong> for each task.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px) font-bold">3</span>
                                <span className="text-[14px] text-gray-600 dark:text-gray-400">Refine the <strong>Workflow Canvas</strong> to match your specific logic.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-64 aspect-video bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 shadow-inner">
                        <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Visual Studio Preview</span>
                    </div>
                </div>
            </div>
        </>
    ),
};

export default AIAgentStudio;

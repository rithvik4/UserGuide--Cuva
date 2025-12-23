import React from 'react';
import { Icons } from '../lib/icons';

const ProcessingAgents = {
    heading: "Processing Agents:",
    body: (
        <>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is a Processing Agent?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    A <strong>Processing Agent</strong> is a "Task-Driven" intelligence. It is built using the <strong>Structured Request</strong> trigger model, which replaces the open-ended chat window with a rigid input form.
                </p>

                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <div>
                            <strong className="block text-gray-900 dark:text-white mb-1">Fixed Scope</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                The agent only operates on the specific data provided in the input fields (Text, Documents, or Multiple Choice).
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <div>
                            <strong className="block text-gray-900 dark:text-white mb-1">Predictable Output</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Instead of just "talking," it is designed to produce a specific outcome, such as an updated database record, a generated report, or a drafted email.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                        <div>
                            <strong className="block text-gray-900 dark:text-white mb-1">Logical Rigidity</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                It follows a "recipe" on the Visual Workflow Builder canvas, ensuring that every request—regardless of who submits it—is handled exactly the same way.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-4 tracking-tight">Multi-Agent Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                The true power of Cuva AI lies in <strong>Collaboration</strong>. Instead of one giant, complex agent, you can link multiple specialized agents together.
            </p>
            <div className="mt-8 p-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[16px] font-bold text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm">Research Agent</div>
                    <div className="text-slate-300 dark:text-slate-700">──▶</div>
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[16px] font-bold text-purple-600 dark:text-purple-400 rounded-2xl shadow-sm">Analysis Agent</div>
                    <div className="text-slate-300 dark:text-slate-700">──▶</div>
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[16px] font-bold text-green-600 dark:text-green-400 rounded-2xl shadow-sm">Reporting Agent</div>
                </div>
                <p className="text-center mt-8 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Data refinement pipeline</p>
            </div>
        </>
    ),
};

export default ProcessingAgents;

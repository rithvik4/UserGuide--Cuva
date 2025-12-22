import React from 'react';
import { Icons } from '../lib/icons';

const FlowControl = {
    heading: "Flow Control: Managing Process Logic",
    body: (
        <>
            <p>
                <strong>Flow Control</strong> nodes are the traffic controllers of your workflow. They manage the logic, branching, and data movement, ensuring that information gets to the right agent at the right time.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-6 tracking-tight">Logical Branching</h3>
            <p>
                Cuva AI allows for dynamic, non-linear workflows. Instead of always moving from A to B, Flow Control enables your agents to make decisions mid-flight.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-indigo-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                        </div>
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white">Conditional If/Else</h4>
                    </div>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Route data based on risk scores or specific conditions to automate or escalate accordingly.</p>
                </div>

                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-2.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        </div>
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white">Iterators (Loops)</h4>
                    </div>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Handle collections of data, such as processing multiple invoices individually in a single run.</p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/10 p-8 rounded-3xl border border-blue-100/50 dark:border-blue-900/20 mb-8 shadow-sm">
                <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Adaptive Flow Management</h4>
                <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                    The platform supports self-adapting workflows. While static code breaks if a field name changes, Flow Control in Cuva AI uses the agent's reasoning to maintain the flow even as data structures evolve.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                            <strong className="text-gray-900 dark:text-white">Pause & Resume:</strong> Wait for human approval before continuing sensitive flows.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                            <strong className="text-gray-900 dark:text-white">Error Catching:</strong> Gracefully handle tool failures with retry logic and fallback paths.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                            <strong className="text-gray-900 dark:text-white">Data Mapping:</strong> Effortlessly transform data formats between different agent nodes.
                        </div>
                    </li>
                </ul>
            </div>
        </>
    ),
};

export default FlowControl;

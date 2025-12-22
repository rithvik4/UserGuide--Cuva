import React from 'react';
import { Icons } from '../lib/icons';

const Terminators = {
    heading: "Terminators: Closing the Loop",
    body: (
        <>
            <p>
                <strong>Terminators</strong> are the final nodes in a workflow canvas. They define what happens when an agent completes its task, ensuring the process is closed, the data is delivered, and the goal is achieved. Without a terminator, a workflow has no "final output."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <div className="flex bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1 bg-red-500 h-full"></div>
                    <div className="mr-6">
                        <div className="w-12 h-12 bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center mb-4">
                            <Icons.Shield className="w-6 h-6" />
                        </div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Final Output</h4>
                        <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Specifies what value or file should be returned as the final result of the execution.</p>
                    </div>
                </div>

                <div className="flex bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1 bg-blue-500 h-full"></div>
                    <div className="mr-6">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                            <Icons.Connectors className="w-6 h-6" />
                        </div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight">System Update</h4>
                        <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Syncs the final data back to your CRM, Data Warehouse, or other enterprise systems.</p>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Common Terminator Types</h3>
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Node Type</th>
                            <th className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Function</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900/20 divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Notification</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Sends status reports via Slack, Teams, or Email.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">API Callback</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Sends payload back to a URL for 3rd-party consumption.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Data Store Push</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Updates existing records in your knowledge base.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-12 p-8 bg-slate-900 dark:bg-slate-900/80 text-white rounded-3xl border border-slate-800 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                <h4 className="flex items-center gap-3 text-[17px] font-bold mb-4 tracking-tight">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 text-sm">💡</span>
                    Best Practice
                </h4>
                <p className="text-slate-400 text-[14px] leading-relaxed">
                    Always include an <strong>Audit Terminator</strong> in sensitive workflows. This node generates a summary of every action the agent took and why, ensuring that your AI operations are fully transparent and ready for regulatory review.
                </p>
            </div>
        </>
    ),
};

export default Terminators;

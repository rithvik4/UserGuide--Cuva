import React from 'react';

export default {
    // heading: 'Workflow Execution',
    body: (
        <>
            <>
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Intent-Driven Automation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                        Transform conversations into actions. Simply state your goal, and Cuvabot will identify the correct workflow to execute. From processing an invoice to running a multi-agent risk assessment, everything is accessible via chat.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">In-Chat Approvals</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    When an agent reaches a human-in-the-loop (HITL) node, it will present the options directly in the chat. Approve, deny, or provide feedback without leaving the conversation.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Live Progress Tracking</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    See exactly what the agent is doing at any moment. Cuvabot provides a live status feed—"Extracting text," "Reasoning," "Generating draft"—directly in the chat bubble.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-sm uppercase tracking-widest text-center">Execution Lifecycle</h4>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                <span className="block text-xs font-bold text-blue-600 mb-1">STEP 1</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">Identify Intent</span>
                            </div>
                            <div className="text-gray-300 dark:text-gray-600">→</div>
                            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                <span className="block text-xs font-bold text-purple-600 mb-1">STEP 2</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">Run Agents</span>
                            </div>
                            <div className="text-gray-300 dark:text-gray-600">→</div>
                            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                <span className="block text-xs font-bold text-green-600 mb-1">STEP 3</span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">Deliver Output</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    ),
};

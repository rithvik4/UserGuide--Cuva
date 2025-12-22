import React from 'react';

export default {
    heading: 'How Cuva Agents Work',
    body: (
        <>
            <p>
                A Cuva Agent follows a simple <strong className="text-blue-600 dark:text-blue-400">"If-Then"</strong> logic. Every agent begins with a Trigger and completes its goal by following a series of structured Steps.
            </p>

            <div className="space-y-8 mt-12 mb-16">
                {/* Step 1: Trigger */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/20">1</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">The Trigger (The "Start" Signal)</h3>
                        <p className="mb-4">The Trigger is the event that tells the agent to wake up and start working. Without a trigger, the agent stays idle.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-gray-900 dark:text-white block mb-1">Automatic</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Starts on events (e.g., new email, support ticket).</span>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800">
                                <span className="font-bold text-gray-900 dark:text-white block mb-1">Manual</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Starts at a specific time or by clicking a button.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: The Steps */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg border border-purple-500/20">2</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">The Steps (The "Process")</h3>
                        <p className="mb-4">Once started, the agent follows a list of Steps pre-defined in the Agent Builder (the AI's "to-do list").</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-[14px]">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                <span><strong className="text-gray-900 dark:text-white">Performs an Action:</strong> It completes a specific task.</span>
                            </li>
                            <li className="flex items-start gap-2 text-[14px]">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                <span><strong className="text-gray-900 dark:text-white">Decides a Path:</strong> It chooses the next step based on available information.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 3: Actions */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center font-bold text-lg border border-green-500/20">3</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Actions (The "Work")</h3>
                        <p className="mb-6">Actions are the actual tasks the agent performs. An agent can use multiple actions to reach its goal.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors hover:border-green-500/30">
                                <div className="text-[14px] font-bold text-gray-900 dark:text-white mb-1">Reading</div>
                                <div className="text-[11px] text-gray-500">Files, chats, records</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors hover:border-green-500/30">
                                <div className="text-[14px] font-bold text-gray-900 dark:text-white mb-1">Thinking</div>
                                <div className="text-[11px] text-gray-500">Summarizing, planning</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors hover:border-green-500/30">
                                <div className="text-[14px] font-bold text-gray-900 dark:text-white mb-1">Writing</div>
                                <div className="text-[11px] text-gray-500">Drafts, docs, posts</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors hover:border-green-500/30">
                                <div className="text-[14px] font-bold text-gray-900 dark:text-white mb-1">Connecting</div>
                                <div className="text-[11px] text-gray-500">Slack, Jira, etc.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4: Flow */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-lg border border-orange-500/20">4</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Flow (The "Roadmap")</h3>
                        <p>Flow controls how the agent navigates from one step to the next.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:border-orange-500/30 transition-colors">
                                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Branching</h4>
                                <p className="text-[13px] text-gray-500 dark:text-gray-400">Yes/No decisions (e.g., if customer is angry, alert human; otherwise, draft a reply).</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:border-orange-500/30 transition-colors">
                                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Sub-Agents</h4>
                                <p className="text-[13px] text-gray-500 dark:text-gray-400">For complex jobs, an agent can call on a specialized "mini-agent" to handle parts of the work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/20 text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">In Short</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/20">1</div>
                        <span className="font-bold text-gray-900 dark:text-white">Trigger</span>
                    </div>
                    <div className="hidden md:block text-slate-300 dark:text-slate-700">→</div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-orange-500/20">2</div>
                        <span className="font-bold text-gray-900 dark:text-white">Flow</span>
                    </div>
                    <div className="hidden md:block text-slate-300 dark:text-slate-700">→</div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-green-500/20">3</div>
                        <span className="font-bold text-gray-900 dark:text-white">Action</span>
                    </div>
                </div>
            </div>
        </>
    ),
};

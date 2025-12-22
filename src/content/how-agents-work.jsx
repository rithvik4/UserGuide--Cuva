import React from 'react';

export default {
    heading: 'How Agents Work',
    body: (
        <>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                Cuva Agents operate on a cognitive loop, not a static script. While workflow automation follows a rigid "If This, Then That" structure, an Agent uses an LLM brain to <strong>Percieve, Reason, Act, and Learn</strong>. This allows them to handle ambiguity and adapt to changing data in real-time.
            </p>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-green-500/20"></div>

                <div className="space-y-12">
                    {/* Phase 1: Perception */}
                    <div className="relative flex gap-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/30 shadow-sm flex items-center justify-center z-10">
                            <span className="text-2xl">👁️</span>
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Perception (Context Awareness)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                The Agent "wakes up" when triggered by a data signal—an incoming email, a Slack alert, or a database update. Unlike basic automations, it doesn't just see the event; it reads the <em>context</em>.
                            </p>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Input Signals</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        Structured Data (JSON, SQL rows)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        Unstructured Text (PDFs, Emails)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        User Prompts & History
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        System State changes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2: Cognition */}
                    <div className="relative flex gap-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/30 shadow-sm flex items-center justify-center z-10">
                            <span className="text-2xl">🧠</span>
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Cognition (Reasoning Engine)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Instead of following a hard-coded path, the Agent <strong>plans</strong>. It breaks the user's goal down into sub-tasks (Chain-of-Thought), evaluates which tools it needs, and determines the logical order of operations.
                            </p>
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                                </div>
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">The Decision Loop</h4>
                                <code className="block text-xs font-mono bg-white dark:bg-black/20 p-3 rounded-lg text-purple-600 dark:text-purple-400">
                                    Goal: "Refund Order #123 if eligible"<br />
                                    1. Check Policy Doc (Tool: Knowledge Base)<br />
                                    2. Check Order Status (Tool: Salesforce)<br />
                                    3. IF eligible -> Process Refund (Tool: Stripe)<br />
                                    4. ELSE -> Draft Rejection Email (Tool: Gmail)
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3: Tool Use */}
                    <div className="relative flex gap-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-green-100 dark:border-green-900/30 shadow-sm flex items-center justify-center z-10">
                            <span className="text-2xl">🛠️</span>
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Tool Use (Function Calling)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Agents have "hands" in the form of <strong>Tools</strong>. These are secure connectors to your designated APIs and databases. The Agent writes the code to call the tool, executes it, and reads the output—all without human intervention.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-green-500/50 transition-colors cursor-default">
                                    <span className="block font-bold text-gray-900 dark:text-white mb-1">Retrieval Tools</span>
                                    <span className="text-xs text-gray-500">Searching Vector DBs, querying SQL, scraping web pages.</span>
                                </div>
                                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-green-500/50 transition-colors cursor-default">
                                    <span className="block font-bold text-gray-900 dark:text-white mb-1">Action Tools</span>
                                    <span className="text-xs text-gray-500">Sending emails, creating Jira tickets, updating CRMs.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phase 4: Memory */}
                    <div className="relative flex gap-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-orange-100 dark:border-orange-900/30 shadow-sm flex items-center justify-center z-10">
                            <span className="text-2xl">💾</span>
                        </div>
                        <div className="pt-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Memory (Persistence)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                Great Agents don't suffer from amnesia. They maintain a <strong>State</strong> of the conversation and the task history. If a tool fails, the Agent remembers the error and tries a different approach, rather than crashing like a script would.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ),
};

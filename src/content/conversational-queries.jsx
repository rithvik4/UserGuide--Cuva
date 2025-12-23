import React from 'react';

export default {
    // heading: 'Conversational Queries',
    body: (
        <>
            <>
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What is Cuvabot?</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                        <strong>Cuvabot</strong> is the unified chat interface for the Cuva AI platform. Acting as the "Central Nervous System," it allows users to interact with their enterprise data, trigger complex agents, and manage workflows using natural language. It understands context, identifies nuances, and provides citation-backed answers.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Conversational Intelligence</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Natural Language Reasoning</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Cuvabot doesn't just match keywords; it reasons through your query. Whether you're asking for a summary of a 50-page legal contract or comparing quarterly performance metrics, the bot analyzes the intent behind your words.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Citation-Backed Truth</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Every answer provided by Cuvabot includes precise citations. You can verify the exact paragraph and document source, eliminating hallucinations and ensuring total data transparency.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Multi-Turn Context</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    The bot maintains a persistent memory of your conversation. You can ask follow-up questions like "Can you explain that second point in more detail?" without re-stating the entire context.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-8">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-md">Key Capabilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                Automated Document Summarization
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                Cross-Document Data Synthesis
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                Multi-Language Translation & Support
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                Real-time Fact Checking
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    ),
};

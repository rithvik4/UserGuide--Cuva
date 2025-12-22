import React from 'react';

export default {
    heading: 'Conversational Queries',
    body: (
        <>
            <p className="mb-10 text-gray-500">Interact with your enterprise data through a natural language interface that understands context, identifies nuances, and provides citation-backed answers.</p>

            <div className="space-y-8">
                <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Natural Language Reasoning</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                        CuvaBot doesn't just match keywords; it reasons through your query. Whether you're asking for a summary of a 50-page legal contract or comparing quarterly performance metrics, the bot analyzes the intent behind your words.
                    </p>
                    <div className="bg-blue-500/5 border-l-4 border-blue-500 p-4">
                        <p className="text-[13px] italic text-blue-700 dark:text-blue-400">
                            "Compare our current ESG policy with the 2023 version and highlight the three most significant changes in reporting requirements."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3">Citation-Backed Truth</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            Every answer provided by CuvaBot includes precise citations. Click on a reference to see the exact paragraph and document source, eliminating hallucinations and ensuring total data transparency.
                        </p>
                    </div>
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3">Multi-Turn Context</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            The bot maintains a persistent memory of your conversation. You can ask follow-up questions like "Can you explain that second point in more detail?" without re-stating the entire context.
                        </p>
                    </div>
                </div>

                <div className="p-8 border border-slate-100 dark:border-slate-800">
                    <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest">Key Capabilities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 text-[13.5px] text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-500"></div>
                            Automated Document Summarization
                        </li>
                        <li className="flex items-center gap-3 text-[13.5px] text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-500"></div>
                            Cross-Document Data Synthesis
                        </li>
                        <li className="flex items-center gap-3 text-[13.5px] text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-500"></div>
                            Multi-Language Translation & Support
                        </li>
                        <li className="flex items-center gap-3 text-[13.5px] text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-500"></div>
                            Real-time Fact Checking
                        </li>
                    </ul>
                </div>
            </div>
        </>
    ),
};

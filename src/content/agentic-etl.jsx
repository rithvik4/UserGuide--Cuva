import React from 'react';

const AgenticETL = {
    heading: "Agentic ETL: Resilient Pipelines",
    body: (
        <>
            <div className="bg-orange-50/50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-8 my-10 rounded-r-3xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 tracking-tight">The End of Rigid Pipelines</h3>
                <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
                    Standard ETL scripts are brittle. If a column name changes or a PDF layout shifts, traditional scripts fail. <strong>Cuva uses Agentic ETL because business data is messy.</strong> Our agents use computer vision and reasoning to "read" data like a human employee, making your pipelines resilient to change.
                </p>
            </div>

            <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-8 tracking-tight">From Brittle Scripts to Resilient Agents</h3>

            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-500/30 transition-colors flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Intelligent Extraction</h4>
                        <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                            Cuva agents use Vision Models to recognize tables in scanned invoices or identify clauses in legal contracts, extracting data with human-like context.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-500/30 transition-colors flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Semantic Transformation</h4>
                        <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                            Instead of brittle regex patterns, agents use logic to understand that different formats or names refer to the same entity, performing deduplication automatically.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-500/30 transition-colors flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Adaptive Loading</h4>
                        <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                            Data is loaded into the <strong>Knowledge Graph</strong>, linking new information to existing entities, ensuring your internal data remains interconnected.
                        </p>
                    </div>
                </div>
            </div>
        </>
    ),
};

export default AgenticETL;

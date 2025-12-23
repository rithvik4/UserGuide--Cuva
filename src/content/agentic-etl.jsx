import React from 'react';

const AgenticETL = {
    heading: "Agentic ETL: Resilient Pipelines",
    body: (
        <>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is Agentic ETL?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Agentic ETL (Extract, Transform, Load) is the next evolution of data processing. Traditional ETL relies on rigid, hard-coded scripts that break whenever a source format changes—like a new column in a spreadsheet or a shifted layout in a PDF. <strong className="text-gray-900 dark:text-white">Agentic ETL replaces these brittle scripts with AI Agents.</strong> These agents use computer vision and semantic reasoning to "read" and understand data just like a human would, allowing them to adapt to changes automatically without crashing.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How we use it in Cuva?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    In the Cuva Platform, we use Agentic ETL to handle the "messy" reality of enterprise data. Instead of forcing you to clean your data before uploading it, our agents do the heavy lifting for you.
                </p>
                <div className="space-y-3 mb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Resilient Extraction:</strong> Whether it's a scanned invoice, a complex legal contract, or a messy Excel file, our agents intelligently identify and extract the key information you need, ignoring the noise.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Contextual Transformation:</strong> The agents understand context. For example, they know that "Bill to" and "Invoiced to" mean the same thing, standardizing your data automatically without manual mapping rules.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Knowledge Graph & Vector Integration:</strong> Once processed, the agent converts the extracted data into numerical vectors (embeddings) and loads them into a secure <strong className="text-gray-900 dark:text-white">Vector Database</strong> for precise retrieval. Simultaneously, it maps relationships in the <strong className="text-gray-900 dark:text-white">Knowledge Graph</strong>, ensuring both semantic understanding and structural context.
                    </p>
                </div>
            </div>

            <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-8 tracking-tight">From Brittle Scripts to Resilient Agents</h3>

            <div className="grid grid-cols-1 gap-4">
                <div className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-orange-500/30 transition-colors flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Intelligent Extraction</h4>
                        <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
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
                        <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
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
                        <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                            Data is converted into numerical vectors and stored in the <strong>Vector Database</strong> for accurate retrieval, while simultaneously updating the <strong>Knowledge Graph</strong> to maintain entity relationships.
                        </p>
                    </div>
                </div>
            </div>
        </>
    ),
};

export default AgenticETL;

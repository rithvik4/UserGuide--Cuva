import React from 'react';

const KnowledgeSystems = {
    heading: "Knowledge Systems",
    body: (
        <>
            <p>
                The <strong>Knowledge Systems</strong> module is the cognitive core of the Cuva platform. It unifies scattered enterprise data into a singular, intelligent fabric that AI agents can access, reason about, and act upon.
            </p>
            <p className="mt-4">
                It is composed of four integrated pillars:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <h4 className="text-[17px] font-bold text-blue-600 dark:text-blue-400 mb-2">Knowledge Base</h4>
                    <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">The semantic storage layer that indexes documents and data for high-speed retrieval.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-purple-500/30 transition-colors">
                    <h4 className="text-[17px] font-bold text-purple-600 dark:text-purple-400 mb-2">Knowledge Graph</h4>
                    <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">The reasoning engine that maps relationships between entities like clients, risks, and accounts.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-green-500/30 transition-colors">
                    <h4 className="text-[17px] font-bold text-green-600 dark:text-green-400 mb-2">RAG</h4>
                    <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">The mechanism that grounds AI responses in your verified internal data.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-orange-500/30 transition-colors">
                    <h4 className="text-[17px] font-bold text-orange-600 dark:text-orange-400 mb-2">Agentic ETL</h4>
                    <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">Autonomous workflows that ingest, clean, and structure messy data into the system.</p>
                </div>
            </div>
        </>
    ),
};

export default KnowledgeSystems;

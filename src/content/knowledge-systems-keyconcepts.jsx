import React from 'react';

export default {
  heading: 'Knowledge Systems: Key Concepts',
  body: (
    <>
      <p>
        Knowledge Systems in Cuva AI act as the platform's advanced "Digital Brain." This foundational layer equips AI agents with the deep, context-aware understanding necessary for sophisticated problem-solving.
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-6 tracking-tight">Agentic ETL</h3>
      <p>
        This is an intelligent, AI-driven mechanism for continuously enriching and updating the Knowledge Bases. Agentic ETL leverages specialized AI agents to autonomously:
      </p>
      <ul className="space-y-4 my-8">
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Extract:</strong> Retrieve data from diverse sources like databases, documents, and emails.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Transform:</strong> Normalize and vectorize content for efficient reasoning by other agents.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Load:</strong> Populate the "Digital Brain" to ensure it remains current in real-time.
          </div>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">Agentic RAG</h3>
      <p>
        Retrieval-Augmented Generation (RAG) acts as a bridge, connecting the AI's reasoning engine with your organization's verified institutional knowledge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-4">1. Retrieval</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Locates the most relevant pieces of information from your organization's repository using vector similarity search.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-4">2. Augmentation</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Injects the retrieved facts into the AI's instruction set, providing a factual foundation for the response.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-4">3. Generation</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Synthesizes the answer using both the user query and the factual context to prevent hallucinations.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/50 dark:to-indigo-900/10 p-8 rounded-3xl border border-indigo-100/50 dark:border-indigo-900/20 shadow-sm">
        <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Knowledge Bases (KBs)</h4>
        <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
          The curated repository of domain-specific intelligence. A Knowledge Base serves as the long-term memory for the AI, storing verified facts and specifications in an optimized format for instant search.
        </p>
      </div>
    </>
  ),
};

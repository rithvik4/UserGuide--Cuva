import React from 'react';

export default {
  heading: 'Knowledge Systems: Key Concepts',
  body: (
    <>
<<<<<<< HEAD
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
=======
      <div className="rounded-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border p-5 mb-6 flex items-start gap-4">
        
        <div>
          <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">Knowledge Systems — the Digital Brain</div>
          <div className="mt-2 text-gray-700 dark:text-gray-200">Cuva's Knowledge Systems give agents context-aware understanding for robust problem-solving. This foundation combines Agentic ETL, RAG, and curated Knowledge Bases to deliver reliable, auditable AI behavior.</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs font-medium px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Reliable</span>
            <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded">Grounded</span>
            <span className="text-xs font-medium px-2 py-1 bg-yellow-50 text-yellow-700 rounded">Defensible</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Agentic ETL (Extract, Transform, Load)</h3>
      <p className="text-gray-700 dark:text-gray-200">This is not a static pipeline but an intelligent, AI-driven mechanism for continuously enriching and updating Knowledge Bases. Agentic ETL leverages specialized agents to autonomously:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li>Extract relevant data from diverse and often unstructured sources (databases, documents, emails, websites).</li>
        <li>Transform raw data into structured, vector-optimized formats for efficient retrieval and reasoning, including cleaning, normalizing, and vectorizing content.</li>
        <li>Load transformed information into Knowledge Bases so the "Digital Brain" stays current and accurate in real time.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Agentic RAG (Retrieval-Augmented Generation)</h3>
      <p className="text-gray-700 dark:text-gray-200">Retrieval-Augmented Generation (RAG) is the technology that makes Cuva AI agents smart, accurate, and reliable. It bridges the LLM's reasoning with your verified institutional knowledge so responses are grounded in facts and hallucinations are minimized.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded-md bg-white dark:bg-gray-900">
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Retrieval</h4>
          <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> Quickly locate the most relevant information from your documents and data.</p>
          <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> Queries are converted into vectors and matched via high-speed vector similarity search against Knowledge Bases.</p>
          <p className="text-gray-700 dark:text-gray-200"><strong>Output:</strong> A small, highly relevant set of snippets.</p>
        </div>

        <div className="p-4 border rounded-md bg-white dark:bg-gray-900">
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Augmentation</h4>
          <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> Inject retrieved facts into the AI's instruction set to create a factual foundation.</p>
          <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> Ground-truth data is dynamically inserted into the prompt sent to the LLM, e.g. "Answer ONLY based on this context: [snippets]. Question: [user]."</p>
          <p className="text-gray-700 dark:text-gray-200"><strong>Impact:</strong> Forces the LLM to stick to verified data.</p>
        </div>

        <div className="p-4 border rounded-md bg-white dark:bg-gray-900">
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Generation</h4>
          <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> Produce a final, accurate, and coherent answer.</p>
          <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The LLM synthesizes the question and supplied factual context using its linguistic capabilities and reasoning.</p>
          <p className="text-gray-700 dark:text-gray-200"><strong>Result:</strong> A context-aware, trustworthy output grounded in your organization's data.</p>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-md bg-white dark:bg-gray-900">
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Quick example — RAG in action</h4>
          <p className="text-gray-700 dark:text-gray-200">Imagine a user asks: "What's our onboarding SLA for new clients and which documents are required?" The RAG flow:</p>
          <ol className="list-decimal ml-6 mt-2 space-y-2 text-gray-700 dark:text-gray-200">
            <li><strong>Retrieval:</strong> Vector search finds policy docs, onboarding checklist, and SLA tables.</li>
            <li><strong>Augmentation:</strong> Extracted snippets are inserted into the prompt as factual context.</li>
            <li><strong>Generation:</strong> LLM produces a concise answer citing the SLA and listing required documents.</li>
          </ol>
          <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">Sample prompt sent to the LLM:</div>
          <pre className="mt-2 bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-gray-800 dark:text-gray-100 overflow-x-auto">Answer ONLY using the context below. Context: [Snippet A: SLA table], [Snippet B: Onboarding checklist]. Question: What is the SLA and which documents are required?</pre>
        </div>

        <div className="p-4 border rounded-md bg-white dark:bg-gray-900">
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-gray-100">Design principles</h4>
          <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-200">
            <div><strong>Transparent:</strong> Show sources behind answers to enable auditing.</div>
            <div><strong>Robust:</strong> Continuous ETL updates keep facts current.</div>
            <div><strong>Human-in-the-loop:</strong> Allow interventions and approvals where needed.</div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Knowledge Bases (KBs)</h3>
      <p className="text-gray-700 dark:text-gray-200">Knowledge Bases are the structured, curated repositories of domain and organizational intelligence—the long-term memory for the AI. They store verified facts, proprietary documents, technical specs, process flows, and historical data in optimized formats so agents have instant access to authoritative information.</p>

      <div className="mt-4 rounded-md bg-gray-50 dark:bg-gray-800 border p-3">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Why this matters</div>
        <div className="mt-2 text-gray-700 dark:text-gray-200">Well-indexed Knowledge Bases plus RAG give you consistent, reliable AI behavior: faster onboarding, defensible answers, and reduced operational risk.</div>
>>>>>>> main
      </div>
    </>
  ),
};

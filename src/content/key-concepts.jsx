import React from 'react';

export default {
  heading: 'Key Concepts',
  body: (
    <>
      {/* AI Agents */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">AI Agents</h2>
      <p>
        Agents are AI-powered autonomous entities designed to solve open-ended goals. Unlike a standard Workflow—which follows a fixed, predetermined path—an Agent makes intelligent, real-time decisions about which tools to use and how to navigate data to achieve a desired outcome.
      </p>

      <p>
        In the Cuva AI ecosystem, AI Agents are autonomous software entities that act as "digital employees" capable of reasoning, making decisions, and executing tasks within a financial enterprise. Unlike traditional automation that follows rigid, pre-defined scripts, these agents use Large Language Models (LLMs) to understand intent and navigate complex workflows.
      </p>

      {/* Agentic Workflows */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Agentic Workflows</h2>
      <p>
        Agentic Workflows are the dynamic operational framework of the Cuva AI platform. Unlike traditional, linear automation, agentic workflows enable AI agents to orchestrate complex processes by making autonomous decisions.
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3 tracking-tight">Dynamic vs. Static Automation</h3>
      <p>
        An agentic workflow is a self-correcting process where intelligence is embedded into every step of execution. These workflows are defined by:
      </p>
      <ul className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Autonomous Decision-Making:</strong> Agents analyze context—such as buyer-supplier relationships—to determine the best next action.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Multi-Agent Collaboration:</strong> Specialized agents (KYC, Risk, etc.) work together, passing data between nodes to complete high-level objectives.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Reasoning and Adaptability:</strong> The workflow branches and iterates based on results, solving open-ended tasks that rigid scripts cannot handle.
          </div>
        </li>
      </ul>

      <div className="rounded-lg bg-gray-50 dark:bg-gray-800 border p-4 mb-6">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300">At a glance</div>
        <div className="mt-2 text-gray-700 dark:text-gray-200">
          Agentic Workflows are the dynamic operational framework of the Cuva AI platform — not linear automation, but cooperative, adaptive agents that orchestrate complex processes, make autonomous decisions, and collaborate to reach financial goals.
        </div>
      </div>

      {/* Knowledge Systems */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Knowledge Systems</h2>
      <p>
        Knowledge Systems in Cuva AI act as the platform's advanced "Digital Brain." This foundational layer equips AI agents with the deep, context-aware understanding necessary for sophisticated problem-solving.
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3 tracking-tight">Agentic ETL</h3>
      <p>
        This is an intelligent, AI-driven mechanism for continuously enriching and updating the Knowledge Bases. Agentic ETL leverages specialized AI agents to autonomously:
      </p>
      <ul className="space-y-4 my-6">
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

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-3 tracking-tight">Agentic RAG</h3>
      <p>
        Retrieval-Augmented Generation (RAG) acts as a bridge, connecting the AI's reasoning engine with your organization's verified institutional knowledge.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
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

      <div className="bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900/50 dark:to-indigo-900/10 p-6 rounded-3xl border border-indigo-100/50 dark:border-indigo-900/20 shadow-sm mb-8">
        <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-3 tracking-tight">Knowledge Bases (KBs)</h4>
        <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
          The curated repository of domain-specific intelligence. A Knowledge Base serves as the long-term memory for the AI, storing verified facts and specifications in an optimized format for instant search.
        </p>
      </div>

      {/* Connectors */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Connectors</h2>
      <p>
        Connectors are pre-configured software modules designed to translate the unique data models and API protocols of third-party applications into a standardized format the AI can understand.
      </p>
      <ul className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Tailor-Made Integration:</strong> Purpose-built for specific apps (e.g., Salesforce, SharePoint) to ensure optimized data exchange.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Permission-Aware:</strong> Respect organization-level security protocols, ensuring authorized data access only.
          </div>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4 tracking-tight">How We Use Connectors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Agentic ETL</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Agents "crawl" enterprise sources to extract, clean, and load data into your Knowledge Base.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-purple-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Visual Workflow Nodes</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Drag-and-drop nodes in the AI agent studio to trigger flows (e.g., on new email) or execute actions.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-green-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Real-Time Retrieval</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Fetch live data from connected systems to ensure agentic responses are grounded in current facts.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-orange-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Task Execution</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Agents move beyond chat to active work, like processing an invoice directly in the source system.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Available Connectors</h3>
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm mb-8">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-900/50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Category</th>
              <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Available Connectors</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900/20 divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">CRM</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Salesforce, HubSpot, Pipedrive</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Collaboration</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Slack, Microsoft Teams, Asana</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Productivity</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Microsoft Word, Excel, PowerPoint, Google Sheets</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">File Storage</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">OneDrive, Google Drive, SharePoint, Dropbox, FTP</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Finance</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">PayPal, Stripe, Plaid, WealthBox, LexisNexis, Mambu</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CuvaBot */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">CuvaBot</h2>
      <p className="text-gray-700 dark:text-gray-200">
        CuvaBot is the conversational interface for agents. It allows users to chat with the Knowledge Systems for compliance-ready answers, perform Enterprise Search across all connected systems, and trigger and execute workflows via natural language commands.
      </p>
    </>
  ),
};

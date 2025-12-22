import React from 'react';

export default {
  heading: 'Agentic Workflows',
  body: (
    <>
      <p>
        Agentic Workflows are the dynamic operational framework of the Cuva AI platform. Unlike traditional, linear automation, agentic workflows enable AI agents to orchestrate complex processes by making autonomous decisions.
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-6 tracking-tight">Dynamic vs. Static Automation</h3>
      <p>
        An agentic workflow is a self-correcting process where intelligence is embedded into every step of execution. These workflows are defined by:
      </p>
      <ul className="space-y-4 my-8">
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

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-8 tracking-tight">Core Applications</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Supply Chain Finance</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Orchestrating 3-way matching between POs, invoices, and delivery records to validate financing requests.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Wealth Management</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Automating personalized client reporting, portfolio rebalancing, and investment idea generation.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Compliance & Risk</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Real-time KYC/AML validation and risk scoring during client onboarding processes.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Agentic ETL</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Intelligent data ingestion pipelines that structure raw information into usable enterprise knowledge.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Business Impact</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl border border-blue-100 dark:border-blue-900/20 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">40%</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Workload Decrease</div>
        </div>
        <div className="p-6 bg-purple-500/5 dark:bg-purple-500/10 rounded-2xl border border-purple-100 dark:border-purple-900/20 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">3X</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Faster Onboarding</div>
        </div>
        <div className="p-6 bg-green-500/5 dark:bg-green-500/10 rounded-2xl border border-green-100 dark:border-green-900/20 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">50%</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Faster Compliance</div>
        </div>
        <div className="p-6 bg-orange-500/5 dark:bg-orange-500/10 rounded-2xl border border-orange-100 dark:border-orange-900/20 text-center">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">2.5X</div>
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">More Engagement</div>
        </div>
      </div>
    </>
  ),
};

import React from 'react';

export default {
  heading: 'Agents',
  body: (
    <>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        Agents are the digital workforce in Cuva platform. Unlike simple scripts that follow a linear path, Cuva Agents are <strong>autonomous entities</strong> capable of perception, reasoning, and goal-directed action. They don't just move data; they understand it.


      </p>

      {/* User Ecosystem */}
      < h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6" > The User Ecosystem</h3 >
      <div className="space-y-6 mb-12">
        <div>
          <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Architects (Builders)</h4>
          <p className="text-[16px] leading-relaxed text-gray-700 dark:text-gray-300">Power users and IT specialists who define logic, connect data sources, and build custom AI experiences to solve bottlenecks.</p>
        </div>
        <div>
          <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">End-Users (Consumers)</h4>
          <p className="text-[16px] leading-relaxed text-gray-700 dark:text-gray-300">The broader workforce interacting with pre-configured agents to accelerate daily output via predefined tasks and automations.</p>
        </div>
        <div>
          <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Supervisors (Admins)</h4>
          <p className="text-[16px] leading-relaxed text-gray-700 dark:text-gray-300">Strategic oversight tier managing security governance, permissioning, and monitoring the ROI of automated workflows.</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Core Characteristics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-blue-600 dark:text-blue-400 mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Perception</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Agents can "read" emails, "view" documents, and "listen" to system logs to understand the state of the world.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-purple-600 dark:text-purple-400 mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Reasoning</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Powered by LLMs, agents plan multi-step workflows, handle ambiguity, and make decisions based on defined guardrails.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="text-green-600 dark:text-green-400 mb-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Action</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Agents interact with your systems via Connectors—sending Slack messages, updating CRMs, or executing SQL queries.</p>
        </div>
      </div>

      {/* Agent Roles */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Agent Roles</h3>
      <div className="space-y-4 mb-12">
        <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 font-bold">I</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">Informational Agents</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Focus on retrieving, synthesizing, and reporting data. <em>Example: A "Market Research Agent" that digests daily news feeds and summarizes competitor activity.</em></p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 font-bold">T</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">Transactional Agents</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Authorized to perform write operations and execute business logic. <em>Example: An "Onboarding Agent" that provisions IT accounts and sends welcome emails to new hires.</em></p>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-slate-100 dark:border-slate-800">
          <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 font-bold">A</div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">Advisory Agents</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Analyze complex datasets to provide recommendations or flags. <em>Example: A "Compliance Agent" that reviews transaction logs and flags potential policy violations for human review.</em></p>
          </div>
        </div>
      </div>

      {/* How are agents useful? */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">What can Agents do for you?</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Agents can help you in numerous ways. They can:</p>
      <ul className="list-disc leading-relaxed ml-6 space-y-2 text-gray-700 dark:text-gray-300 mb-12">
        <li>Increase efficiency and help you make decisions</li>
        <li>Automate repetitive tasks</li>
        <li>Improve experiences for your customers</li>
        <li>Gather and analyze data and provide you with summaries</li>
      </ul>

      {/* Real-World Examples */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Real-World Examples</h3>
      <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 uppercase tracking-wider text-xs">
            <tr>
              <th className="p-4 font-semibold border-b dark:border-slate-800 w-1/3">Agent Type</th>
              <th className="p-4 font-semibold border-b dark:border-slate-800">What it Achieves</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-transparent">
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Invoice Processing</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Extracts data from PDF invoices, validates against POs in ERP, and schedules payment or request approvals.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Growth & Sales</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Researches high-intent leads and drafts tailored outreach based on their recent company news.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Success & Support</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Analyzes long-running support threads to provide the next best action for a resolution.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Engineering Lead</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Automatically reviews pull requests for style and logic, drafting descriptions to save developers time.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Talent & HR</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Aggregates a year’s worth of contributions and milestones to draft data-driven self-evaluations.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Strategic Recap</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Transforms meeting transcripts into concise action plans, tagging owners and linking relevant files.</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-900 dark:text-white">Intelligence Pulse</td>
              <td className="p-4 text-gray-600 dark:text-gray-400">Monitors company-wide sentiment by analyzing support tickets and internal feedback in real-time.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Cuva Agents turn your company’s collective knowledge into active energy. By automating the intricate, repetitive steps of your workday, you empower your team to focus on what humans do best: innovation and connection.
      </p>
    </>
  ),
};

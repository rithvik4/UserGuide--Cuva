import React from 'react';

export default {
    heading: 'Cuva Agents: Technical & Operational Framework',
    body: (
        <>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4 tracking-tight">Functional Overview</h3>
            <p>
                A Cuva Agent is an autonomous AI engine engineered to bridge the gap between static information and active execution. While traditional AI relies on human prompts to generate text, a Cuva Agent utilizes a recursive logic loop to observe, reason, and act. By integrating these agents into your stack, you transition from manual data retrieval to automated workflow orchestration.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">The User Ecosystem</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Architects (Builders)</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Power users and IT specialists who define logic, connect data sources, and build custom AI experiences to solve bottlenecks.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">End-Users (Consumers)</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">The broader workforce interacting with pre-configured agents to accelerate daily output via predefined tasks and automations.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Supervisors (Admins)</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Strategic oversight tier managing security governance, permissioning, and monitoring the ROI of automated workflows.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Key Capabilities</h3>
            <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm mb-12">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Feature</th>
                            <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Technical Benefit</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900/20 divide-y divide-slate-200 dark:divide-slate-800">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Trigger-Based Execution</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Programmed to initialize on specific events for real-time response.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Contextual Synthesis</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Leverages RAG to gather/analyze internal data for grounded, factual summaries.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Adaptive Decisioning</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Agents make next-step decisions based on the outcome of previous actions.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Efficiency Scaling</td>
                            <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Automates high-frequency repetitive tasks, freeing human cognitive resources.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Reference Use Cases for Builders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/30 transition-colors">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">CRM Intelligence</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Automate sales prospect research and generate tailored outreach based on historical data.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-purple-500/30 transition-colors">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Engineering Oversight</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Deploy agents to audit PRs, generate code descriptions, and compile self-evaluation documents.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-green-500/30 transition-colors">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Service Resolution</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Summarize ongoing ticket activity and proactively suggest next steps for case resolution.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-orange-500/30 transition-colors">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Executive Operations</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Synthesize transcripts into actionable recaps, highlighting experts and cross-referencing docs.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm md:col-span-2 relative group hover:border-pink-500/30 transition-colors">
                    <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Sentiment Analysis</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Mine knowledge bases, tickets, and Slack channels to generate real-time customer satisfaction scores.</p>
                </div>
            </div>

            <p>
                By deploying Cuva Agents, an organization effectively automates the "busy work" of data management. This results in significant time savings, a reduction in manual error, and improved outcomes for both internal stakeholders and external customers.
            </p>
        </>
    ),
};

import React from 'react';

export default {
    heading: 'Architecture Overview',
    body: (
        <>
            <p>
                Cuva AI is built on a high-concurrency, distributed multi-agent architecture. It functions as an orchestration layer that sits between your enterprise data silos and human operators, enabling autonomous task execution with strict governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Governance & Multi-Tenancy</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                        Isolation at the department and organization level ensures that data privacy and access controls are maintained across the enterprise.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-[13px] text-gray-600 dark:text-gray-400">
                            <div className="mt-1.5 w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span><strong>Departmental Silos:</strong> Segmented environments for different business units.</span>
                        </li>
                        <li className="flex items-start gap-3 text-[13px] text-gray-600 dark:text-gray-400">
                            <div className="mt-1.5 w-1 h-1 bg-blue-500 rounded-full"></div>
                            <span><strong>Identity Management:</strong> Granular user permissions and RBAC.</span>
                        </li>
                    </ul>
                </div>

                <div className="p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Hybrid Agent Layer</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                        The platform supports a dual-agent model, combining deterministic logic with probabilistic AI reasoning.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-[13px] text-gray-600 dark:text-gray-400">
                            <div className="mt-1.5 w-1 h-1 bg-purple-500 rounded-full"></div>
                            <span><strong>Deterministic Agents:</strong> Rule-based bots for high-accuracy repetitive tasks.</span>
                        </li>
                        <li className="flex items-start gap-3 text-[13px] text-gray-600 dark:text-gray-400">
                            <div className="mt-1.5 w-1 h-1 bg-purple-500 rounded-full"></div>
                            <span><strong>Cognitive Agents:</strong> LLM-powered entities for reasoning and natural language processing.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">The Integration Ecosystem</h3>
            <p>
                Cuva's architecture is built around a massive <strong>Connector Framework</strong>. This layer standardizes interactions with external SaaS, storage, and communication platforms, allowing agents to act as "digital employees" within your existing toolset.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 my-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-[13px] font-bold text-gray-900 dark:text-white mb-1">Communication</div>
                        <div className="text-[11px] text-slate-500">Slack, Twilio, Gmail</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-[13px] font-bold text-gray-900 dark:text-white mb-1">Storage</div>
                        <div className="text-[11px] text-slate-500">AWS S3, OneDrive, Drive</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-[13px] font-bold text-gray-900 dark:text-white mb-1">Productivity</div>
                        <div className="text-[11px] text-slate-500">Excel, Word, Sheets</div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="text-[13px] font-bold text-gray-900 dark:text-white mb-1">DevOps/CRM</div>
                        <div className="text-[11px] text-slate-500">GitHub, Jira, HubSpot</div>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">Agent Tools & Flow Control</h3>
            <p>
                Agents do not work in isolation; they utilize a suite of native tools and flow controllers to handle complex, non-linear workflows.
            </p>

            <div className="space-y-4 my-8">
                <div className="flex items-center gap-6 p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">KB</div>
                    <div>
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1">Knowledge Base Integration</h4>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">Direct access to semantic data stores for real-time RAG operations.</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-purple-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold text-lg shrink-0">HITL</div>
                    <div>
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1">Human-in-the-Loop (HITL)</h4>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">Conditional flow controls that pause execution for human validation or input.</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-green-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center font-bold text-lg shrink-0">API</div>
                    <div>
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-1">External API Execution</h4>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">Capability to call external restful services and process returned payloads in-flight.</p>
                    </div>
                </div>
            </div>
        </>
    ),
};

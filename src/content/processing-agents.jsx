import React from 'react';
import { Icons } from '../lib/icons';

const ProcessingAgents = {
    heading: "Processing Agents: The Autonomous Brains",
    body: (
        <>
            <p>
                <strong>Processing Agents</strong> are the intelligent workhorses of Cuva AI. They are autonomous software entities that can perceive their environment, reason over complex data using Large Language Models (LLMs), and perform specific actions to achieve a goal.
            </p>

            <div className="bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 my-10 rounded-r-2xl">
                <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Defining "Agentic" vs. "Static"</h4>
                <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
                    Unlike traditional automation scripts that follow rigid loops, a Processing Agent can adapt. If it encounters a new document layout or an unexpected API response, it uses its LLM core to "reason" through the issue and find a solution without crashing the workflow.
                </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Agent Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="text-blue-500 mb-4"><Icons.Search className="w-8 h-8" /></div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">Semantic Perception</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Agents "read" documents and code to extract intent rather than just looking for keyword matches.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-purple-500/30 transition-colors">
                    <div className="text-purple-500 mb-4"><Icons.Workflows className="w-8 h-8" /></div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">Logical Reasoning</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Using Chain-of-Thought processing, agents can break complex objectives into sub-tasks.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="text-green-500 mb-4"><Icons.Connectors className="w-8 h-8" /></div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">Tool Execution</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Agents autonomously decide which tool to use (e.g., Salesforce vs. Slack) based on task context.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-orange-500/30 transition-colors">
                    <div className="text-orange-500 mb-4"><Icons.Shield className="w-8 h-8" /></div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-[15px]">Self-Correction</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">If a tool fails, the agent can analyze the error and retry with different parameters.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-4 tracking-tight">Multi-Agent Collaboration</h3>
            <p>
                The true power of Cuva AI lies in <strong>Collaboration</strong>. Instead of one giant, complex agent, you can link multiple specialized agents together.
            </p>
            <div className="mt-8 p-10 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[14px] font-bold text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm">Research Agent</div>
                    <div className="text-slate-300 dark:text-slate-700">──▶</div>
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[14px] font-bold text-purple-600 dark:text-purple-400 rounded-2xl shadow-sm">Analysis Agent</div>
                    <div className="text-slate-300 dark:text-slate-700">──▶</div>
                    <div className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[14px] font-bold text-green-600 dark:text-green-400 rounded-2xl shadow-sm">Reporting Agent</div>
                </div>
                <p className="text-center mt-8 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Data refinement pipeline</p>
            </div>
        </>
    ),
};

export default ProcessingAgents;

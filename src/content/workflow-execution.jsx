import React from 'react';

export default {
    heading: 'Workflow Execution',
    body: (
        <>
            <p className="mb-10 text-gray-500">Transform conversations into actions. Directly trigger complex agentic workflows and multi-step processes through the CuvaBot interface.</p>

            <div className="space-y-8">
                <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Intent-Driven Automation</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-8">
                        Simply state your goal, and CuvaBot will identify the correct workflow to execute. From processing an invoice to running a multi-agent risk assessment, everything is accessible via chat.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                            <div className="w-8 h-8 flex-shrink-0 bg-blue-600 text-white flex items-center justify-center font-bold text-[12px]">U</div>
                            <p className="text-[13.5px] text-gray-700 dark:text-gray-200">"Run a compliance check on the Acme Corp document I just uploaded and notify the risk team of any conflicts."</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-blue-500/5 border border-blue-500/10">
                            <div className="w-8 h-8 flex-shrink-0 bg-slate-800 text-white flex items-center justify-center font-bold text-[12px]">C</div>
                            <p className="text-[13.5px] text-blue-800 dark:text-blue-300 font-medium">"I've identified the **Compliance Validation Workflow**. Starting extraction and cross-referencing against our 2024 policy. I will update you in real-time."</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3">In-Chat Approvals</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            When an agent reaches a human-in-the-loop (HITL) node, it will present the options directly in the chat. Approve, deny, or provide feedback without leaving the conversation.
                        </p>
                    </div>
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-3">Live Progress Tracking</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            See exactly what the agent is doing at any moment. CuvaBot provides a live status feed—"Extracting text," "Reasoning," "Generating draft"—directly in the chat bubble.
                        </p>
                    </div>
                </div>

                <div className="p-8 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                    <h3 className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Execution Lifecycle</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="p-4 border border-slate-200 dark:border-slate-700 w-full text-center text-[12px] font-bold bg-white dark:bg-slate-900">1. IDENTIFY INTENT</div>
                        <div className="hidden md:block text-slate-300">→</div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 w-full text-center text-[12px] font-bold bg-white dark:bg-slate-900">2. RUN AGENTS</div>
                        <div className="hidden md:block text-slate-300">→</div>
                        <div className="p-4 border border-slate-200 dark:border-slate-700 w-full text-center text-[12px] font-bold bg-white dark:bg-slate-900">3. DELIVER OUTPUT</div>
                    </div>
                </div>
            </div>
        </>
    ),
};

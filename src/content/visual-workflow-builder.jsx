import React from 'react';
import { Icons } from '../lib/icons';

const VisualWorkflowBuilder = {
    heading: "Visual Workflow Builder",
    body: (
        <>
            <p>
                The <strong>Visual Workflow Builder</strong> is the graphical "Canvas" where the magic of orchestration happens. It allows you to drag, drop, and connect different nodes to define exactly how data flows and how agents collaborate to reach a business outcome.
            </p>

            <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-10 my-10 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-tight">Low-Code / No-Code Orchestration</h3>
                <p className="text-slate-400 mb-8 relative z-10 text-[15px] leading-relaxed max-w-2xl">
                    Gone are the days of writing complex scripts to link APIs. The Canvas provides a structured yet flexible environment to link:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="font-bold text-blue-400 mb-2 text-[14px] uppercase tracking-wider">AI Agents</h4>
                        <p className="text-[13px] text-slate-400 leading-normal">Decision-making entities that process intent and handle tasks.</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="font-bold text-purple-400 mb-2 text-[14px] uppercase tracking-wider">External Tools</h4>
                        <p className="text-[13px] text-slate-400 leading-normal">APIs, databases, and enterprise software (CRM, ERP).</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="font-bold text-green-400 mb-2 text-[14px] uppercase tracking-wider">Human Gates</h4>
                        <p className="text-[13px] text-slate-400 leading-normal">Approval steps and review processes for sensitive tasks.</p>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Key Canvas Features</h3>

            <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl mr-5">
                        <Icons.Workflows className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Drag-and-Drop Nodes</h4>
                        <p className="text-[14px] text-gray-500 dark:text-gray-400">Assemble workflows by selecting from a library of Triggers and Agents.</p>
                    </div>
                </div>

                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl mr-5">
                        <Icons.Search className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Real-time Debugging</h4>
                        <p className="text-[14px] text-gray-500 dark:text-gray-400">Step through each node and inspect data flow directly on the canvas.</p>
                    </div>
                </div>

                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-orange-500/30 transition-colors">
                    <div className="p-3 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl mr-5">
                        <Icons.Templates className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Template Library</h4>
                        <p className="text-[14px] text-gray-500 dark:text-gray-400">Jumpstart development with pre-built patterns for common enterprise scenarios.</p>
                    </div>
                </div>
            </div>
        </>
    ),
};

export default VisualWorkflowBuilder;

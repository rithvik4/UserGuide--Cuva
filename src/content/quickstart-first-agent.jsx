import React from 'react';
import selectAgentImg from '../assets/docs/quickstart/select-agent-type.png';
import configAgentImg from '../assets/docs/quickstart/agent-configuration.png';
import connectToolsImg from '../assets/docs/quickstart/connect-tools.png';

export default {
    // heading: 'Quickstart: Build Your First Agent',
    body: (
        <>
            <p className="mb-8 text-gray-500 text-lg leading-relaxed dark:text-gray-400">
                Learn how to build a powerful AI Agent using the <strong>Cuva AI Agent Studio</strong>. This guide will walk you through selecting the right agent type, configuring the LLM, integration, and finally deploying your agent to production.
            </p>

            <div className="space-y-16">
                {/* Step 1: Choose Agent Type */}
                <div className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0 last:border-0">
                    <div className="hidden md:flex absolute -left-[17px] top-0 w-9 h-9 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 items-center justify-center font-bold rounded-sm text-sm z-10">1</div>



                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Select Your Agent Type</h3>
                    <div className="mb-6 flex justify-center">
                        <img src={selectAgentImg} alt="Select Agent Type Modal" className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-full h-auto" />
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors shadow-sm">
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            In the Workflow Canvas, click <strong>"Change Node"</strong> or add a new node to open the <strong>Select Category</strong> modal. Under the <strong>Agent</strong> tab, choose between:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-sm">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                    Custom Agent
                                </h4>
                                <p className="text-xs text-gray-500 ml-6">For deterministic, logic-based workflows.</p>
                            </div>

                            <div className="p-4 border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/10 rounded-sm">
                                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-1 flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    AI Agent
                                </h4>
                                <p className="text-xs text-blue-900/70 dark:text-blue-200/70 ml-6"><strong>Recommended:</strong> LLM-powered reasoning.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Configure the Agent */}
                <div className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0 last:border-0">
                    <div className="hidden md:flex absolute -left-[17px] top-0 w-9 h-9 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 items-center justify-center font-bold rounded-sm text-sm z-10">2</div>



                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Configure Agent Parameters</h3>
                    <div className="mb-6 flex justify-center">
                        <img src={configAgentImg} alt="Agent Configuration Panel" className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-full h-auto" />
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Fill in the core identity and behavioral settings in the configuration panel:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900 dark:text-gray-200">Name & Color</span>
                                <span className="text-gray-500">Identify your agent identity.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900 dark:text-gray-200">Select LLM</span>
                                <span className="text-gray-500">Choose model (e.g., Google Gemini).</span>
                            </div>
                            <div className="flex flex-col sm:col-span-2 border-t pt-4 dark:border-slate-700 mt-2">
                                <span className="font-bold text-gray-900 dark:text-gray-200 mb-1">System Message</span>
                                <span className="text-gray-500 font-mono text-xs bg-slate-50 dark:bg-slate-800 p-2 rounded">"You are a helpful assistant..."</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3: Integrate Connectors */}
                <div className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0 last:border-0">
                    <div className="hidden md:flex absolute -left-[17px] top-0 w-9 h-9 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 items-center justify-center font-bold rounded-sm text-sm z-10">3</div>



                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect Tools & Actions</h3>
                    <div className="mb-6 flex justify-center">
                        <img src={connectToolsImg} alt="Connect Tools Modal" className="rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-full h-auto" />
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Enable external capabilities by selecting tools from the <strong>Connectors</strong> tab.
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <div className="flex items-center gap-2 px-3 py-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div> WhatsApp
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div> Slack
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 border rounded bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div> Twilio
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4: Define Schema */}
                <div className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0 last:border-0">
                    <div className="hidden md:flex absolute -left-[17px] top-0 w-9 h-9 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 items-center justify-center font-bold rounded-sm text-sm z-10">4</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Define Input Schema</h3>

                    <div className="flex gap-4 p-4 border-l-4 border-blue-400 bg-slate-50 dark:bg-slate-800/50 text-sm text-gray-700 dark:text-gray-300">
                        <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <p>
                            Review the <strong>INPUT SCHEMA</strong> panel on the left. Ensure variables like <code>email_body</code> or <code>user_id</code> are correctly passed from previous nodes.
                        </p>
                    </div>
                </div>

                {/* Step 5: Test & Validate */}
                <div className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0 last:border-0">
                    <div className="hidden md:flex absolute -left-[17px] top-0 w-9 h-9 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 items-center justify-center font-bold rounded-sm text-sm z-10">5</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Test and Validate</h3>

                    <div className="bg-slate-900 text-slate-50 p-5 rounded-lg font-mono text-sm border border-slate-700 overflow-x-auto">
                        <div className="flex items-center gap-2 border-b border-slate-700 pb-2 mb-2 text-xs text-slate-400 uppercase tracking-wider">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Dry Run Simulation
                        </div>
                        <p className="opacity-80">// Input JSON</p>
                        <p>{"{"}</p>
                        <p className="pl-4">"query": "Reset password for user 123"</p>
                        <p>{"}"}</p>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        Use the <strong>Dry Run</strong> button to simulate execution.
                    </p>
                </div>

                {/* Step 6: Deploy & Monitor */}
                <div className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0 last:border-0">
                    <div className="hidden md:flex absolute -left-[17px] top-0 w-9 h-9 bg-white dark:bg-slate-900 border-2 border-blue-600 text-blue-600 items-center justify-center font-bold rounded-sm text-sm z-10">6</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Deploy and Monitor</h3>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 p-4 border border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800/30 rounded-lg flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-green-900 dark:text-green-400">Publish</h4>
                                <p className="text-xs text-green-700 dark:text-green-300">Make workflow live</p>
                            </div>
                        </div>

                        <div className="flex-1 p-4 border border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800/30 rounded-lg flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900 dark:text-blue-400">Dashboard</h4>
                                <p className="text-xs text-blue-700 dark:text-blue-300">View execution logs</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-center shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4">Ready to Build?</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                        Start creating your own intelligent agents and workflows today in the Cuva Agent Studio.
                    </p>
                    <a
                        href="https://appstudio.cuva.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition-all hover:scale-105"
                    >
                        Go to Agent Studio
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>
            </div>
        </>
    ),
};

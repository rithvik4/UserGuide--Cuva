import React from 'react';

export default {
    heading: 'Architecture Overview',
    body: (
        <>
            <>
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Cuva Ecosystem</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Cuva AI is not just a chatbot; it is a comprehensive <strong>Enterprise Agentic Orchestration Platform</strong>. Its architecture is engineered to solve the specific challenges of deploying AI in regulated industries: <strong>determinism, security, and traceability</strong>.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        At its heart, the platform uses a <strong>Multi-Agent System (MAS)</strong> architecture. Instead of relying on a single, general-purpose LLM to handle complex tasks, Cuva decomposes problems into smaller, specialized sub-tasks assigned to "Expert Agents." This mimics a human organizational structure, where a manager delegates work to specialists (e.g., a "Compliance Officer" or "Financial Analyst"). This approach reduces hallucinations and allows for granular permissions—an agent dealing with invoices cannot access HR records unless explicitly authorized.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Layer 1: User Interface */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">1</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">User Interface Layer</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                            The top layer provides the access points where humans interact with the AI.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-11">
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">CuvaBot</h4>
                                <p className="text-xs text-gray-500">The conversational chat interface for asking questions, triggering tasks, and getting real-time answers.</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">AI Agent Studio</h4>
                                <p className="text-xs text-gray-500">The visual builder where you design workflows, configure agents, and set up triggers.</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Knowledge Studio</h4>
                                <p className="text-xs text-gray-500">The control center for uploading documents, managing connectors, and viewing your data graph.</p>
                            </div>
                        </div>
                    </div>

                    {/* Layer 2: Agents */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">2</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">The Agent Workforce</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                            Beneath the UI lives a fleet of specialized agents. Unlike a generic chatbot, these are purpose-built "digital employees" trained for specific domains.
                        </p>
                        <div className="pl-11 flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">Wealth Management Agent</span>
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">KYC/AML Agent</span>
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">Financial Planner</span>
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">Risk Management</span>
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">Supply Chain Finance</span>
                            <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-100 dark:border-purple-800">Accounting Agent</span>
                        </div>
                    </div>

                    {/* Layer 3: Connectors */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-sm">3</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Connectivity Layer</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                            This layer bridges the AI to the outside world. It encompasses two main types of integrations:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-11">
                            <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                    App Connectors
                                </h4>
                                <p className="text-xs text-gray-500 mb-3">General business tools for communication and files.</p>
                                <div className="flex flex-wrap gap-2 text-[11px] text-gray-600 dark:text-gray-400">
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">HubSpot</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Asana</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Google Drive</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Slack</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Outlook</span>
                                </div>
                            </div>
                            <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Financial Connectors
                                </h4>
                                <p className="text-xs text-gray-500 mb-3">Specialized banking and fintech integrations.</p>
                                <div className="flex flex-wrap gap-2 text-[11px] text-gray-600 dark:text-gray-400">
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Stripe</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Plaid</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Salesforce</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">Mambu</span>
                                    <span className="bg-white dark:bg-slate-800 px-2 py-1 rounded border dark:border-slate-700">BlackRock Sales</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Layer 4: Enterprise Management */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center font-bold text-sm">4</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Enterprise Management Layer</h3>
                        </div>
                        <div className="pl-11 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                                <div className="text-xs font-bold text-gray-900 dark:text-white">Privacy & Security</div>
                            </div>
                            <div className="text-center p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                                <div className="text-xs font-bold text-gray-900 dark:text-white">Compliance</div>
                            </div>
                            <div className="text-center p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                                <div className="text-xs font-bold text-gray-900 dark:text-white">User Management</div>
                            </div>
                            <div className="text-center p-3 border border-slate-100 dark:border-slate-800 rounded-lg">
                                <div className="text-xs font-bold text-gray-900 dark:text-white">Billing</div>
                            </div>
                        </div>
                    </div>

                    {/* Layer 5: Agentic Core */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">5</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Agentic Core & Knowledge</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                            The foundation of the platform, housing the intelligent engines and data stores.
                        </p>
                        <div className="pl-11 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Knowledge Systems</h4>
                                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Knowledge Base</li>
                                    <li>• Knowledge Graph</li>
                                    <li>• RAG Engine</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">Agentic Core</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Orchestration across models:</p>
                                <div className="flex gap-2 opacity-70">
                                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
                                </div>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">AI Model Builder</h4>
                                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Adapter-based training</li>
                                    <li>• Enterprise datasets</li>
                                    <li>• Maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-slate-50 dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">How Data Flows Through the Architecture</h3>
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {/* Step 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-slate-200">User Interaction</div>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-xs">User sends a command (e.g., "Analyze risk for Client X") via <strong>CuvaBot</strong> (Layer 1).</div>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-indigo-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-slate-200">Orchestration</div>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-xs text-left">The <strong>Agentic Core</strong> (Layer 5) breaks this into tasks and assigns a <strong>Risk Management Agent</strong> (Layer 2).</div>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-orange-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-slate-200">Retrieval</div>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-xs">The Agent uses <strong>Financial Connectors</strong> (Layer 3) to pull live data from <em>BlackRock Aladdin</em> and internal docs from the <strong>Knowledge Base</strong>.</div>
                            </div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-slate-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                4
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-slate-200">Execution & Audit</div>
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-xs text-left">The <strong>Enterprise Layer</strong> (Layer 4) logs the access and verifies the user's permissions before returning the analysis.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    ),
};

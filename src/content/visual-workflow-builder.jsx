import React from 'react';
import { Icons } from '../lib/icons';

const VisualWorkflowBuilder = {
    // heading: "Visual Workflow Builder",
    body: (
        <>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                The <strong>Visual Workflow Builder</strong> is a specialized orchestration environment designed to chain LLM reasoning, data connectors, and custom logic into a cohesive automated agent. While many platforms utilize drag-and-drop, this interface emphasizes a <strong>Node-Click & Connection Model</strong> for maximum precision in building "agentic" flows.
            </p>

            <div className="mb-12 bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Architectural Canvas</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    This is not just a workspace; it is a limitless, intelligent environment designed for the <strong>Agentic Era</strong>. The Cuva Canvas offers an infinite grid where you define the cognitive architecture of your digital workforce. From simple data pipes to multi-modal reasoning chains, experience the precise, node-based control needed to build truly autonomous agents.
                </p>
                <a
                    href="https://appstudio.cuva.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
                >
                    Experience it at appstudio.cuva.ai
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
            </div>

            <div className="space-y-16">

                {/* Section 1: The Canvas Interface */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">1</span>
                        The Canvas Interface
                    </h3>
                    <div className="pl-11 space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">The Grid</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                The central gridded workspace acts as your development sandbox, providing a visual coordinate system for organizing complex, multi-branching workflows.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">Nodes</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                These are the primary building blocks. Each node represents a discrete functional unit, such as an AI reasoning step or a Gmail integration.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">Edges (The Data Pipeline)</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                The dotted lines do not just show "next steps"; they define the path through which <strong>variables and context</strong> are passed between nodes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Adding Logic (Interaction Model) */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">2</span>
                        Adding Logic Without Dragging
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                        In this interface, you build by interaction rather than dragging:
                    </p>
                    <div className="pl-11 space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Direct Addition</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">To add the next step, you click the <strong>Plus (+)</strong> icon located on the active connection line.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Search-First Selection</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Clicking (+) opens the <strong>Select Category</strong> menu, allowing you to quickly search for specific nodes—whether it's an "AI Agent" for reasoning or "Gmail" for execution.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: The Node Library */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">3</span>
                        The Node Library
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                        The platform organizes its tools into technical categories to streamline development:
                    </p>
                    <div className="pl-11 overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                            <thead>
                                <tr className="bg-slate-100 dark:bg-slate-900/50 text-gray-900 dark:text-white text-sm">
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Category</th>
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Component Examples</th>
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Technical Purpose</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-900/20 text-sm">
                                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                                    <td className="p-4 font-bold text-purple-600 dark:text-purple-400">Agent</td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">AI Agent, Custom Agent</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400 text-xs">Define instructions and model configurations (e.g., GPT-4o, Claude) to handle reasoning.</td>
                                </tr>
                                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                                    <td className="p-4 font-bold text-blue-600 dark:text-blue-400">Connectors</td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Gmail, Drive, Slack</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400 text-xs">Execute external API actions with pre-configured authentication.</td>
                                </tr>
                                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                                    <td className="p-4 font-bold text-orange-600 dark:text-orange-400">Custom Tool</td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Knowledge Base, API</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400 text-xs">
                                        <strong>Knowledge Base:</strong> Retrieve RAG-based context. <br />
                                        <strong>API:</strong> Make custom HTTP requests to external services.
                                    </td>
                                </tr>
                                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                                    <td className="p-4 font-bold text-green-600 dark:text-green-400">Flow Control</td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Filter, Wait, Human</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400 text-xs">
                                        <strong>Filter:</strong> Implement conditional if/else logic based on data values. <br />
                                        <strong>Human in the Loop:</strong> Pause for manual approval before sensitive actions.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-red-600 dark:text-red-400">Terminator</td>
                                    <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">Terminator</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400 text-xs">Formally ends the workflow and returns the final structured output to the user.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 4: Field Mapping & Data Integrity */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">4</span>
                        Field Mapping & Data Integrity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 pl-11">
                        When you connect two nodes, you must define the <strong>Variable Map</strong>.
                    </p>
                    <div className="pl-11 space-y-6">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm flex items-center gap-2">
                                <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                The Variable Map
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                This ensures the "body" of an email in Step 2 is correctly populated by the "summary" generated in Step 1.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Validation
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                If a step is <strong>"Not valid for field mapping,"</strong> it indicates that the preceding node's output data type (e.g., a file) is incompatible with the current node's expected input (e.g., text).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 5: Testing, Deployment & Monitoring */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">5</span>
                        Testing, Deployment & Monitoring
                    </h3>
                    <div className="pl-11 space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Drafts</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Workflows are automatically saved as drafts while you build.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Preview</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Use the Preview tool to simulate a run. You can monitor exactly which nodes are firing and identify where logic might be failing in real-time.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Deploy</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Once validated, click Deploy to move the agent from your private workspace into production.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Run History</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">View a detailed list of <strong>Workflow States</strong> (e.g., Queued, Success) to track performance over time.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Execution Logs</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Access real-time monitoring and granular node-level logs to analyze execution paths and debug specific actions.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    ),
};

export default VisualWorkflowBuilder;

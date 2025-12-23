import React from 'react';
import { Icons } from '../lib/icons';

const FlowControl = {
    // heading: "Flow Control: Managing Process Logic",
    body: (
        <>
            <p className="mb-12 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                In the Cuva AI Studio Workflow's', <strong>Flow Control</strong> nodes act as the "traffic directors" of your automation. They allow you to move beyond simple linear tasks by introducing conditional logic, timed delays, and manual oversight to ensure your agent operates with high precision and safety.
            </p>

            <div className="space-y-12">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Flow Control: Managing Agent Logic</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        Flow Control nodes are found in the Select Category sidebar and are used to manage how data moves through your canvas based on specific rules or human intervention.
                    </p>

                    {/* 1. Filter */}
                    <div className="mb-10 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs">1</span>
                            Filter (Conditional Logic)
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            The <strong>Filter</strong> node is the primary tool for creating branching paths within your agent’s workflow.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc ml-5">
                            <li><strong>How it Works:</strong> It evaluates a specific piece of data against a rule you define (e.g., "If Email Sentiment is Negative" or "If Total Amount &gt; $500").</li>
                            <li><strong>Why We Use It:</strong> To create "If/Else" scenarios. If the condition is met (True), the agent follows one path; if not (False), it follows another.</li>
                            <li><strong>Technical Use Case:</strong> Routing high-priority customer support tickets to a senior agent while sending a standard automated response to low-priority inquiries.</li>
                        </ul>
                    </div>

                    {/* 2. Human-in-the-loop */}
                    <div className="mb-10 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs">2</span>
                            Human-in-the-loop (HITL)
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            The <strong>Human-in-the-loop</strong> node introduces a mandatory manual checkpoint into an otherwise autonomous process.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc ml-5">
                            <li><strong>How it Works:</strong> When the workflow reaches this node, execution pauses. The agent generates a "Pending" task in the system for a human to review.</li>
                            <li><strong>Why We Use It:</strong> To ensure "Safety and Governance." It prevents the agent from taking a final, sensitive action (like sending a legal document or issuing a payment) without human approval.</li>
                            <li><strong>Technical Use Case:</strong> An AI agent drafts a complex technical response to a client, but a human expert must review and "Approve" or "Edit" the draft before it is sent.</li>
                        </ul>
                    </div>

                    {/* 3. Wait */}
                    <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs">3</span>
                            Wait (Timed Delay)
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            The <strong>Wait</strong> node allows you to introduce specific pauses in the execution of your workflow.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc ml-5">
                            <li><strong>How it Works:</strong> You configure the node to hold the process for a set amount of time (seconds, minutes, or hours).</li>
                            <li><strong>Why We Use It:</strong> To handle rate-limiting from external APIs, give users time to complete a separate task, or follow up after a delay.</li>
                            <li><strong>Technical Use Case:</strong> After sending an initial email, the agent "Waits" 24 hours to check if a response was received before proceeding to a follow-up step.</li>
                        </ul>
                    </div>
                </div>

                {/* Best Practices Table */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Best Practices for Using Flow Control</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                            <thead>
                                <tr className="bg-slate-100 dark:bg-slate-900/50 text-gray-900 dark:text-white text-sm">
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Feature</th>
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Filter</th>
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Human-in-the-loop</th>
                                    <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Wait</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-900/20 text-sm">
                                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                                    <td className="p-4 font-bold text-gray-900 dark:text-white">Primary Goal</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Decision Making</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Quality Control</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Timing & Pacing</td>
                                </tr>
                                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                                    <td className="p-4 font-bold text-gray-900 dark:text-white">Logic Type</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Automated Branching</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Manual Approval</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Sequential Pause</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-900 dark:text-white">Terminator Req.</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Every branch needs a Terminator</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Approval leads to next node</td>
                                    <td className="p-4 text-gray-600 dark:text-gray-400">Continues after timer</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Field Mapping in Flow Control */}
                <div className="bg-slate-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Field Mapping in Flow Control</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">When using these nodes, ensure your Field Mapping is accurate:</p>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 mt-1.5 bg-gray-400 rounded-full shrink-0"></span>
                            <span>For <strong>Filters</strong>, map the "Source Variable" you want to check (e.g., <code>[[AI_Agent.Classification]]</code>).</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="w-1.5 h-1.5 mt-1.5 bg-gray-400 rounded-full shrink-0"></span>
                            <span>For <strong>HITL</strong>, map the data you want the human to see (e.g., <code>[[Document.Summary]]</code>).</span>
                        </li>
                        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 rounded-lg">
                            <strong className="block text-yellow-800 dark:text-yellow-500 mb-1 text-xs uppercase tracking-wide">Validation Check</strong>
                            <p className="text-yellow-700 dark:text-yellow-400 text-xs">If a Flow Control node shows "Not valid for field mapping," check that it is receiving a clear data input from the node immediately preceding it on the canvas.</p>
                        </div>
                    </ul>
                </div>

            </div>
        </>
    ),
};

export default FlowControl;

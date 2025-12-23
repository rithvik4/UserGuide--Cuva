import React from 'react';

export default {
    heading: 'Build Your First Agent',
    body: (
        <>
            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                To create a Gmail Send Agent using the Cuva AI Agent Studio, initialize a new agent from scratch and configure an Input Form trigger with distinct fields for the recipient's email address, subject line, and message body. Next, insert an Action step, selecting the Send Gmail message option from the Google datasource, and map your form variables to the corresponding fields within the action configuration. Finally, validate the integration by testing the workflow in the Preview pane to ensure successful delivery before Publishing the agent for active use.
            </p>

            <p className="mb-8 text-gray-500 text-lg leading-relaxed dark:text-gray-400">
                Based on the interface shown in your screenshots, here is a professional guide for creating an agent. In Cuva AI, <strong>Connectors</strong> (like Gmail, Outlook, or GitHub) are the <strong>Tools</strong> your agent uses to take action.
            </p>

            <div className="space-y-12">

                {/* Section 1: Agent Configuration */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Agent Configuration</h3>
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            In the <strong>Agent Configuration</strong> panel, you define the identity and "brain" of your agent.
                        </p>
                        <ul className="list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                            <li><strong>Name:</strong> Give your agent a specific name (e.g., <code>Gmail Agent</code>).</li>
                            <li><strong>Select LLM:</strong> Choose the AI model that will power the agent (e.g., <strong>Gemini</strong>, <strong>OpenAI</strong>, or <strong>Claude</strong>).</li>
                            <li><strong>Temperature:</strong> This controls creativity. Use <strong>0.7</strong> for a balance between focused and natural responses.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: System Message */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. System Message Prompt</h3>
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            The <strong>System Message </strong> is the most important part. It tells the agent exactly what its job is and how to behave.
                        </p>

                        <div className="bg-slate-50 dark:bg-slate-800/50 border-l-4 border-blue-500 p-4 rounded-r-md">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Example System Prompt:</h4>
                            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                                <p><strong>Role:</strong> You are the Cuva Gmail Dispatcher.</p>
                                <p><strong>Task:</strong> Your objective is to send specific, pre-configured email messages to designated recipients via Gmail whenever a specific action trigger is received (e.g., form submission or API call).</p>
                                <p><strong>Rules:</strong></p>
                                <ol className="list-decimal ml-5 space-y-1">
                                    <li>Always use a professional and formal tone.</li>
                                    <li>Ensure all required fields (Recipient, Subject, Body) are checked before sending.</li>
                                    <li>If a send fails, log the error clearly.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Adding Tools */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Adding Tools (Connectors)</h3>
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            In Cuva AI, <strong>Tools are Connectors</strong>. These allow the agent to talk to other apps.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">1</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Step:</strong> Click on <strong>+ Add tools</strong> in the configuration panel.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">2</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Select Category:</strong> A window will appear showing available <strong>Connectors</strong>.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">3</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Choose Action:</strong> You can pick from apps like <strong>Gmail</strong> (to send mail), <strong>Outlook</strong>, <strong>GitHub</strong>, or <strong>Microsoft Teams</strong>.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">4</span>
                                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Confirmation:</strong> Once selected, the tool (e.g., <code>send mail</code>) will appear in your agent's tool list.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Summary Checklist */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Summary Checklist</h3>
                    <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                            <thead className="bg-slate-50 dark:bg-slate-900/50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Agent Name</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Identifies the agent in your dashboard.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">System Message</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The logic and "rules" the agent must follow.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Tools/Connectors</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">External apps the agent is allowed to use.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">LLM</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">The AI engine (Gemini, OpenAI, Claude) that processes the data.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Common Questions */}
                <section>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Common Questions</h3>
                    <div className="grid gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Q: Can I add more than one tool?</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Yes. You can add multiple connectors (e.g., Gmail <em>and</em> Outlook <em>and</em> Slack) if you want your agent to cross-post information between apps.</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Q: How do I change the instructions later?</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Simply go back to <strong>Manage Workflows</strong>, select your agent, and update the <strong>System Message</strong> box. Click <strong>Save</strong> to apply the changes.</p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    ),
};

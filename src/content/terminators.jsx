import React from 'react';
import { Icons } from '../lib/icons';

const Terminators = {
    heading: "Terminators: Closing the Loop",
    body: (
        <>
            <p className="mb-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                In a Cuva AI agentic workflow, the <strong>Terminator</strong> serves as the definitive exit point of your automation. It is the final "stop" on the visual canvas that signals the successful completion of a task and determines what information is returned to the user or system.
            </p>

            <div className="space-y-12">
                {/* What is a Terminator? */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is a Terminator?</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        The Terminator is a specialized node that closes the loop of an agent's logic. While triggers start the engine, terminators shut it down gracefully by packaging the final results of all preceding steps (AI reasoning, data lookups, or tool executions) into a structured format.
                    </p>
                </div>

                {/* Why We Use Terminators */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why We Use Terminators</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Defining Success</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    It marks the end of a specific logical branch, ensuring the agent doesn't continue running in an infinite loop.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Data Structuring</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    It allows developers to define a <strong>Response Schema</strong>, ensuring that the output is clean and ready for consumption by other apps or human users.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Multi-Path Completion</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    In workflows with complex branching (If/Else logic), you may have multiple Terminators—one for each possible outcome (e.g., an "Approval" path and a "Rejection" path).
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* How to Use the Terminator in Cuva */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">How to Use the Terminator in Cuva</h3>

                <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                    {/* Step 1 */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-md">1. Adding the Node</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">To add a Terminator to your canvas:</p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
                            <li>Click the <strong>Plus (+) icon</strong> on the connection line extending from your last action node.</li>
                            <li>In the Select Category sidebar, navigate to the bottom and select the <strong>Terminator</strong> category.</li>
                            <li>Click on the Terminator node to place it on the canvas.</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-md">2. Configuring the Exit Logic</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">When you click on the Terminator node, a configuration panel appears on the right:</p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
                            <li><strong>Final Instructions:</strong> In the "Ends the workflow here" text field, you can provide a description of what this specific termination point represents (e.g., "Analyze and validate the latest records by interval").</li>
                            <li><strong>Output Summary:</strong> Use this area to describe the final state of the data being returned.</li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-md">3. Data Field Mapping</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">The Terminator acts as the final "bucket" for your data. You must map the variables you want to deliver to the end-user:</p>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
                            <li><strong>Linking Results:</strong> Map the output from previous nodes (like an AI Agent's summary or a Database lookup) into the Terminator.</li>
                            <li><strong>Validation Check:</strong> If you see "Not valid for field mapping," it means the Terminator has not yet been correctly linked to a data source from a preceding node. Ensure there is a solid connection line (edge) leading into the Terminator from a node that produces output.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Best Practices */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Best Practices for Clean Workflows</h3>
                <ul className="space-y-5">
                    <li className="flex gap-4">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <div>
                            <strong className="block text-gray-900 dark:text-white mb-1 text-sm">Explicit Labeling</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">If your workflow has multiple exit points, use the instruction field in each Terminator to clearly label the outcome (e.g., "Path: Success" vs "Path: Error").</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <div>
                            <strong className="block text-gray-900 dark:text-white mb-1 text-sm">Terminate After Every Branch</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Ensure that no logical path is left "hanging." Every branch created by a Filter node must eventually lead to a Terminator.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                        <div>
                            <strong className="block text-gray-900 dark:text-white mb-1 text-sm">Review Before Deployment</strong>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Use the Preview tool to ensure the Terminator is returning the expected data payload before you click "Publish."</p>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    ),
};

export default Terminators;

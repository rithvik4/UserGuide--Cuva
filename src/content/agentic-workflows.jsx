import React from 'react';

export default {
  heading: 'Agentic Workflows',
  body: (
    <>
      <p className="text-gray-700 dark:text-gray-200">
        Agentic Workflows are the dynamic operational framework of the Cuva AI platform. Unlike traditional, linear automation, agentic workflows enable AI agents to orchestrate complex processes by making autonomous decisions, adapting to real-time data, and collaborating to reach a specific financial goal.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">What are Agentic Workflows?</h3>
      <p className="text-gray-700 dark:text-gray-200">
        An agentic workflow is a self-correcting process where intelligence is embedded into every step of execution. These workflows are defined by:
      </p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Autonomous Decision-Making:</strong> Agents analyze the context of a task—such as buyer-supplier relationships or contract terms—to determine the best next action.</li>
        <li><strong>Multi-Agent Collaboration:</strong> Different specialized agents (e.g., KYC, AML, and Risk agents) work together, passing data and results between nodes to complete a high-level objective.</li>
        <li><strong>Reasoning and Adaptability:</strong> The workflow can branch or iterate based on results, allowing agents to solve open-ended tasks that rigid, traditional scripts cannot handle.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">How Cuva AI Uses Agentic Workflows</h3>
      <p className="text-gray-700 dark:text-gray-200">Cuva AI leverages these workflows to transform manual financial operations into high-speed, AI-native processes.</p>

      <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">1. Visual Orchestration in the AI Agent Studio</h4>
      <p className="text-gray-700 dark:text-gray-200">Technical users design workflows using a visual interface that eliminates the need for complex coding:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Trigger Agents:</strong> Define what initiates the flow, such as a new invoice upload, an API call, a schedule, or a manual command via CuvaBot.</li>
        <li><strong>Logic Configuration:</strong> Users assemble agent logic tailored to specific needs, such as defining risk thresholds or routing rules.</li>
        <li><strong>Terminator Agents:</strong> These agents finalize the workflow, ensuring the task is closed, systems are updated, and the final outcome is delivered.</li>
      </ul>

      <h4 className="text-md font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">2. Specialized Financial Applications</h4>
      <p className="text-gray-700 dark:text-gray-200">Agentic workflows drive the core functions of the CuvaFin platform:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Supply Chain Finance:</strong> Orchestrating 3-way matching between purchase orders, invoices, and delivery records to validate financing requests.</li>
        <li><strong>Wealth Management:</strong> Automating personalized client reporting, portfolio rebalancing, and investment idea generation.</li>
        <li><strong>Compliance &amp; Risk:</strong> Triggering automated workflows for real-time KYC/AML validation and risk scoring during onboarding.</li>
      </ul>

      <h4 className="text-md font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">3. Agentic ETL and Intelligence</h4>
      <p className="text-gray-700 dark:text-gray-200">Workflows are used to build and maintain the platform's "memory":</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Knowledge Ingestion:</strong> Agents perform "Agentic ETL" (Extract, Transform, Load) to retrieve and structure raw data into a usable Knowledge Base.</li>
        <li><strong>Contextual Reasoning:</strong> Workflows link data into Knowledge Graphs, allowing agents to understand complex financial relationships during execution.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Business Impact</h3>
      <p className="text-gray-700 dark:text-gray-200">By shifting from manual processes to agentic workflows, financial institutions achieve measurable operational efficiency:</p>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Metric</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Business Outcome</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">40% Reduction</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Decrease in manual workload as agents handle routine queries and tasks.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">2x to 3x Faster</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Accelerated client onboarding through automated data collection and setup.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">50% Faster</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Compliance processing via real-time alerts and automated regulatory checks.</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">2.5x Increase</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Improved client engagement through automated intake and conversational interfaces.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

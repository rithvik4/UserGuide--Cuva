import React from 'react';

export default {
  heading: 'Agentic Workflows',
  body: (
    <>
      <div className="rounded-lg bg-gray-50 dark:bg-gray-800 border p-4 mb-4">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300">At a glance</div>
        <div className="mt-2 text-gray-700 dark:text-gray-200">
          Agentic Workflows are the dynamic operational framework of the Cuva AI platform — not linear automation, but cooperative, adaptive agents that orchestrate complex processes, make autonomous decisions, and collaborate to reach financial goals.
        </div>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">Agentic Workflows — orchestration, autonomy, collaboration</div>
          <div className="mt-2 text-gray-600 dark:text-gray-300">Think of workflows as intelligent playbooks: triggers start a flow, agents decide and collaborate at nodes, and terminators close the loop — with auditable decisions and graceful fallbacks.</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded">Observable</span>
            <span className="text-xs font-medium px-2 py-1 bg-yellow-50 text-yellow-800 rounded">Auditable</span>
            <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded">Resilient</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">What are Agentic Workflows?</h3>
      <p className="text-gray-700 dark:text-gray-200">
        An agentic workflow is a self-correcting process where intelligence is embedded into every step of execution. In practice, these workflows are defined by core capabilities:
      </p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Autonomous Decision-Making:</strong> Agents analyze the context of a task — such as buyer-supplier relationships or contract terms — to determine the best next action.</li>
        <li><strong>Multi-Agent Collaboration:</strong> Specialized agents (e.g., KYC, AML, Risk) work in concert, passing data and results between nodes to achieve a high-level objective.</li>
        <li><strong>Reasoning and Adaptability:</strong> Workflows branch or iterate based on outcomes, enabling agents to solve open-ended tasks that rigid scripts cannot handle.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">How Cuva AI Uses Agentic Workflows</h3>
      <p className="text-gray-700 dark:text-gray-200">Cuva AI leverages these workflows to transform manual financial operations into high-speed, AI-native processes.</p>

      <div className="mt-4 grid md:grid-cols-4 gap-3">
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Trigger</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Events, uploads, APIs, user commands</div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Assess</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Agents evaluate context and risk</div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Collaborate</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Specialized agents exchange facts</div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Resolve</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Terminate, update systems, report</div>
        </div>
      </div>

      <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">1. Visual Orchestration in the AI Agent Studio</h4>
      <p className="text-gray-700 dark:text-gray-200">Technical users design workflows in a visual studio — drag, connect, and configure rather than write low-level code:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Trigger Agents:</strong> Define what initiates the flow — a new invoice upload, an API call, a schedule, or a manual CuvaBot command.</li>
        <li><strong>Logic Configuration:</strong> Assemble agent logic tailored to needs, from risk thresholds to routing rules.</li>
        <li><strong>Terminator Agents:</strong> Finalize the workflow so tasks close cleanly, systems update, and outcomes deliver.
        </li>
      </ul>

      <h4 className="text-md font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">2. Specialized Financial Applications</h4>
      <p className="text-gray-700 dark:text-gray-200">Agentic workflows power core CuvaFin capabilities across finance functions:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Supply Chain Finance:</strong> Orchestrating 3-way matching between purchase orders, invoices, and delivery records to validate financing requests.</li>
        <li><strong>Wealth Management:</strong> Automating personalized client reporting, portfolio rebalancing, and investment idea generation.</li>
        <li><strong>Compliance &amp; Risk:</strong> Triggering automated workflows for real-time KYC/AML validation and risk scoring during onboarding.</li>
      </ul>

      <h4 className="text-md font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">3. Agentic ETL and Intelligence</h4>
      <p className="text-gray-700 dark:text-gray-200">Workflows build and maintain the platform's operational "memory":</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Knowledge Ingestion:</strong> Agents perform "Agentic ETL" (Extract, Transform, Load) to retrieve and structure raw data into a usable Knowledge Base.</li>
        <li><strong>Contextual Reasoning:</strong> Workflows link data into Knowledge Graphs, allowing agents to understand complex financial relationships during execution.</li>
      </ul>

      <div className="mt-6 p-4 border rounded-md bg-white dark:bg-gray-900">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Quick scenario — automated invoice remediation</div>
        <div className="mt-2 text-gray-700 dark:text-gray-200">A supplier invoice fails 3-way match. Workflow triggers: KYC agent verifies supplier, Data agent extracts invoice fields, Risk agent scores the discrepancy, and a Terminator agent either approves a payment hold or routes to a human reviewer with context and recommended actions.</div>
        <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">Sample playbook prompt (simplified):</div>
        <pre className="mt-2 bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-gray-800 dark:text-gray-100 overflow-x-auto whitespace-pre-wrap break-words">If invoice mismatch &gt; 10% then: run DataExtraction -> run SupplierVerify -> compute RiskScore -> if RiskScore &lt; 0.3 auto-resolve else escalate to human.</pre>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Business Impact</h3>
      <p className="text-gray-700 dark:text-gray-200">Shifting from manual processes to agentic workflows delivers measurable operational gains and predictable outcomes:</p>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border rounded-md overflow-hidden">
          <thead className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Metric</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Business Outcome</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">40% Reduction</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Decrease in manual workload as agents handle routine queries and tasks.</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">2x to 3x Faster</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Accelerated client onboarding through automated data collection and setup.</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">50% Faster</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Compliance processing via real-time alerts and automated regulatory checks.</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">2.5x Increase</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Improved client engagement through automated intake and conversational interfaces.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

import React from 'react';

export default {
  heading: 'Connectors',
  body: (
    <>
      <div className="rounded-lg bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border p-5 mb-6 flex items-start gap-4">
        
        <div>
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Connectors — the platform's adapters</div>
          <div className="mt-2 text-gray-700 dark:text-gray-200">Connectors are pre-configured modules that translate third-party data models and API protocols into a standardized format the AI can understand — enabling reliable, secure integration with external systems.</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs font-medium px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Real-time</span>
            <span className="text-xs font-medium px-2 py-1 bg-green-50 text-green-700 rounded">Permission-aware</span>
            <span className="text-xs font-medium px-2 py-1 bg-yellow-50 text-yellow-700 rounded">Unified</span>
          </div>
        </div>
      </div>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Tailor-Made Integration:</strong> Each connector is purpose-built for a specific app (e.g., Salesforce, SharePoint) to ensure optimized data exchange.</li>
        <li><strong>Permission-Aware:</strong> They respect your organization's existing security protocols, ensuring agents only access data the user is authorized to see.</li>
        <li><strong>Unified Access:</strong> They consolidate fragmented data into a single "Digital Handshake," allowing agents to focus on reasoning rather than managing complex API calls.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">How We Use Connectors in Cuva AI</h3>
      <p className="text-gray-700 dark:text-gray-200">Connectors are the "hands and eyes" of your AI agents — they enable data acquisition, live retrieval, and action across systems.</p>

      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Agentic ETL</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Agents use connectors to crawl enterprise sources (SharePoint, core banking) to extract, clean, and load data into Knowledge Bases.</div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Visual Workflow Nodes</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Connectors appear as drag-and-drop nodes in the AI studio (Trigger Nodes, Action Nodes) for low-code orchestration.</div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Real-Time Retrieval (RAG)</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">When CuvaBot is asked a question, connectors fetch live data so responses are grounded in current facts.</div>
        </div>
        <div className="p-3 bg-white dark:bg-gray-900 border rounded-md">
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Task Execution</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Agents use connectors to move from chat to action — e.g., process invoices or escalate tickets directly in source systems.</div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Available Connectors</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border rounded-md overflow-hidden">
          <thead className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Category</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Available Connectors</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">CRM</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Salesforce, HubSpot, Pipedrive</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Collaboration</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Slack, Microsoft Teams, Asana</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Productivity</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Microsoft Word, Excel, PowerPoint, Google Sheets</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">File Storage</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">OneDrive, Google Drive, SharePoint, Dropbox, FTP</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">E-mail</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Gmail, Outlook, Mailchimp</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Communication</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Zoom, WhatsApp, Webex</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Financial CRM</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">WealthBox, Salesforce, AdvyZon, Advisor Engine</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">KYC / AML</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">LexisNexis, Alloy, Onfido, Jumio, Socure</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Core Banking</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">FIS core banking, FiServ DNA, FiServ Signature, Mambu</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Wealth Management</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">BlackRock Aladdin, SimCorp Dimension, Orion Advisor</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Payments</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">PayPal, Stripe, MasterCard, Visa API</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

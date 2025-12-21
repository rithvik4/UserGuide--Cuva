import React from 'react';

export default {
  heading: 'Connectors',
  body: (
    <>
      <p className="text-gray-700 dark:text-gray-200">
        Connectors are pre-configured software modules designed to translate the unique data models and API protocols of third-party applications into a standardized format the AI can understand.
      </p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Tailor-Made Integration:</strong> Each connector is purpose-built for a specific app (e.g., Salesforce, SharePoint) to ensure optimized data exchange.</li>
        <li><strong>Permission-Aware:</strong> They respect your organization's existing security protocols, ensuring agents only access data the user is authorized to see.</li>
        <li><strong>Unified Access:</strong> They consolidate fragmented data into a single "Digital Handshake," allowing agents to focus on reasoning rather than managing complex API calls.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">How We Use Connectors in Cuva AI</h3>
      <p className="text-gray-700 dark:text-gray-200">Connectors serve as the "hands and eyes" of your AI agents throughout their operational lifecycle:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li><strong>Agentic ETL (Data Building):</strong> Agents use connectors to automatically "crawl" enterprise sources like SharePoint or core banking databases. They extract, clean, and load this raw data into your Knowledge Base.</li>
        <li><strong>Visual Workflow Nodes:</strong> In the AI agent studio, connectors appear as drag-and-drop nodes. A Trigger Node might start an agent when a new email arrives in Outlook, while an Action Node might update a record in a CRM.</li>
        <li><strong>Real-Time Retrieval (RAG):</strong> When you ask CuvaBot a question, connectors fetch live data from connected systems to ensure the answer is grounded in the most current facts.</li>
        <li><strong>Task Execution:</strong> Agents use connectors to move beyond simple chat to active work, such as processing an invoice or escalating a support ticket directly in the source system.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Available Connectors</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Category</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Available Connectors</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">CRM</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Salesforce, HubSpot, Pipedrive</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Collaboration</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Slack, Microsoft Teams, Asana</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Productivity</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Microsoft Word, Excel, PowerPoint, Google Sheets</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">File Storage</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">OneDrive, Google Drive, SharePoint, Dropbox, FTP</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">E-mail</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Gmail, Outlook, Mailchimp</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Communication</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">Zoom, WhatsApp, Webex</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Financial CRM</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">WealthBox, Salesforce, AdvyZon, Advisor Engine</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">KYC / AML</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">LexisNexis, Alloy, Onfido, Jumio, Socure</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Core Banking</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">FIS core banking, FiServ DNA, FiServ Signature, Mambu</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Wealth Management</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">BlackRock Aladdin, SimCorp Dimension, Orion Advisor</td>
            </tr>
            <tr>
              <td className="px-4 py-4 font-semibold text-gray-900 dark:text-gray-100">Payments</td>
              <td className="px-4 py-4 text-gray-700 dark:text-gray-200">PayPal, Stripe, MasterCard, Visa API</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

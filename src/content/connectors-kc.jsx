import React from 'react';

export default {
  heading: 'Connectors: Key Concepts',
  body: (
    <>
      <p>
        Connectors are pre-configured software modules designed to translate the unique data models and API protocols of third-party applications into a standardized format the AI can understand.
      </p>
      <ul className="space-y-4 my-8">
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Tailor-Made Integration:</strong> Purpose-built for specific apps (e.g., Salesforce, SharePoint) to ensure optimized data exchange.
          </div>
        </li>
        <li className="flex items-start gap-3">
          <div className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
          <div className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Permission-Aware:</strong> Respect organization-level security protocols, ensuring authorized data access only.
          </div>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-6 tracking-tight">How We Use Connectors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Agentic ETL</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Agents "crawl" enterprise sources to extract, clean, and load data into your Knowledge Base.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-purple-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Visual Workflow Nodes</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Drag-and-drop nodes in the AI agent studio to trigger flows (e.g., on new email) or execute actions.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-green-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Real-Time Retrieval</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Fetch live data from connected systems to ensure agentic responses are grounded in current facts.</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative group hover:border-orange-500/30 transition-colors">
          <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2">Task Execution</h4>
          <p className="text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">Agents move beyond chat to active work, like processing an invoice directly in the source system.</p>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Available Connectors</h3>
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm mb-12">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-900/50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Category</th>
              <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Available Connectors</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900/20 divide-y divide-slate-200 dark:divide-slate-800">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">CRM</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Salesforce, HubSpot, Pipedrive</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Collaboration</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Slack, Microsoft Teams, Asana</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Productivity</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">Microsoft Word, Excel, PowerPoint, Google Sheets</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">File Storage</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">OneDrive, Google Drive, SharePoint, Dropbox, FTP</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-[14px] font-bold text-gray-900 dark:text-white">Finance</td>
              <td className="px-6 py-4 text-[13px] text-gray-500 dark:text-gray-400">PayPal, Stripe, Plaid, WealthBox, LexisNexis, Mambu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
};

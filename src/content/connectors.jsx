import React, { useState } from 'react';
import { cn } from '../lib/utils';
import AsanaImg from '../assets/Asana.png';
import ConfluenceImg from '../assets/Confluence.png';
import ExcelImg from '../assets/Excel.png';
import GoogleSheetsImg from '../assets/Google_Sheets.png';
import HubSpotImg from '../assets/HubSpot.png';
import JiraImg from '../assets/Jira.png';
import PipedriveImg from '../assets/Pipedrive.png';
import SalesforceImg from '../assets/Salesforce.png';
import WordImg from '../assets/Word.png';

function ConnectorsPage() {
  const [typeTab, setTypeTab] = useState('app');

  const appGroups = [
    { category: 'CRM', apps: ['Salesforce', 'HubSpot', 'Pipedrive'] },
    { category: 'Collaboration', apps: ['Jira', 'Confluence', 'Asana'] },
    { category: 'Productivity', apps: ['Microsoft Word', 'Excel', 'PowerPoint', 'Google Sheets'] },
    { category: 'File Storage', apps: ['OneDrive', 'Google Drive', 'SharePoint', 'Dropbox', 'FTP'] },
    { category: 'E-mail', apps: ['Gmail', 'Outlook', 'Mailchimp'] },
    { category: 'Communication', apps: ['Zoom', 'WhatsApp', 'Webex'] },
  ];

  const financialGroups = [
    { category: 'Payments', apps: ['PayPal', 'Stripe', 'MasterCard', 'Visa API'] },
    { category: 'Financial CRM', apps: ['WealthBox', 'Salesforce', 'AdvyZon', 'Advisor Engine'] },
    { category: 'Open Banking', apps: ['Plaid', 'Yodlee'] },
    { category: 'KYC / AML', apps: ['LexisNexis', 'Alloy', 'Onfido', 'Jumio', 'Socure'] },
    { category: 'Core Banking', apps: ['FIS core banking', 'FiServ DNA', 'FiServ Signature', 'Mambu'] },
    { category: 'Wealth Management', apps: ['BlackRock Aladdin', 'SimCorp Dimension', 'Orion Advisor'] },
  ];

  const customGroups = [
    { category: 'Tooling', apps: ['Knowledge Base', 'API', 'Execute Workflow'] },
  ];

  const connectorIcons = {
    Asana: AsanaImg,
    Confluence: ConfluenceImg,
    Excel: ExcelImg,
    'Google Sheets': GoogleSheetsImg,
    HubSpot: HubSpotImg,
    Jira: JiraImg,
    Pipedrive: PipedriveImg,
    Salesforce: SalesforceImg,
    'Microsoft Word': WordImg,
  };

  const getActiveGroups = () => {
    switch (typeTab) {
      case 'financial': return financialGroups;
      case 'custom': return customGroups;
      default: return appGroups;
    }
  };

  return (
    <div className="space-y-10">

      <div>
        <p>
          Cuva Connectors are digital bridges that allow your AI agent to "talk" to other software and move information safely between them. They work by either "pulling" data from a starting point (the <strong>Source</strong>) or "pushing" it into a final home (the <strong>Destination</strong>).
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Agents vs. Connectors vs. Custom Tools</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Understanding the distinction between these three core components is crucial for architecting effective workflows.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="mt-1 w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Agents <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest ml-2">The "Thinkers"</span></h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Autonomous decision makers that plan multi-step paths, maintain context, and adapt to ambiguous inputs.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Connectors <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest ml-2">The "Integrators"</span></h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Deterministic bridges that securely link AI to SaaS platforms for specific actions (e.g., "Add Row", "Send Email") and handle authentication.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1 w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Custom Tools <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest ml-2">The "Builders"</span></h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Technical utilities for executing raw code, API calls, or DB queries to extend capabilities beyond pre-built connectors.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Ecosystem Directory</h3>

        <div className="bg-slate-50 dark:bg-slate-900/40 p-1 rounded-xl w-fit flex gap-1 mb-8 overflow-x-auto">
          <button
            onClick={() => setTypeTab('app')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap",
              typeTab === 'app'
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            App Connectors
          </button>
          <button
            onClick={() => setTypeTab('financial')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap",
              typeTab === 'financial'
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            Financial Connectors
          </button>
          <button
            onClick={() => setTypeTab('custom')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap",
              typeTab === 'custom'
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            Custom Tools
          </button>
        </div>

        <div className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest">Connector Name</th>
                <th scope="col" className="px-6 py-4 text-left text-[11px] font-bold text-slate-500 uppercase tracking-widest hidden md:table-cell">Links</th>
                <th scope="col" className="px-6 py-4 text-center text-[11px] font-bold text-slate-500 uppercase tracking-widest">Self-Managed</th>
                <th scope="col" className="px-6 py-4 text-center text-[11px] font-bold text-slate-500 uppercase tracking-widest">Cloud</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/20 divide-y divide-slate-200 dark:divide-slate-800">
              {getActiveGroups().flatMap(g => g.apps).map((a, i) => (
                <tr key={`${typeTab}-${i}`} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                        {connectorIcons[a] ? (
                          <img src={connectorIcons[a]} alt={a} className="w-6 h-6 object-contain" />
                        ) : (
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{a.split(' ').map(s => s[0]).slice(0, 2).join('')}</span>
                        )}
                      </div>
                      <span className="text-[16px] font-bold text-gray-900 dark:text-white">{a}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[15px] text-slate-500 dark:text-slate-400 hidden md:table-cell">-</td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-600 dark:text-green-500">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-600 dark:text-green-500">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default {
  heading: 'Connectors',
  body: <ConnectorsPage />,
};

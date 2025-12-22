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

  return (
    <div className="space-y-10">
      <div>
        <p>
          Cuva Connectors are digital bridges that allow your AI agent to "talk" to other software and move information safely between them. They work by either "pulling" data from a starting point (the <strong>Source</strong>) or "pushing" it into a final home (the <strong>Destination</strong>).
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Ecosystem Directory</h3>

        <div className="bg-slate-50 dark:bg-slate-900/40 p-1 rounded-xl w-fit flex gap-1 mb-8">
          <button
            onClick={() => setTypeTab('app')}
            className={cn(
              "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200",
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
              "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200",
              typeTab === 'financial'
                ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
            )}
          >
            Financial Connectors
          </button>
        </div>

        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
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
              {(typeTab === 'app' ? appGroups : financialGroups).flatMap(g => g.apps).map((a, i) => (
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
                      <span className="text-[14px] font-bold text-gray-900 dark:text-white">{a}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-500 dark:text-slate-400 hidden md:table-cell">-</td>
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

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
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Welcome to connectors hub</h2>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          In simple terms, <strong>Cuva Connectors</strong> are digital bridges that allow your AI agent to "talk" to other software and move information safely between them. They work by either "pulling" data from a starting point (the <strong>Source</strong>) or "pushing" it into a final home (the <strong>Destination</strong>). Think of them as translators that take information from different places—like an email, teams, outlook, drive, SharePoint, a spreadsheet, or a database—and reformat it so it is easy for your agent to understand and use to complete tasks.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Types of connectors</h3>

        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8" aria-label="Connector types">
            <button
              onClick={() => setTypeTab('app')}
              className={cn(
                "whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm transition-colors",
                typeTab === 'app'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              )}
            >
              App Connectors
            </button>

            <button
              onClick={() => setTypeTab('financial')}
              className={cn(
                "whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm transition-colors",
                typeTab === 'financial'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              )}
            >
              Financial Connectors
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {typeTab === 'app' && (
            <div className="overflow-x-auto">
              <div className="rounded border bg-white dark:bg-gray-800 p-4">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">App Connectors</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Connector Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Links</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Self-managed</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Cloud</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {appGroups.flatMap(g => g.apps).map((a, i) => (
                        <tr key={`app-${i}`}>
                          <td className="px-4 py-4 align-top font-medium text-gray-900 dark:text-gray-100">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-md bg-gray-50 dark:bg-gray-700 flex items-center justify-center border">
                                {connectorIcons[a] ? (
                                  <img src={connectorIcons[a]} alt={a} className="w-6 h-6 object-contain" />
                                ) : (
                                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{a.split(' ').map(s=>s[0]).slice(0,2).join('')}</span>
                                )}
                              </div>
                              <div className="ml-3">{a}</div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-gray-700 dark:text-gray-200">{''}</td>
                          <td className="px-4 py-4 text-gray-700 dark:text-gray-200">{'✅'}</td>
                          <td className="px-4 py-4 text-gray-700 dark:text-gray-200">{'✅'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {typeTab === 'financial' && (
            <div className="overflow-x-auto">
              <div className="rounded border bg-white dark:bg-gray-800 p-4">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Financial Connectors</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Connector Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Links</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Self-managed</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Cloud</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {financialGroups.flatMap(g => g.apps).map((a, i) => (
                        <tr key={`fin-${i}`}>
                          <td className="px-4 py-4 align-top font-medium text-gray-900 dark:text-gray-100">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-md bg-gray-50 dark:bg-gray-700 flex items-center justify-center border">
                                {connectorIcons[a] ? (
                                  <img src={connectorIcons[a]} alt={a} className="w-6 h-6 object-contain" />
                                ) : (
                                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{a.split(' ').map(s=>s[0]).slice(0,2).join('')}</span>
                                )}
                              </div>
                              <div className="ml-3">{a}</div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-gray-700 dark:text-gray-200">{''}</td>
                          <td className="px-4 py-4 text-gray-700 dark:text-gray-200">{'✅'}</td>
                          <td className="px-4 py-4 text-gray-700 dark:text-gray-200">{'✅'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default {
  heading: 'Connectors',
  body: <ConnectorsPage />,
};

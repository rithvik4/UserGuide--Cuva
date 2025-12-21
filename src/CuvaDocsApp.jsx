import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./lib/utils";
import Header from "./components/Header";
import SearchResults from "./SearchResults";
import AsanaImg from "./assets/Asana.png";
import ConfluenceImg from "./assets/Confluence.png";
import ExcelImg from "./assets/Excel.png";
import GoogleSheetsImg from "./assets/Google_Sheets.png";
import HubSpotImg from "./assets/HubSpot.png";
import JiraImg from "./assets/Jira.png";
import PipedriveImg from "./assets/Pipedrive.png";
import SalesforceImg from "./assets/Salesforce.png";
import WordImg from "./assets/Word.png";

// Updated illustrative + semantic icon set (inline SVGs).
const Icons = {
  Agents: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="w-5 h-5" {...props}>
      <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Workflows: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M3 7h6l2 3 4-6 6 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Triggers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Connectors: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  KB: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4.5A2.5 2.5 0 016.5 2H20v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Templates: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  FAQ: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 10.5a3 3 0 016 0c0 1.6-1.7 2-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Key: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M21 11l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Chat: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Search: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Cloud: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M20 17.5A4.5 4.5 0 0016 10h-1.26A6 6 0 106 18h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M12 2l7 4v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Database: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  User: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  Book: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 6.5A2.5 2.5 0 016.5 4H20v15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
// Small set of feature cards shown on the welcome page
const welcomeCards = [
  {
    title: "AI-Powered Processing",
    description:
      "Extract data, summarize content, categorize information, and generate insights using advanced AI models",
    icon: Icons.Agents,
  },
  {
    title: "Integration Hub",
    description:
      "Connect Gmail, Slack, Salesforce, Airtable, Google Sheets, and 50+ other services seamlessly",
    icon: Icons.Connectors,
  },
  {
    title: "Smart Automation",
    description:
      "Trigger workflows from schedules, webhooks, emails, or Slack messages—or use agents on-demand",
    icon: Icons.Triggers,
  },
  {
    title: "Team Collaboration",
    description:
      "Share workflows, credentials, and agents across your workspace for true team automation",
    icon: Icons.User,
  },
  {
    title: "Visual Interfaces",
    description:
      "Transform complex workflows into simple forms that anyone on your team can use",
    icon: Icons.Book,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Run thousands of automations simultaneously with enterprise-grade reliability",
    icon: Icons.Database,
  },
];

// (moved docsContent mappings are defined after the main docsContent object)

// Sidebar navigation structure (reorganized) with semantic icons
const docsSections = [
  {
    title: "Get Started",
    items: [
      { id: "introduction", label: "Introduction to Cuva AI", icon: Icons.Book },
      { id: "platform-overview", label: "Platform Overview", icon: Icons.KB },
      {
        id: "key-concepts",
        label: "Key Concepts",
        icon: Icons.Key,
        children: [
          { id: "ai-agents", label: "AI Agents", icon: Icons.Agents },
          { id: "agentic-workflows", label: "Agentic Workflows", icon: Icons.Workflows },
          {
            id: "knowledge-systems-keyconcepts",
            label: "Knowledge Systems",
            icon: Icons.KB,
            children: [
              { id: "knowledge-base-kc", label: "Knowledge Base", icon: Icons.Database },
              { id: "knowledge-graph-kc", label: "Knowledge Graph", icon: Icons.KB },
              { id: "rag-kc", label: "Retrieval Augmented Generation (RAG)", icon: Icons.Search },
            ],
          },
          { id: "connectors-kc", label: "Connectors", icon: Icons.Connectors },
          { id: "cuvabot-kc", label: "CuvaBot", icon: Icons.Chat },
        ],
      },
      { id: "roles-permissions", label: "Roles and Permissions", icon: Icons.Shield },
      { id: "quickstart-first-agent", label: "Quickstart: Build Your First Agent", icon: Icons.Agents },
    ],
  },
  {
    title: "Core Platform",
    items: [
      { id: "architecture-overview", label: "Architecture Overview", icon: Icons.Database },
      { id: "connectors", label: "Connectors", icon: Icons.Connectors },
      {
        id: "knowledge-systems",
        label: "Knowledge Systems",
        icon: Icons.KB,
        children: [
          { id: "knowledge-base", label: "Knowledge Base", icon: Icons.Database },
          { id: "knowledge-graph", label: "Knowledge Graph", icon: Icons.KB },
          { id: "retrieval-augmented-generation", label: "Retrieval Augmented Generation (RAG)", icon: Icons.Search },
          { id: "agentic-etl", label: "Agentic ETL", icon: Icons.Workflows },
        ],
      },
      {
        id: "ai-agent-studio",
        label: "AI Agent Studio",
        icon: Icons.Workflows,
        children: [
          { id: "visual-workflow-builder", label: "Visual Workflow Builder", icon: Icons.Workflows },
          { id: "triggers", label: "Triggers", icon: Icons.Triggers },
          { id: "processing-agents", label: "Processing Agents", icon: Icons.Agents },
          { id: "terminators", label: "Terminators", icon: Icons.Shield },
          { id: "flow-control", label: "Flow Control", icon: Icons.Workflows },
        ],
      },
      {
        id: "cuvabot",
        label: "CuvaBot",
        icon: Icons.Chat,
        children: [
          { id: "conversational-queries", label: "Conversational Queries", icon: Icons.Chat },
          { id: "enterprise-search", label: "Enterprise Search", icon: Icons.Search },
          { id: "workflow-execution", label: "Workflow Execution", icon: Icons.Workflows },
        ],
      },
    ],
  },
  {
    title: "How-To Guides",
    items: [
      { id: "how-to-connect-enterprise-systems", label: "Connect Enterprise Systems", icon: Icons.Connectors },
      { id: "build-knowledge-system", label: "Build a Knowledge System", icon: Icons.Database },
      { id: "create-ai-agent-workflow", label: "Create an AI Agent Workflow", icon: Icons.Workflows },
      { id: "configure-triggers-terminators", label: "Configure Triggers and Terminators", icon: Icons.Triggers },
      {
        id: "run-agents",
        label: "Run Agents",
        icon: Icons.Agents,
        children: [
          { id: "via-chat", label: "Via Chat", icon: Icons.Chat },
          { id: "via-api", label: "Via API", icon: Icons.Search },
          { id: "via-scheduler", label: "Via Scheduler", icon: Icons.Cloud },
          { id: "via-forms", label: "Via Forms", icon: Icons.Book },
          { id: "monitor-iterate-agents", label: "Monitor and Iterate Agents", icon: Icons.Search },
        ],
      },
    ],
  },
  {
    title: "Enterprise Implementation",
    items: [
      { id: "implementation-overview", label: "Implementation Overview", icon: Icons.Book },
      { id: "four-step-client-rollout", label: "Four Step Client Rollout", icon: Icons.User },
      { id: "security-privacy-compliance", label: "Security, Privacy, and Compliance", icon: Icons.Shield },
      {
        id: "deployment-options",
        label: "Deployment Options",
        icon: Icons.Cloud,
        children: [
          { id: "cloud-deployment", label: "Cloud Deployment", icon: Icons.Cloud },
          { id: "on-prem-deployment", label: "On-Prem Deployment", icon: Icons.Shield },
        ],
      },
      { id: "scaling-across-teams-clients", label: "Scaling Across Teams and Clients", icon: Icons.User },
    ],
  },
  {
    title: "Reference",
    items: [
      { id: "agent-lifecycle", label: "Agent Lifecycle", icon: Icons.Agents },
      { id: "trigger-types", label: "Trigger Types", icon: Icons.Triggers },
      { id: "connector-reference", label: "Connector Reference", icon: Icons.Connectors },
      { id: "knowledge-object-types", label: "Knowledge Object Types", icon: Icons.KB },
      { id: "execution-modes", label: "Execution Modes", icon: Icons.Workflows },
      { id: "audit-logs-explainability", label: "Audit Logs and Explainability", icon: Icons.Shield },
      { id: "glossary", label: "Glossary", icon: Icons.Book },
    ],
  },
  {
    title: "Examples and Use Cases",
    items: [
      { id: "client-onboarding", label: "Client Onboarding", icon: Icons.User },
      { id: "kyc-aml-automation", label: "KYC and AML Automation", icon: Icons.Shield },
      { id: "invoice-payment-workflows", label: "Invoice and Payment Workflows", icon: Icons.Database },
      { id: "wealth-management-assistant", label: "Wealth Management Assistant", icon: Icons.Agents },
      { id: "m-and-a-analysis-workflow", label: "M and A Analysis Workflow", icon: Icons.Workflows },
    ],
  },
  {
    title: "Operations",
    items: [
      { id: "monitoring-analytics", label: "Monitoring and Analytics", icon: Icons.Search },
      { id: "performance-metrics", label: "Performance Metrics", icon: Icons.Database },
      { id: "error-handling", label: "Error Handling", icon: Icons.Shield },
      { id: "versioning-updates", label: "Versioning and Updates", icon: Icons.Templates },
    ],
  },
  {
    title: "Help and Support",
    items: [
      { id: "troubleshooting", label: "Troubleshooting", icon: Icons.FAQ },
      { id: "faqs", label: "FAQs", icon: Icons.FAQ },
      { id: "release-notes", label: "Release Notes", icon: Icons.Book },
      { id: "contact-support", label: "Contact and Support", icon: Icons.Chat },
    ],
  },
];

// Helpful aliases for navigation ids that should map to existing content


function ConnectorsPage() {
  const [typeTab, setTypeTab] = useState("app");

  // Types of connectors lists (grouped by category)
  const appGroups = [
    { category: "CRM", apps: ["Salesforce", "HubSpot", "Pipedrive"] },
    { category: "Collaboration", apps: ["Jira", "Confluence", "Asana"] },
    { category: "Productivity", apps: ["Microsoft Word", "Excel", "PowerPoint", "Google Sheets"] },
    { category: "File Storage", apps: ["OneDrive", "Google Drive", "SharePoint", "Dropbox", "FTP"] },
    { category: "E-mail", apps: ["Gmail", "Outlook", "Mailchimp"] },
    { category: "Communication", apps: ["Zoom", "WhatsApp", "Webex"] },
  ];

  const financialGroups = [
    { category: "Payments", apps: ["PayPal", "Stripe", "MasterCard", "Visa API"] },
    { category: "Financial CRM", apps: ["WealthBox", "Salesforce", "AdvyZon", "Advisor Engine"] },
    { category: "Open Banking", apps: ["Plaid", "Yodlee"] },
    { category: "KYC / AML", apps: ["LexisNexis", "Alloy", "Onfido", "Jumio", "Socure"] },
    { category: "Core Banking", apps: ["FIS core banking", "FiServ DNA", "FiServ Signature", "Mambu"] },
    { category: "Wealth Management", apps: ["BlackRock Aladdin", "SimCorp Dimension", "Orion Advisor"] },
  ];

  const connectorIcons = {
    Asana: AsanaImg,
    Confluence: ConfluenceImg,
    Excel: ExcelImg,
    "Google Sheets": GoogleSheetsImg,
    HubSpot: HubSpotImg,
    Jira: JiraImg,
    Pipedrive: PipedriveImg,
    Salesforce: SalesforceImg,
    "Microsoft Word": WordImg,
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Welcome to connectors hub</h2>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          In simple terms, <strong>Cuva Connectors</strong> are digital bridges that allow your AI agent to "talk" to other software and move information safely between them. They work by either "pulling" data from a starting point (the <strong>Source</strong>) or "pushing" it into a final home (the <strong>Destination</strong>). Think of them as translators that take information from different places—like an email, teams, outlook, drive, SharePoint, a spreadsheet, or a database—and reformat it so it is easy for your agent to understand and use to complete tasks.
        </p>
      </div>

      

      

      {/* Types of connectors subsection */}
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

// Content for each section
const docsContent = {
  welcome: {
    heading: "Welcome to Cuva AI 👋",
    body: (
      <>
        <p>
          Welcome to the Cuva AI documentation. This guide will take you from setting up your first workflow to building advanced, intelligent automations.
        </p>
        <div className="my-4" />
        <p>
          "From initial setup through to development, this guide has you covered. It's actively maintained and <span className="font-bold"> we invite your </span>  <span className="font-bold text-blue-600 dark:text-blue-400 underline underline-offset-4">contributions</span> to make it even better."
        </p>
        <div className="mt-6 border rounded p-4 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <strong>Introduction</strong>
          <div className="mt-3 w-full rounded overflow-hidden border border-gray-200 dark:border-gray-700">
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                title="Cuva overview"
                src="https://www.youtube.com/embed/BnquzIGVuKc"
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">About Cuva</h2>
          <p className="mb-2 text-gray-700 dark:text-gray-200">
            To empower the world's most complex organizations with an <span className="font-bold"> intelligent, autonomous workforce </span> built from AI Agents, driving unprecedented efficiency, operational resilience, and competitive growth.
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            At Cuva AI, we believe the future of enterprise operations is <span className="font-bold">Agentic</span>. Our mission is to provide the platform that makes building, deploying, and managing this AI agent workforce simple, scalable, and secure.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Build AI Automations Without Code</h3>
          <p className="mb-6 text-gray-700 dark:text-gray-200">Cuva AI is your platform for creating powerful automations using <span className="font-semibold">visual workflows</span> and <span className="font-semibold">intelligent agents</span>—no programming required.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-pink-50 text-pink-600"><Icons.Workflows className="w-6 h-6" /></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Workflows</h4>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Build reliable, repeatable automations that run the same way every time. Perfect for high-volume, mission-critical tasks.</p>
                  <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 list-inside list-none space-y-1">
                    <li>→ Drag-and-drop visual builder</li>
                    <li>→ 100+ pre-built nodes</li>
                    <li>→ Fast, predictable execution</li>
                  </ul>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('select-doc', { detail: 'visual-workflow-builder' }))}
                    className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
                  >
                    Get Started with Workflows →
                  </button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-pink-50 text-pink-600"><Icons.Agents className="w-6 h-6" /></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Agents</h4>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Create AI assistants that intelligently use your workflows and tools to solve open-ended tasks. Perfect for complex, decision-based work.</p>
                  <ul className="mt-3 text-sm text-gray-600 dark:text-gray-300 list-inside list-none space-y-1">
                    <li>→ Natural language interface</li>
                    <li>→ Works in Gumloop or Slack</li>
                    <li>→ Adaptive problem-solving</li>
                  </ul>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('select-doc', { detail: 'processing-agents' }))}
                    className="mt-4 text-sm font-semibold text-blue-700 underline underline-offset-2"
                  >
                    Get Started with Agents →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">What You Can Build</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {welcomeCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="border rounded-lg p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-blue-50 text-blue-600"><Icon className="w-5 h-5" /></div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{c.title}</h4>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>

    ),
  },
  "platform-overview": {
    heading: "Overview of the Cuva AI platform",
    body: (
      <>
        <p>
          Cuva AI is an enterprise-grade AI orchestration platform designed to be the foundational layer for AI-native financial enterprises. By unifying specialized agents, integrated knowledge systems, and domain-specific models, Cuva AI enables financial institutions to automate high-complexity processes, transform client engagement, and achieve unprecedented operational efficiency.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">1. Agent Orchestration</h2>
        <p className="text-gray-700 dark:text-gray-200">Cuva AI features a sophisticated orchestration engine that acts as a conductor for specialized AI agents.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Specialized Agent Teams:</strong> Deploy teams of agents where each is an expert in a specific task—such as reading documents, updating records, or analyzing risks.</li>
          <li><strong>Broad Ecosystem Connectivity:</strong> Seamlessly connect agents to your core business apps (CRM, PMS, Slack, Jira) through financial-grade connectors.</li>
          <li><strong>Dynamic Scaling:</strong> Automate complex client processes and backend workflows to scale operations without a proportional increase in headcount.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">2. Agentic Knowledge Systems</h2>
        <p className="text-gray-700 dark:text-gray-200">The platform creates a "living" brain for your enterprise by connecting disparate data silos into a unified knowledge graph.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Universal Data Integration:</strong> Agents autonomously connect and sync data from SharePoint, Confluence, CRMs, and internal PDFs.</li>
          <li><strong>Agentic RAG Intelligence:</strong> Using advanced Retrieval-Augmented Generation (RAG), agents produce grounded, explainable insights derived strictly from your trusted internal sources.</li>
          <li><strong>Contextual Reasoning:</strong> The system performs automated ETL (Extract, Transform, Load) to ensure every agent action is informed by the full context of your enterprise data.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">3. Expert AI Model Builder</h2>
        <p className="text-gray-700 dark:text-gray-200">Move beyond general-purpose models with custom intelligence tailored to your specific domain.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Domain-Specific Adapters:</strong> Create small, high-performance "Expert Models" that understand your industry's specific terminology and nuances.</li>
          <li><strong>Agentic Training Workflows:</strong> Use automated workflows to maintain and align these models with your evolving enterprise data.</li>
          <li><strong>Superior Accuracy:</strong> Expert models are easier to maintain and deliver higher precision for technical tasks than generic, broad-market AI.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">4. Enterprise Governance &amp; Compliance</h2>
        <p className="text-gray-700 dark:text-gray-200">Cuva AI is built for regulated environments where privacy, security, and auditability are non-negotiable.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Privacy by Design:</strong> Ensure PII (Personally Identifiable Information) and sensitive data are protected through rigorous access controls and encryption.</li>
          <li><strong>Actionable Explainability:</strong> Every agent decision is documented and auditable, ensuring "black box" problems are eliminated and actions are regulator-ready.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Manage granular permissions so agents only interact with the data and systems they are authorized to use.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">How It Works</h3>
        <p className="text-gray-700 dark:text-gray-200">The platform is built through a streamlined four-step process:</p>
        <ol className="list-decimal ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Connect:</strong> Integrate enterprise and financial systems through native connectors to unify all relevant data sources.</li>
          <li><strong>Create Enterprise Knowledge Bases:</strong> Utilize intelligent agents to perform ETL (Extract, Transform, Load) operations, organizing raw data into contextual knowledge systems.</li>
          <li><strong>Create AI Agentic Workflows:</strong> Design intelligent workflows where AI agents collaborate, make autonomous decisions, and execute complex tasks.</li>
          <li><strong>Create Enterprise AI Models:</strong> Develop specialized Expert AI Models, precisely tailored to enterprise data, operational objectives, and business logic.</li>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Core Modules</h3>
        <div className="mt-2">
          <div className="overflow-x-auto rounded border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Module</th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-4 align-top text-sm font-semibold text-gray-900 dark:text-gray-100">Connectors</td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200">Integrate enterprise apps (e.g., Google Sheets, Gmail, Microsoft Outlook) and financial systems (e.g., KYC/AML, Core Banking, Wealth Management, Open Banking APIs) to power intelligent agent workflows.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top text-sm font-semibold text-gray-900 dark:text-gray-100">Knowledge Systems</td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200">A combination of Knowledge Base (semantic store of documents), Knowledge Graph (semantic graph linking clients/accounts/etc.), and RAG (Retrieval-Augmented Generation). AI agents continuously build, update, and maintain this system.</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top text-sm font-semibold text-gray-900 dark:text-gray-100">AI Agent Studio</td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200">A visual interface to build agent logic and workflows. Features include: Visual Workflow Builder, Enterprise Knowledge Integration, access to connectors, and LLM Configuration (supporting OpenAI, Gemini, Claude, and more).</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-top text-sm font-semibold text-gray-900 dark:text-gray-100">CuvaBot</td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200">The conversational interface for agents. It allows users to: Chat with the Knowledge Systems for compliance-ready answers, perform Enterprise Search across all connected systems, and Trigger and Execute Workflows via natural language commands.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Implementation: Client Implementation Steps</h3>
        <ol className="list-decimal ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <strong>Step 1:</strong> Connect to client systems, retrieve, and inject.<br></br>
          <strong>Step 2:</strong> Build knowledge base: Ingest data, create a semantic enterprise knowledge base, and generate a linked knowledge graph.<br></br>
          <strong>Step 3:</strong> Build AI agents + workflows: Design workflows using the visual canvas, attach knowledge packs and connectors, and configure LLMs.<br></br>
          <strong>Step 4:</strong> Monitor &amp; iterate: Deploy with monitoring tools, capture feedback, and refine accuracy.<br></br>
        </ol>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">AI Agent Orchestration &amp; Deployment</h3>
        <p className="text-gray-700 dark:text-gray-200">The AI Agent Orchestration describes the agent lifecycle: Build, Train, Run, and Continuously Improve Enterprise AI Agents.</p>
        <div className="mt-3 text-gray-700 dark:text-gray-200">
          <p><strong>Training:</strong> Agents are fine-tuned by adjusting and refining prompts, optimizing flow control, and improving how they process inputs and generate outputs.</p>
          <p className="mt-2"><strong>Running:</strong> AI agents can be triggered in six different ways: API, Scheduler, Chat (e.g., via CuvaBot), Forms, Workflows, Manual.</p>
          <p className="mt-2"><strong>Monitoring:</strong> The platform tracks agent activity, measures performance, and identifies bottlenecks to continuously improve agent behavior.</p>
          <p className="mt-2"><strong>Deployment Options:</strong> Cloud Deployment: Fully compatible with AWS, Azure, and GCP, offering quick setup and scalable infrastructure. On-Prem Deployment: Designed for high-security, self-managed environments and supports LLMs like OpenAI, Gemini, and Claude.</p>
        </div>
      </>
    ),
  },
  "ai-agents": {
    heading: "AI Agents",
    body: (
      <>
        <p className="text-gray-700 dark:text-gray-200">
          Agents are AI-powered autonomous entities designed to solve open-ended goals. Unlike a standard Workflow—which follows a fixed, predetermined path—an Agent makes intelligent, real-time decisions about which tools to use and how to navigate data to achieve a desired outcome.
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-200">
          In the Cuva AI ecosystem, AI Agents are autonomous software entities that act as "digital employees" capable of reasoning, making decisions, and executing tasks within a financial enterprise. Unlike traditional automation that follows rigid, pre-defined scripts, these agents use Large Language Models (LLMs) to understand intent and navigate complex workflows.
        </p>
      </>
    ),
  },
  agents: {
    heading: "Agents: definition, roles, real-world examples",
    body: (
      <>
        <p>
          Agents are autonomous entities that perform tasks, make decisions, and interact with users or systems. In Cuva AI, agents can automate business processes, respond to events, and integrate with external APIs.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Customer support bots</li>
          <li>Data enrichment agents</li>
          <li>Automated workflow triggers</li>
        </ul>
      </>
    ),
  },
  "agent-creation": {
    heading: "Agent Creation: Step-by-step guide",
    body: (
      <>
        <ol className="list-decimal ml-6 mt-4 space-y-1">
          <li>Navigate to the Agents section in the platform.</li>
          <li>Click “Create Agent”.</li>
          <li>Define agent purpose and configuration.</li>
          <li>Set up triggers, actions, and integrations.</li>
          <li>Test and deploy your agent.</li>
        </ol>
        <div className="mt-6 border rounded p-4 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <strong>Placeholder:</strong> Agent creation flow diagram will be added here.
        </div>
      </>
    ),
  },
  workflows: {
    heading: "Workflows: purpose, execution flow",
    body: (
      <>
        <p>
          Workflows define the sequence of actions and logic that agents follow. They enable automation of complex business processes with conditional logic and branching.
        </p>
      </>
    ),
  },
  "agentic-workflows": {
    heading: "Agentic Workflows",
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
  },
  "workflow-building": {
    heading: "Workflow Building",
    body: (
      <>
        <ol className="list-decimal ml-6 mt-4 space-y-1">
          <li>Access the Workflow Builder in the platform.</li>
          <li>Add steps, conditions, and actions.</li>
          <li>Connect to data sources and APIs.</li>
          <li>Save and test your workflow.</li>
        </ol>
      </>
    ),
  },
  "workflow-design": {
    heading: "Designing workflows",
    body: (
      <>
        <p>
          Design workflows visually or via configuration. Use branching, loops, and triggers to model real-world business logic.
        </p>
        <div className="mt-6 border rounded p-4 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <strong>Placeholder:</strong> Workflow design visual will be added here.
        </div>
      </>
    ),
  },
  triggers: {
    heading: "Triggers: events, scheduling, rules",
    body: (
      <>
        <p>
          Triggers initiate workflows based on events, schedules, or custom rules. Configure triggers to automate responses to business events.
        </p>
      </>
    ),
  },
  "actions-explained": {
    heading: "Actions explained",
    body: (
      <>
        <p>
          Actions are discrete operations performed by agents, such as sending notifications, updating records, or calling APIs.
        </p>
      </>
    ),
  },
  "conditional-logic": {
    heading: "Conditional logic & branching",
    body: (
      <>
        <p>
          Use conditional logic to create dynamic workflows that adapt to different scenarios. Branching enables agents to make decisions based on data or events.
        </p>
      </>
    ),
  },
  connectors: {
    heading: "Connectors",
    body: <ConnectorsPage />,
  },

  "available-connectors": {
    heading: "Available connectors",
    body: (
      <>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>CRM (Salesforce, HubSpot)</li>
          <li>ERP (SAP, Oracle)</li>
          <li>Cloud storage (AWS S3, Google Drive)</li>
          <li>Custom REST APIs</li>
        </ul>
      </>
    ),
  },
  "knowledge-systems-keyconcepts": {
    heading: "Knowledge Systems (Knowledge Base, RAG)",
    body: (
      <>
        <p className="text-gray-700 dark:text-gray-200">
          Knowledge Systems in Cuva AI act as the platform's advanced "Digital Brain." The foundational layer equips AI agents with the deep, context-aware understanding necessary for sophisticated problem-solving and decision-making. This sophisticated infrastructure is built upon the seamless integration of several core components:
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Agentic ETL (Extract, Transform, Load)</h3>
        <p className="text-gray-700 dark:text-gray-200">This process is not a static data pipeline but an intelligent, AI-driven mechanism for continuously enriching and updating the Knowledge Bases. Agentic ETL leverages specialized AI agents to autonomously:</p>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Extract relevant data from diverse and often unstructured sources (e.g., databases, documents, emails, websites).</li>
          <li>Transform this raw data into a structured, vector-optimized format suitable for efficient retrieval and reasoning by other AI agents. This includes cleaning, normalizing, and vectorizing the content.</li>
          <li>Load the transformed information into the appropriate Knowledge Bases, ensuring the "Digital Brain" remains current and accurate in real-time.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Agentic RAG (Retrieval-Augmented Generation)</h3>
        <p className="text-gray-700 dark:text-gray-200">Retrieval-Augmented Generation (RAG) is the powerful technology that makes your Cuva AI agent smart, accurate, and reliable. It acts as a bridge, connecting the AI's core reasoning engine (the Large Language Model) with your organization's verified, deep institutional knowledge.</p>
        <p className="text-gray-700 dark:text-gray-200">When a Cuva AI agent needs to answer a question or complete a complex task, it uses RAG to ensure its response is grounded in facts, significantly reducing the risk of "hallucinations".</p>

        <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Retrieval: Find the Facts</h4>
        <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> To quickly locate the most relevant pieces of information from your organization's documents, data, and repository.</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The AI converts the user's query into a unique mathematical signature (a "vector"). It then performs a high-speed vector similarity search across all Knowledge Bases to identify documents or data chunks that are conceptually closest to the query.</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Output:</strong> A small, highly relevant set of "snippets" of text/data.</p>

        <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Augmentation: Provide Context</h4>
        <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> To inject the retrieved facts into the AI's instruction set, creating a factual foundation for the response.</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The retrieved information (the "ground-truth data") is dynamically inserted into the prompt sent to the LLM. The instruction effectively becomes: "Answer the following question ONLY based on this provided context: [Retrieved Snippet 1, Snippet 2, etc.]. Question: [User's Question]"</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Impact:</strong> This step augments (enhances) the LLM's input with verified data, forcing it to stick to the facts.</p>

        <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Generation: Synthesize the Answer</h4>
        <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> To deliver a final, accurate, and coherent answer.</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The LLM uses its linguistic capabilities and reasoning to process the original question alongside the newly supplied factual context.</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Result:</strong> A highly accurate, context-aware, and trustworthy output that is directly grounded in your organization data, eliminating guesswork and preventing the AI from generating incorrect or fabricated information.</p>

        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Knowledge Bases (KBs)</h3>
        <p className="text-gray-700 dark:text-gray-200">These form the structured and curated repository of domain-specific and organizational intelligence. A Knowledge Base serves as the long-term memory for the AI, storing verified facts, proprietary documents, technical specifications, process flows, and historical data in an optimized format. By indexing this information meticulously, the platform ensures that the AI agents have instant, reliable access to the authoritative information required for their tasks.</p>
      </>
    ),
  },
  "connectors-kc": {
    heading: "Connectors",
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
  },
  "cuvabot-kc": {
    heading: "CuvaBot",
    body: (
      <>
        <p className="text-gray-700 dark:text-gray-200">
          CuvaBot is the conversational interface for agents. It allows users to chat with the Knowledge Systems for compliance-ready answers, perform Enterprise Search across all connected systems, and trigger and execute workflows via natural language commands.
        </p>
      </>
    ),
  },
  "connector-config": {
    heading: "Connector configuration",
    body: (
      <>
        <p>
          Configure connectors with authentication, endpoints, and data mappings. Securely manage credentials and access controls.
        </p>
      </>
    ),
  },
  "custom-connector": {
    heading: "Custom connector creation",
    body: (
      <>
        <ol className="list-decimal ml-6 mt-4 space-y-1">
          <li>Define integration requirements.</li>
          <li>Develop connector using provided SDK or API.</li>
          <li>Test and validate integration.</li>
          <li>Deploy and monitor connector usage.</li>
        </ol>
      </>
    ),
  },
  knowledgebase: {
    heading: "Knowledgebase: sources, indexing, querying",
    body: (
      <>
        <p>
          The knowledgebase centralizes documents, data sources, and FAQs. Agents can query indexed knowledge to provide accurate answers and insights.
        </p>
      </>
    ),
  },
  "knowledgebase-mgmt": {
    heading: "Knowledgebase Management",
    body: (
      <>
        <ol className="list-decimal ml-6 mt-4 space-y-1">
          <li>Add or remove data sources.</li>
          <li>Configure indexing schedules.</li>
          <li>Monitor knowledgebase health.</li>
        </ol>
      </>
    ),
  },
  "uploading-docs": {
    heading: "Uploading documents",
    body: (
      <>
        <p>
          Upload documents in supported formats (PDF, DOCX, TXT) for indexing and search. Ensure compliance with data security policies.
        </p>
      </>
    ),
  },
  "roles-permissions": {
    heading: "User roles & permissions (Admin, Builder, Viewer)",
    body: (
      <>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li><strong>Admin:</strong> Full access, manage users and settings</li>
          <li><strong>Builder:</strong> Create and manage agents, workflows, and integrations</li>
          <li><strong>Viewer:</strong> Read-only access to documentation and reports</li>
        </ul>
      </>
    ),
  },
  templates: {
    heading: "Ready-to-use templates",
    body: (
      <>
        <p>
          Accelerate deployment with pre-built agent and workflow templates tailored for common enterprise scenarios.
        </p>
      </>
    ),
  },
  "sample-use-cases": {
    heading: "Sample enterprise use cases",
    body: (
      <>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Automated onboarding</li>
          <li>Customer support automation</li>
          <li>Data pipeline orchestration</li>
        </ul>
      </>
    ),
  },
  "common-issues": {
    heading: "Common issues",
    body: (
      <>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Agent not responding</li>
          <li>Workflow execution errors</li>
          <li>Connector authentication failures</li>
        </ul>
      </>
    ),
  },
  "quick-fixes": {
    heading: "Quick fixes and checks",
    body: (
      <>
        <ol className="list-decimal ml-6 mt-4 space-y-1">
          <li>Check agent logs for errors</li>
          <li>Verify connector credentials</li>
          <li>Restart workflow or agent</li>
        </ol>
      </>
    ),
  },
};

// Helpful aliases for navigation ids that should map to existing content
docsContent["introduction"] = docsContent["welcome"];

function Sidebar({ sections, activeId, onSelect }) {
  function SidebarItem({ item }) {
    const Icon = item.icon;
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const isActive = item.id === activeId || (hasChildren && item.children.some((c) => c.id === activeId));
    const [open, setOpen] = useState(isActive);

    // Keep expanded when activeId changes
    React.useEffect(() => {
      if (isActive) setOpen(true);
    }, [isActive]);

    return (
      <li>
        <div className="flex items-center px-4 py-2">
          <button
            onClick={() => {
              if (hasChildren) setOpen((v) => !v);
              else onSelect(item.id);
            }}
            className={cn(
              "flex items-center w-full text-left rounded px-3 py-2 transition-colors",
              isActive
                ? "bg-blue-50 text-blue-700 font-semibold dark:bg-blue-900 dark:text-blue-300"
                : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            )}
            aria-expanded={hasChildren ? open : undefined}
          >
            {Icon ? (
              <span className="mr-3 text-gray-500 dark:text-gray-400" aria-hidden>
                <Icon />
              </span>
            ) : (
              <span className="mr-3 w-5" />
            )}
            <span className="flex-1">{item.label}</span>
            {hasChildren ? (
              <svg className={cn("w-4 h-4 ml-2 transform transition-transform", open ? "rotate-90" : "rotate-0")} viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </button>
        </div>

        {hasChildren ? (
          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="pl-12"
              >
                {item.children.map((child) => (
                  <li key={child.id} className="mb-1">
                    <button
                      className={cn(
                        "w-full text-left px-3 py-2 rounded transition-colors text-sm",
                        activeId === child.id
                          ? "bg-blue-100 text-blue-700 font-medium dark:bg-blue-900 dark:text-blue-300"
                          : "hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
                      )}
                      onClick={() => onSelect(child.id)}
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        ) : null}
      </li>
    );
  }

  return (
    <aside className="w-1/5 min-w-[220px] max-w-xs h-screen bg-white border-r border-gray-200 fixed left-0 top-16 flex flex-col dark:bg-gray-900 dark:border-gray-800">
      <div className="p-6 pb-2 text-xl font-bold text-gray-900 dark:text-gray-100">Documentation</div>
      <nav className="flex-1 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              {section.title}
            </div>
            <ul>
              {section.items.map((item) => (
                <SidebarItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

function MainContent({ activeId }) {
  const content = docsContent[activeId] || {
    heading: "Content Coming Soon",
    body: (
      <>
        <p className="text-gray-700 dark:text-gray-200">This section doesn't have content yet. Check back soon or contact the docs owner.</p>
      </>
    ),
  };
  // Build breadcrumb parts: [section, item, child?]
  function getBreadcrumbParts(id) {
    for (const section of docsSections) {
      for (const item of section.items) {
        if (item.id === id) return [section.title, item.label];
        if (Array.isArray(item.children)) {
          for (const child of item.children) {
            if (child.id === id) return [section.title, item.label, child.label];
          }
        }
      }
    }
    return null;
  }

  const bc = getBreadcrumbParts(activeId);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeId}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25 }}
        className="max-w-3xl mx-auto py-12 px-8"
      >
        {bc ? (
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {bc.map((p, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">›</span>}
                <span className="inline-block">{p}</span>
              </span>
            ))}
          </div>
        ) : null}

        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{content.heading}</h1>
        <div className="prose prose-blue max-w-none text-gray-800 dark:text-gray-200">{content.body}</div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CuvaDocsApp() {
  const [activeId, setActiveId] = useState("introduction");
  const [searchQuery, setSearchQuery] = useState("");

  // Build a simple docs index from the sections and content
  const docsIndex = useMemo(() => {
    const items = [];
    docsSections.forEach((section) => {
      section.items.forEach((item) => {
        items.push({ id: item.id, label: item.label, heading: (docsContent[item.id] && docsContent[item.id].heading) || "" });
        if (Array.isArray(item.children)) {
          item.children.forEach((child) => {
            items.push({ id: child.id, label: child.label, heading: (docsContent[child.id] && docsContent[child.id].heading) || "" });
          });
        }
      });
    });
    return items;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) {
      setSearchQuery(q);
      setActiveId("search-results");
    }
  }, []);

  function handleSelectDoc(id) {
    setActiveId(id);
    setSearchQuery("");
    // remove q param when navigating to a doc
    const url = new URL(window.location.href);
    url.searchParams.delete("q");
    window.history.replaceState(null, "", url.toString());
  }

  useEffect(() => {
    function onSelect(e) {
      const id = e?.detail;
      if (id) handleSelectDoc(id);
    }
    window.addEventListener("select-doc", onSelect);
    return () => window.removeEventListener("select-doc", onSelect);
  }, []);

  function handleSearch(q) {
    setSearchQuery(q);
    setActiveId("search-results");
    const url = new URL(window.location.href);
    if (q) url.searchParams.set("q", q);
    else url.searchParams.delete("q");
    window.history.pushState(null, "", url.toString());
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <Header docsIndex={docsIndex} onSelectDoc={handleSelectDoc} onSearch={handleSearch} />

      <Sidebar
        sections={docsSections}
        activeId={activeId}
        onSelect={setActiveId}
      />

      <main className="ml-[20%] w-[80%] min-h-screen pt-16">
        {activeId === "search-results" ? (
          <SearchResults query={searchQuery} docsIndex={docsIndex} onSelectDoc={handleSelectDoc} />
        ) : (
          <MainContent activeId={activeId} />
        )}
      </main>
    </div>
  );
}

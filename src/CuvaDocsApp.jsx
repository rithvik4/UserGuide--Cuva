import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./lib/utils";
import Header from "./components/Header";
import SearchResults from "./SearchResults";

// Simple icon set (inline SVG). Add or replace icons as needed.
const Icons = {
  Agents: (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="w-5 h-5" {...props}>
      <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 20a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Workflows: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M3 7h6l2 3 4-6 6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Triggers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Connectors: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  KB: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 4.5A2.5 2.5 0 016.5 2H20v15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Templates: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  FAQ: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M12 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.09 9a3 3 0 015.82 0c0 1.5-1.5 2-2.5 2.5C11 12 11 13 11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Key: (props) => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" {...props}>
      <path d="M21 11l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="13" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

// Sidebar navigation structure
const docsSections = [
  {
    title: "Get Started",
    items: [
      { id: "welcome", label: "Welcome to Cuva AI 👋", icon: null },
      { id: "overview", label: "Overview of the Cuva AI platform", icon: null },
      { id: "what-you-can-build", label: "What users can build with Cuva AI", icon: null },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      {
        id: "agents",
        label: "Agents",
        icon: Icons.Agents,
        children: [
          { id: "agent-creation", label: "Agent Creation" },
        ],
      },
      {
        id: "workflows",
        label: "Workflows",
        icon: Icons.Workflows,
        children: [
          { id: "workflow-building", label: "Workflow Building" },
          { id: "workflow-design", label: "Designing workflows" },
        ],
      },
      { id: "triggers", label: "Triggers", icon: Icons.Triggers, children: [ { id: "actions-explained", label: "Actions" }, { id: "conditional-logic", label: "Conditional logic" } ] },
      {
        id: "connectors",
        label: "Connectors",
        icon: Icons.Connectors,
        children: [
          { id: "available-connectors", label: "Available connectors" },
          { id: "connector-config", label: "Connector configuration" },
          { id: "custom-connector", label: "Custom connector creation" },
        ],
      },
      { id: "knowledgebase", label: "Knowledgebase", icon: Icons.KB, children: [ { id: "knowledgebase-mgmt", label: "Management" }, { id: "uploading-docs", label: "Uploading documents" } ] },
    ],
  },
  {
    title: "Security & authentication basics",
    items: [
      { id: "roles-permissions", label: "User roles & permissions (Admin, Builder, Viewer)", icon: Icons.Key },
    ],
  },
  {
    title: "Examples & Templates",
    items: [
      { id: "templates", label: "Ready-to-use templates", icon: Icons.Templates },
      { id: "sample-use-cases", label: "Sample enterprise use cases", icon: Icons.Templates },
    ],
  },
  {
    title: "FAQs & Troubleshooting",
    items: [
      { id: "common-issues", label: "Common issues", icon: Icons.FAQ },
      { id: "quick-fixes", label: "Quick fixes and checks", icon: Icons.FAQ },
    ],
  },
];

// Content for each section
const docsContent = {
  welcome: {
    heading: "Welcome to Cuva AI 👋",
    body: (
      <>
        <p>
          Welcome to the Cuva AI Enterprise AI Agent Platform documentation. Here you’ll find everything you need to get started, understand core concepts, and build powerful AI-driven solutions for your enterprise.
        </p>
        <div className="my-4" />
        <p>
            From initial setup through to development, this guide has you covered. It's actively maintained and we invite your contributions to make it even better.
        </p>
        <div className="mt-6 border rounded p-4 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <strong>Placeholder:</strong> Platform overview diagram will be added here.
        </div>
      </>
      
    ),
  },
  overview: {
    heading: "Overview of the Cuva AI platform",
    body: (
      <>
        <p>
          Cuva AI empowers organizations to create, deploy, and manage intelligent agents that automate workflows, integrate with enterprise systems, and deliver actionable insights securely at scale.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-1">
          <li>Modular agent architecture</li>
          <li>Workflow automation</li>
          <li>Enterprise-grade security</li>
          <li>Seamless integrations</li>
        </ul>
      </>
    ),
  },
  "what-you-can-build": {
    heading: "What users can build with Cuva AI",
    body: (
      <>
        <p>
          Build custom agents for data analysis, process automation, knowledge management, and more. Cuva AI adapts to diverse enterprise needs, from customer support to internal operations.
        </p>
        <div className="mt-6 border rounded p-4 bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <strong>Placeholder:</strong> Use case visualizations coming soon.
        </div>
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
    heading: "Connectors: integrations with systems & APIs",
    body: (
      <>
        <p>
          Connectors enable agents to interact with external systems, databases, and APIs. Choose from a library of pre-built connectors or create custom integrations.
        </p>
      </>
    ),
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
  const content = docsContent[activeId] || docsContent["welcome"];
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
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{content.heading}</h1>
          <div className="prose prose-blue max-w-none text-gray-800 dark:text-gray-200">{content.body}</div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CuvaDocsApp() {
  const [activeId, setActiveId] = useState("welcome");
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

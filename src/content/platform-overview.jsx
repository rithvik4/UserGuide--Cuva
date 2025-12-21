import React from 'react';

export default {
  heading: 'Overview of the Cuva AI platform',
  body: (
    <div className="prose max-w-none dark:prose-invert space-y-6">
      <div className="rounded-lg p-6 bg-gradient-to-r from-slate-50 to-white dark:from-gray-900 dark:to-gray-800">
        <p className="text-lg-leading-relaxed text-gray-800 dark:text-gray-100">
          Cuva AI is an enterprise-grade AI orchestration platform designed to be the foundational layer for AI-native financial enterprises. By unifying specialized agents, integrated knowledge systems, and domain-specific models, Cuva AI enables financial institutions to automate high-complexity processes, transform client engagement, and achieve unprecedented operational efficiency.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mt-0 mb-2 text-gray-900 dark:text-gray-100">1. Agent Orchestration</h2>
        <p className="text-gray-700 dark:text-gray-200">Cuva AI features a sophisticated orchestration engine that acts as a conductor for specialized AI agents.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Specialized Agent Teams:</strong> Deploy teams of agents where each is an expert in a specific task—such as reading documents, updating records, or analyzing risks.</li>
          <li><strong>Broad Ecosystem Connectivity:</strong> Seamlessly connect agents to your core business apps (CRM, PMS, Slack, Jira) through financial-grade connectors.</li>
          <li><strong>Dynamic Scaling:</strong> Automate complex client processes and backend workflows to scale operations without a proportional increase in headcount.</li>
        </ul>
      </section>

        <section className="rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mt-0 mb-2 text-gray-900 dark:text-gray-100">2. Agentic Knowledge Systems</h2>
        <p className="text-gray-700 dark:text-gray-200">The platform creates a "living" brain for your enterprise by connecting disparate data silos into a unified knowledge graph.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Universal Data Integration:</strong> Agents autonomously connect and sync data from SharePoint, Confluence, CRMs, and internal PDFs.</li>
          <li><strong>Agentic RAG Intelligence:</strong> Using advanced Retrieval-Augmented Generation (RAG), agents produce grounded, explainable insights derived strictly from your trusted internal sources.</li>
          <li><strong>Contextual Reasoning:</strong> The system performs automated ETL (Extract, Transform, Load) to ensure every agent action is informed by the full context of your enterprise data.</li>
        </ul>
      </section>

        <section className="rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mt-0 mb-2 text-gray-900 dark:text-gray-100">3. Expert AI Model Builder</h2>
        <p className="text-gray-700 dark:text-gray-200">Move beyond general-purpose models with custom intelligence tailored to your specific domain.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Domain-Specific Adapters:</strong> Create small, high-performance "Expert Models" that understand your industry's specific terminology and nuances.</li>
          <li><strong>Agentic Training Workflows:</strong> Use automated workflows to maintain and align these models with your evolving enterprise data.</li>
          <li><strong>Superior Accuracy:</strong> Expert models are easier to maintain and deliver higher precision for technical tasks than generic, broad-market AI.</li>
        </ul>
      </section>

        <section className="rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm">
        <h2 className="text-xl font-semibold mt-0 mb-2 text-gray-900 dark:text-gray-100">4. Enterprise Governance &amp; Compliance</h2>
        <p className="text-gray-700 dark:text-gray-200">Cuva AI is built for regulated environments where privacy, security, and auditability are non-negotiable.</p>
        <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700 dark:text-gray-200">
          <li><strong>Privacy by Design:</strong> Ensure PII (Personally Identifiable Information) and sensitive data are protected through rigorous access controls and encryption.</li>
          <li><strong>Actionable Explainability:</strong> Every agent decision is documented and auditable, ensuring "black box" problems are eliminated and actions are regulator-ready.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Manage granular permissions so agents only interact with the data and systems they are authorized to use.</li>
        </ul>
      </section>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">How It Works</h3>
        <p className="text-gray-700 dark:text-gray-200">The platform is built through a streamlined four-step process:</p>

        <div className="mt-6 relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200"><span className="font-semibold">1. Connect:</span> Integrate enterprise and financial systems through native connectors to unify all relevant data sources.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v4a1 1 0 001 1h3m10-6v4a1 1 0 01-1 1h-3M7 21h10M12 7v14" />
                  </svg>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200"><span className="font-semibold">2. Create Enterprise Knowledge Bases:</span> Utilize intelligent agents to perform ETL (Extract, Transform, Load) operations, organizing raw data into contextual knowledge systems.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 7h.01M7 11h.01M7 15h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                  </svg>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200"><span className="font-semibold">3. Create AI Agentic Workflows:</span> Design intelligent workflows where AI agents collaborate, make autonomous decisions, and execute complex tasks.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <svg className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a3 3 0 003 3h12a3 3 0 003-3V7M16 3v4M8 3v4" />
                  </svg>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200"><span className="font-semibold">4. Create Enterprise AI Models:</span> Develop specialized Expert AI Models, precisely tailored to enterprise data, operational objectives, and business logic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-900 dark:text-gray-100">Core Modules</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Connectors</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Integrate enterprise apps (e.g., Google Sheets, Gmail, Microsoft Outlook) and financial systems (e.g., KYC/AML, Core Banking, Wealth Management, Open Banking APIs) to power intelligent agent workflows.</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Knowledge Systems</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">A combination of Knowledge Base (semantic store of documents), Knowledge Graph (semantic graph linking clients/accounts/etc.), and RAG (Retrieval-Augmented Generation). AI agents continuously build, update, and maintain this system.</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">AI Agent Studio</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">A visual interface to build agent logic and workflows. Features include: Visual Workflow Builder, Enterprise Knowledge Integration, access to connectors, and LLM Configuration (supporting OpenAI, Gemini, Claude, and more).</p>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">CuvaBot</h4>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">The conversational interface for agents. It allows users to: Chat with the Knowledge Systems for compliance-ready answers, perform Enterprise Search across all connected systems, and Trigger and Execute Workflows via natural language commands.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-900 dark:text-gray-100">Implementation: Client Implementation Steps</h3>

        <div className="mt-4 relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">1</span>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200">Step 1: Connect to client systems, retrieve, and inject.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">2</span>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200">Step 2: Build knowledge base: Ingest data, create a semantic enterprise knowledge base, and generate a linked knowledge graph.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">3</span>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200">Step 3: Build AI agents + workflows: Design workflows using the visual canvas, attach knowledge packs and connectors, and configure LLMs.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">4</span>
                </span>
              </div>
              <div className="ml-8">
                <p className="text-gray-700 dark:text-gray-200">Step 4: Monitor &amp; iterate: Deploy with monitoring tools, capture feedback, and refine accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">AI Agent Orchestration &amp; Deployment</h3>
        <p className="text-gray-700 dark:text-gray-200">The AI Agent Orchestration describes the agent lifecycle: Build, Train, Run, and Continuously Improve Enterprise AI Agents.</p>

        <dl className="mt-4 space-y-4 text-gray-700 dark:text-gray-200">
          <div>
            <dt className="font-semibold">Training:</dt>
            <dd className="mt-1">Agents are fine-tuned by adjusting and refining prompts, optimizing flow control, and improving how they process inputs and generate outputs.</dd>
          </div>
          <div>
            <dt className="font-semibold">Running:</dt>
            <dd className="mt-1">AI agents can be triggered in six different ways: API, Scheduler, Chat (e.g., via CuvaBot), Forms, Workflows, Manual.</dd>
          </div>
          <div>
            <dt className="font-semibold">Monitoring:</dt>
            <dd className="mt-1">The platform tracks agent activity, measures performance, and identifies bottlenecks to continuously improve agent behavior.</dd>
          </div>
          <div>
            <dt className="font-semibold">Deployment Options:</dt>
            <dd className="mt-1">Cloud Deployment: Fully compatible with AWS, Azure, and GCP, offering quick setup and scalable infrastructure. On-Prem Deployment: Designed for high-security, self-managed environments and supports LLMs like OpenAI, Gemini, and Claude.</dd>
          </div>
        </dl>
      </div>
    </div>
  ),
};

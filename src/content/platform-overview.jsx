import React from 'react';

export default {
   heading: 'Overview',
  body: (
    <div className="prose max-w-none dark:prose-invert space-y-6">
      <div>
        <p className="mb-2 text-gray-700 dark:text-gray-200">
          <span className="font-bold"> Cuva </span> is an <span className="font-bold"> Enterprise Agentic Orchestration Platform </span> that transforms complex business operations into autonomous, self-adapting workflows. Moving beyond the limitations of rigid, rule-based RPA, Cuva utilizes a Large Integration Model (LIM) to deploy AI agents that work 24/7 across your entire tech stack. Whether dealing with modern SaaS, on-premise servers, or legacy software, Cuva interfaces seamlessly via both API and UI layers to ensure intelligent, continuous execution across the enterprise.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          At Cuva AI, we believe the future of enterprise operations is <span className="font-bold">Agentic</span>. Our mission is to provide the platform that makes building, deploying, and managing this AI agent workforce simple, scalable, and secure.
        </p>
      </div>

      <div className="mt-12 space-y-12 mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Why Cuva AI?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            Enterprise ecosystems are increasingly fragmented across disparate SaaS platforms and legacy databases. Cuva provides a <span className="font-semibold text-blue-600 dark:text-blue-400">Unified Agentic Layer</span> to solve the challenges of data silos, manual process friction, and brittle automation.
          </p>
        </div>

        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">1</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Autonomous Workflow Discovery</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Traditional automation requires manual process mapping. Cuva utilizes a <strong>Discovery Engine</strong> that analyzes system telemetry and interaction logs to identify high-ROI automation candidates.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900/50 border-l-4 border-blue-500 p-3 text-sm text-gray-600 dark:text-gray-400">
                <strong>Technical Edge:</strong> It maps the "as-is" process state automatically, reducing the discovery phase from weeks to hours.
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">2</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">The Large Integration Model (LIM) Architecture</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Standard API-based integrations are rigid. Cuva’s LIM-based architecture provides a semantic understanding of software interfaces.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800">
                  <strong className="block text-indigo-600 dark:text-indigo-400 mb-1">Self-Healing Workflows</strong>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Unlike scripts that fail when a schema or UI changes, Cuva agents use computer vision and LLM-based element recognition to navigate changes dynamically.</span>
                </li>
                <li className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800">
                  <strong className="block text-indigo-600 dark:text-indigo-400 mb-1">Multi-Modal Interaction</strong>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Agents can toggle between API calls for speed and UI-based actions for legacy systems lacking modern endpoints.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xl">3</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Scalable "Agentic" Connectors</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cuva provides an extensible framework for connecting the enterprise:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Out-of-the-Box (OOTB) Library:</strong> Pre-configured connectors for 500+ standard enterprise tools (GitHub, Jira, SAP, Salesforce).</li>
                <li><strong>Zero-Code Connector Builder:</strong> A developer-centric interface to wrap proprietary internal APIs into "Agentic Tools" without writing boilerplate integration code.</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xl">4</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise-Grade Governance & Security</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cuva is built on a Zero-Trust Intelligence framework to ensure that AI agents operate safely within the corporate perimeter.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Permission Mirroring:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cuva dynamically inherits existing RBAC (Role-Based Access Control). An agent cannot retrieve or process data that the authenticated user does not have explicit permission to access at the source.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Full Execution Traceability:</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Every agent decision is logged in a machine-readable audit trail, providing 100% observability into how data was manipulated.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xl">5</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flexible Deployment & Orchestration</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Cuva fits into your existing infrastructure stack via multiple deployment vectors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800 rounded">
                  <strong className="block text-orange-800 dark:text-orange-300 text-sm">Hybrid Orchestration</strong>
                  <span className="text-xs text-orange-700 dark:text-orange-400">Keep data processing in your private VPC (On-Prem) while managing agent logic in the cloud.</span>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-800 rounded">
                  <strong className="block text-orange-800 dark:text-orange-300 text-sm">Developer Interfaces</strong>
                  <span className="text-xs text-orange-700 dark:text-orange-400">Manage via REST APIs, CLI tools, or Terraform Providers for IaC.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4 border-b dark:border-slate-800">Specification</th>
                <th className="p-4 border-b dark:border-slate-800 text-gray-500 dark:text-gray-400">Legacy Integration (iPaaS/RPA)</th>
                <th className="p-4 border-b dark:border-slate-800 text-blue-600 dark:text-blue-400">Cuva Agentic Workspace</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="bg-white dark:bg-slate-950">
                <td className="p-4 font-medium text-slate-900 dark:text-slate-200">Logic Type</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">Deterministic (If/Then)</td>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Probabilistic & Context-Aware</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                <td className="p-4 font-medium text-slate-900 dark:text-slate-200">Maintenance</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">High (Breaks on UI/API update)</td>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Low (Self-healing via LIM)</td>
              </tr>
              <tr className="bg-white dark:bg-slate-950">
                <td className="p-4 font-medium text-slate-900 dark:text-slate-200">Data Access</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">Keyword/Field matching</td>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Semantic/Vector Search</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                <td className="p-4 font-medium text-slate-900 dark:text-slate-200">Discovery</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">Manual Business Analysis</td>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Automated Telemetry Discovery</td>
              </tr>
              <tr className="bg-white dark:bg-slate-950">
                <td className="p-4 font-medium text-slate-900 dark:text-slate-200">Security</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">Static Credentials</td>
                <td className="p-4 font-bold text-slate-900 dark:text-white">Dynamic RBAC Inheritance</td>
              </tr>
            </tbody>
          </table>
        </div>
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
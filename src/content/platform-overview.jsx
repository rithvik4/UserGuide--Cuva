import React from 'react';

export default {
  heading: 'Overview of the Cuva AI platform',
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
};

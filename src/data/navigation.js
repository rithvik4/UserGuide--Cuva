import { Icons } from '../lib/icons';

export const docsSections = [
  {
    title: 'Get Started',
    items: [
      { id: 'introduction', label: 'Introduction to Cuva AI', icon: Icons.Book },
      { id: 'platform-overview', label: 'Platform Overview', icon: Icons.KB },
      {
        id: 'key-concepts',
        label: 'Key Concepts',
        icon: Icons.Key,
        children: [
          { id: 'ai-agents', label: 'AI Agents', icon: Icons.Agents },
          { id: 'agentic-workflows', label: 'Agentic Workflows', icon: Icons.Workflows },
          {
            id: 'knowledge-systems-keyconcepts',
            label: 'Knowledge Systems',
            icon: Icons.KB,
            children: [
              { id: 'knowledge-base-kc', label: 'Knowledge Base', icon: Icons.Database },
              { id: 'knowledge-graph-kc', label: 'Knowledge Graph', icon: Icons.KB },
              { id: 'rag-kc', label: 'Retrieval Augmented Generation (RAG)', icon: Icons.Search },
            ],
          },
          { id: 'connectors-kc', label: 'Connectors', icon: Icons.Connectors },
          { id: 'cuvabot-kc', label: 'CuvaBot', icon: Icons.Chat },
        ],
      },
      { id: 'roles-permissions', label: 'Roles and Permissions', icon: Icons.Shield },
      { id: 'quickstart-first-agent', label: 'Quickstart: Build Your First Agent', icon: Icons.Agents },
    ],
  },
  {
    title: 'Core Platform',
    items: [
      { id: 'architecture-overview', label: 'Architecture Overview', icon: Icons.Database },
      {
        id: 'agents',
        label: 'Agents',
        icon: Icons.Agents,
        children: [
          { id: 'agent-overview', label: 'Overview', icon: Icons.Agents },
          { id: 'all-agents', label: 'Agents', icon: Icons.Agents },
          { id: 'how-agents-work', label: 'How Agents Works', icon: Icons.Workflows },
        ]
      },
      {
        id: 'connectors-parent',
        label: 'Connectors',
        icon: Icons.Connectors,
        children: [
          { id: 'about-connectors', label: 'About Connectors', icon: Icons.Connectors },
          { id: 'connectors', label: 'All Connectors', icon: Icons.Connectors }
        ],
      },
      {
        id: 'knowledge-systems',
        label: 'Knowledge Systems',
        icon: Icons.KB,
        children: [
          { id: 'knowledge-base', label: 'Knowledge Base', icon: Icons.Database },
          { id: 'knowledge-graph', label: 'Knowledge Graph', icon: Icons.KB },
          { id: 'retrieval-augmented-generation', label: 'Retrieval Augmented Generation (RAG)', icon: Icons.Search },
          { id: 'agentic-etl', label: 'Agentic ETL', icon: Icons.Workflows },
        ],
      },
      {
        id: 'ai-agent-studio',
        label: 'AI Agent Studio',
        icon: Icons.Workflows,
        children: [
          { id: 'visual-workflow-builder', label: 'Visual Workflow Builder', icon: Icons.Workflows },
          { id: 'triggers', label: 'Triggers', icon: Icons.Triggers },
          { id: 'processing-agents', label: 'Processing Agents', icon: Icons.Agents },
          { id: 'terminators', label: 'Terminators', icon: Icons.Shield },
          { id: 'flow-control', label: 'Flow Control', icon: Icons.Workflows },
        ],
      },
      {
        id: 'cuvabot',
        label: 'CuvaBot',
        icon: Icons.Chat,
        children: [
          { id: 'conversational-queries', label: 'Conversational Queries', icon: Icons.Chat },
          { id: 'enterprise-search', label: 'Enterprise Search', icon: Icons.Search },
          { id: 'workflow-execution', label: 'Workflow Execution', icon: Icons.Workflows },
        ],
      },
    ],
  },
  {
    title: 'How-To Guides',
    items: [
      { id: 'how-to-connect-enterprise-systems', label: 'Connect Enterprise Systems', icon: Icons.Connectors },
      { id: 'build-knowledge-system', label: 'Build a Knowledge System', icon: Icons.Database },
      { id: 'create-ai-agent-workflow', label: 'Create an AI Agent Workflow', icon: Icons.Workflows },
      { id: 'configure-triggers-terminators', label: 'Configure Triggers and Terminators', icon: Icons.Triggers },
      {
        id: 'run-agents',
        label: 'Run Agents',
        icon: Icons.Agents,
        children: [
          { id: 'via-chat', label: 'Via Chat', icon: Icons.Chat },
          { id: 'via-api', label: 'Via API', icon: Icons.Search },
          { id: 'via-scheduler', label: 'Via Scheduler', icon: Icons.Cloud },
          { id: 'via-forms', label: 'Via Forms', icon: Icons.Book },
          { id: 'monitor-iterate-agents', label: 'Monitor and Iterate Agents', icon: Icons.Search },
        ],
      },
    ],
  },
  {
    title: 'Enterprise Implementation',
    items: [
      { id: 'implementation-overview', label: 'Implementation Overview', icon: Icons.Book },
      { id: 'four-step-client-rollout', label: 'Four Step Client Rollout', icon: Icons.User },
      { id: 'security-privacy-compliance', label: 'Security, Privacy, and Compliance', icon: Icons.Shield },
      {
        id: 'deployment-options',
        label: 'Deployment Options',
        icon: Icons.Cloud,
        children: [
          { id: 'cloud-deployment', label: 'Cloud Deployment', icon: Icons.Cloud },
          { id: 'on-prem-deployment', label: 'On-Prem Deployment', icon: Icons.Shield },
        ],
      },
      { id: 'scaling-across-teams-clients', label: 'Scaling Across Teams and Clients', icon: Icons.User },
    ],
  },
  {
    title: 'Reference',
    items: [
      { id: 'agent-lifecycle', label: 'Agent Lifecycle', icon: Icons.Agents },
      { id: 'trigger-types', label: 'Trigger Types', icon: Icons.Triggers },
      { id: 'connector-reference', label: 'Connector Reference', icon: Icons.Connectors },
      { id: 'knowledge-object-types', label: 'Knowledge Object Types', icon: Icons.KB },
      { id: 'execution-modes', label: 'Execution Modes', icon: Icons.Workflows },
      { id: 'audit-logs-explainability', label: 'Audit Logs and Explainability', icon: Icons.Shield },
      { id: 'glossary', label: 'Glossary', icon: Icons.Book },
    ],
  },
  {
    title: 'Examples and Use Cases',
    items: [
      { id: 'client-onboarding', label: 'Client Onboarding', icon: Icons.User },
      { id: 'kyc-aml-automation', label: 'KYC and AML Automation', icon: Icons.Shield },
      { id: 'invoice-payment-workflows', label: 'Invoice and Payment Workflows', icon: Icons.Database },
      { id: 'wealth-management-assistant', label: 'Wealth Management Assistant', icon: Icons.Agents },
      { id: 'm-and-a-analysis-workflow', label: 'M and A Analysis Workflow', icon: Icons.Workflows },
    ],
  },
  {
    title: 'Operations',
    items: [
      { id: 'monitoring-analytics', label: 'Monitoring and Analytics', icon: Icons.Search },
      { id: 'performance-metrics', label: 'Performance Metrics', icon: Icons.Database },
      { id: 'error-handling', label: 'Error Handling', icon: Icons.Shield },
      { id: 'versioning-updates', label: 'Versioning and Updates', icon: Icons.Templates },
    ],
  },
  {
    title: 'Help and Support',
    items: [
      { id: 'troubleshooting', label: 'Troubleshooting', icon: Icons.FAQ },
      { id: 'faqs', label: 'FAQs', icon: Icons.FAQ },
      { id: 'release-notes', label: 'Release Notes', icon: Icons.Book },
      { id: 'contact-support', label: 'Contact and Support', icon: Icons.Chat },
    ],
  },
];

export default docsSections;

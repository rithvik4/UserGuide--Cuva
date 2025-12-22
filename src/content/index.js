import welcome from './welcome';
import platformOverview from './platform-overview';
import quickstartFirstAgent from './quickstart-first-agent';
import architectureOverview from './architecture-overview';
import aiAgents from './ai-agents';
import agents from './agents';
import agentCreation from './agent-creation';
import workflows from './workflows';
import agenticWorkflows from './agentic-workflows';
import workflowBuilding from './workflow-building';
import workflowDesign from './workflow-design';
import triggers from './triggers';
import actionsExplained from './actions-explained';
import conditionalLogic from './conditional-logic';
import connectors from './connectors';
import aboutConnectors from './about-connectors';
import availableConnectors from './available-connectors';
import knowledgeSystemsKey from './knowledge-systems-keyconcepts';
import connectorsKc from './connectors-kc';
import cuvabotKc from './cuvabot-kc';
import connectorConfig from './connector-config';
import customConnector from './custom-connector';
import knowledgebase from './knowledgebase';
import knowledgebaseMgmt from './knowledgebase-mgmt';
import uploadingDocs from './uploading-docs';
import rolesPermissions from './roles-permissions';
import templates from './templates';
import sampleUseCases from './sample-use-cases';
import commonIssues from './common-issues';
import quickFixes from './quick-fixes';

// Help and Support Content
import faqs from './faqs';
import troubleshooting from './troubleshooting';
import releaseNotes from './release-notes';
import contactSupport from './contact-support';

// AI Agent Studio & Workflow Canvas Content
import aiAgentStudio from './ai-agent-studio';
import visualWorkflowBuilder from './visual-workflow-builder';
import processingAgents from './processing-agents';
import terminators from './terminators';
import flowControl from './flow-control';

// CuvaBot Content
import conversationalQueries from './conversational-queries';
import enterpriseSearch from './enterprise-search';
import workflowExecution from './workflow-execution';

// Knowledge Systems Core Content
import knowledgeSystems from './knowledge-systems';
import knowledgeBase from './knowledge-base';
import knowledgeGraph from './knowledge-graph';
import retrievalAugmentedGeneration from './retrieval-augmented-generation';
import agentsFramework from './agents-framework';
import agenticEtl from './agentic-etl';
import howAgentsWork from './how-agents-work';

const docsContent = {
  welcome,
  'platform-overview': platformOverview,
  'quickstart-first-agent': quickstartFirstAgent,
  'architecture-overview': architectureOverview,
  'agent-overview': agentsFramework,
  'how-agents-work': howAgentsWork,
  'ai-agents': aiAgents,
  'all-agents': agents,
  agents,
  'agent-creation': agentCreation,
  workflows,
  'agentic-workflows': agenticWorkflows,
  'workflow-building': workflowBuilding,
  'workflow-design': workflowDesign,
  triggers,
  'actions-explained': actionsExplained,
  'conditional-logic': conditionalLogic,
  connectors,
  'about-connectors': aboutConnectors,
  'available-connectors': availableConnectors,
  'knowledge-systems-keyconcepts': knowledgeSystemsKey,
  'connectors-kc': connectorsKc,
  'cuvabot-kc': cuvabotKc,
  'connector-config': connectorConfig,
  'custom-connector': customConnector,
  knowledgebase,
  'knowledgebase-mgmt': knowledgebaseMgmt,
  'uploading-docs': uploadingDocs,
  'roles-permissions': rolesPermissions,
  templates,
  'sample-use-cases': sampleUseCases,
  'common-issues': commonIssues,
  'quick-fixes': quickFixes,

  // AI Agent Studio Mappings
  'ai-agent-studio': aiAgentStudio,
  'visual-workflow-builder': visualWorkflowBuilder,
  'processing-agents': processingAgents,
  'terminators': terminators,
  'flow-control': flowControl,

  // Knowledge Systems Mappings
  'knowledge-systems': knowledgeSystems,
  'knowledge-base': knowledgeBase,
  'knowledge-graph': knowledgeGraph,
  'retrieval-augmented-generation': retrievalAugmentedGeneration,
  'agentic-etl': agenticEtl,

  // CuvaBot Mappings
  'conversational-queries': conversationalQueries,
  'enterprise-search': enterpriseSearch,
  'workflow-execution': workflowExecution,

  // Help and Support Mappings
  'faqs': faqs,
  'troubleshooting': troubleshooting,
  'release-notes': releaseNotes,
  'contact-support': contactSupport,
};

// aliases
docsContent['introduction'] = docsContent['welcome'];

export default docsContent;

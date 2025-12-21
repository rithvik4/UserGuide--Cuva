import welcome from './welcome';
import platformOverview from './platform-overview';
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

const docsContent = {
  welcome,
  'platform-overview': platformOverview,
  'ai-agents': aiAgents,
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
};

// aliases
docsContent['introduction'] = docsContent['welcome'];

export default docsContent;

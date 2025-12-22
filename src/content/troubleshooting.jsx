import React from 'react';

function DiagnosticCard({ title, children, accent = 'bg-white' }) {
  return (
    <div className={`p-5 rounded-lg shadow-sm border ${accent} flex flex-col h-full`}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="text-sm text-gray-700 flex-1">{children}</div>
    </div>
  );
}

export default {
  heading: 'Troubleshooting',
  body: (
    <>
      <div className="space-y-6">
        <section className="flex items-start gap-6">
          <div>
            <p className="mt-2 text-gray-600">Troubleshooting Fast, practical steps and smart diagnostics to get your agents and workflows running smoothly.</p>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12">
            <div className="grid grid-cols-3 gap-4 items-stretch">
              <DiagnosticCard title="Agent Health" accent="bg-white">
                Quick checks: agent status, recent executions, and last successful run. Use this card to jump to the agent details page.
              </DiagnosticCard>

              <DiagnosticCard title="Connector Status" accent="bg-white">
                Verify connector tokens, test connections, and review recent failures with one click from the connector settings.
              </DiagnosticCard>

              <DiagnosticCard title="Execution Traces" accent="bg-white">
                Explore step-by-step execution traces, error codes, and payload snapshots for fast root-cause analysis.
              </DiagnosticCard>
            </div>
          </div>

          <div className="col-span-8">
            <div className="mt-4 bg-gray-50 rounded-lg p-4 border">
              <h3 className="font-semibold">Guided troubleshooting playbooks</h3>
              <div className="mt-3 grid gap-3">
                <details className="p-3 bg-white rounded-md border">
                  <summary className="font-medium">Agent not responding</summary>
                  <div className="mt-2 text-sm text-gray-700">
                    1) Re-run the agent with a simple input. 2) Check model quotas and API keys. 3) Review the last 20 log lines for errors.
                  </div>
                </details>

                <details className="p-3 bg-white rounded-md border">
                  <summary className="font-medium">Workflow failing at a step</summary>
                  <div className="mt-2 text-sm text-gray-700">
                    1) Inspect the failing step inputs/outputs. 2) Validate connector responses. 3) Add a retry or compensate action.
                  </div>
                </details>

                <details className="p-3 bg-white rounded-md border">
                  <summary className="font-medium">Connector authentication errors</summary>
                  <div className="mt-2 text-sm text-gray-700">
                    Rotate credentials, test the connection, and check IP allowlists if requests are blocked.
                  </div>
                </details>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Diagnostics checklist</h4>
                <ul className="list-inside list-disc mt-2 text-sm text-gray-700">
                  <li>Agent/workflow id and last execution id</li>
                  <li>Connector used and credentials status</li>
                  <li>Relevant logs, screenshots, and timestamps</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-4">
            <DiagnosticCard title="Quick diagnostics" accent="bg-white">
              <div className="text-sm">
                <p className="mb-2">Copy the following to include in a support ticket:</p>
                <pre className="text-xs bg-gray-100 p-2 rounded break-words">AgentId </pre>
              </div>
            </DiagnosticCard>

            <DiagnosticCard title="Escalation guide" accent="bg-white">
              If an issue persists, open a ticket and include the diagnostics, steps you tried, and the business impact.
            </DiagnosticCard>

            <div className="rounded-md p-4 border bg-gradient-to-r from-indigo-50 to-white">
              <h4 className="font-semibold">Need live help?</h4>
              <p className="text-sm text-gray-700 mt-2">Use the Hub button to start a support conversation or email <a href="mailto:support@cuva.ai" className="text-indigo-600">support@cuva.ai</a>.</p>
            </div>
          </div>
        </section>

        
      </div>
    </>
  ),
<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes

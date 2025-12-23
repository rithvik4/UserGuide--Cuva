import React from 'react';
import { Icons } from '../lib/icons';

const Triggers = {
  // heading: "Triggers: Initiating the Action",
  body: (
    <>
      <div className="mb-12 space-y-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is a Trigger in Agentic Terms?</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            In the world of autonomous AI, an agent is essentially a dormant "brain" waiting for a signal. A <strong>Trigger</strong> is that specific signal—an event that wakes the agent up. It serves two critical functions:
          </p>
          <ul className="mt-4 space-y-2 ml-6 list-disc text-gray-600 dark:text-gray-400">
            <li><strong>Activation:</strong> It transitions the agent from a resting state to an active execution state.</li>
            <li><strong>Context Injection:</strong> It delivers the initial packet of information (the "payload") that the agent needs to understand <em>why</em> it woke up and <em>what</em> it needs to process.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Triggers in Cuva</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            On the Cuva platform, Triggers serve as the definitive <strong>"Gateway"</strong> for every workflow. They are not just start buttons; they strictly define the <strong>Context Payload</strong> schema. Whether it's a user's chat message or a JSON packet from a webhook, the Trigger ensures the agent receives structured, validated data before it ever begins its reasoning process.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* 1. Conversational Entry */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            1. Conversational Entry (Manual / On-Demand)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 ml-6">
            Use this to build <strong>Discovery Agents</strong> designed for open-ended, multi-turn dialogue.
          </p>
          <ul className="ml-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong className="text-gray-900 dark:text-white">How it Works:</strong> Initiated directly by a user via a button, command, or chatbot message.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Purpose:</strong> Best for internal support or research assistants where users explore topics dynamically.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Technical Example:</strong> A user types "Summarize this PDF" into a chat window to trigger the analysis.
            </li>
            <li className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-500">
              <strong className="text-blue-700 dark:text-blue-300">Data Context:</strong> The agent automatically tracks the session history, providing nodes with access to the full conversation thread and uploaded documents.
            </li>
          </ul>
        </div>

        {/* 2. Structured Request */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            2. Structured Request (Event-Based)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 ml-6">
            Use this for <strong>Process Agents</strong> that execute specific operations when data changes in your ecosystem.
          </p>
          <ul className="ml-6 space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong className="text-gray-900 dark:text-white">How it Works:</strong> Fires automatically when a specific action occurs in a connected application.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Purpose:</strong> Ideal for high-precision tasks like lead routing or ticket triaging.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Technical Example:</strong> The workflow starts instantly when a new row is added to a Google Sheet or a new email arrives in Gmail.
            </li>
            <li className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border-l-4 border-purple-500">
              <strong className="text-purple-700 dark:text-purple-300">Data Integrity:</strong> You must explicitly map these external fields using the <code>[[input_name]]</code> syntax to ensure the agent uses the correct data payload.
            </li>
          </ul>
        </div>

        {/* 3. Autonomous Sync */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            3. Autonomous Sync (Scheduled / Webhook)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 ml-6">
            Use this for <strong>Monitoring Agents</strong> that operate independently based on time or external system signals.
          </p>

          <div className="ml-6 mb-4">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Scheduled (Time-Based)</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
              <li><strong>How it Works:</strong> Executes at predetermined intervals or specific times.</li>
              <li><strong>Technical Example:</strong> An agent runs every Monday at 8 AM to generate a weekly executive status report.</li>
            </ul>
          </div>

          <div className="ml-6">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Webhook</h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
              <li><strong>How it Works:</strong> Fires instantly when an external system sends an HTTP request to a unique Cuva URL.</li>
              <li><strong>Technical Example:</strong> A third-party payment processor sends a notification after a successful transaction, triggering a post-purchase workflow.</li>
            </ul>
          </div>
        </div>

        {/* Managing Your Activations */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Managing Your Activations</h3>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 pl-2">
            <li className="flex gap-3">
              <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">The Active Ledger:</strong> All published agents must be toggled "On" in your Agent Library to begin responding to triggers.
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Execution Audits:</strong> Use the Run History panel to monitor every activation. You can filter by "Trigger Type" to see how many agents ran autonomously versus those started by users.
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Field Mapping Validation:</strong> If a node sidebar displays "Not valid for field mapping," it indicates that the current node is not receiving a compatible data type from the trigger.
              </div>
            </li>
          </ul>
        </div>

        {/* Activation Comparison Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/50 text-gray-900 dark:text-white text-sm">
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Conversational Entry</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Structured Request</th>
                  <th className="p-4 font-bold border-b border-slate-200 dark:border-slate-800">Autonomous Sync</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-900/20 text-sm">
                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Trigger Source</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">User Interaction</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">App Event (Gmail/Sheets)</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Time or API Webhook</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">User Interface</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Open Chat Window</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Fixed Input Form</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">None (Background)</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800/50">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Data Scope</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Full session history</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Specific event payload</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Pre-mapped system data</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Output Requirement</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Real-time "Respond"</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">"Respond" or Action</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">Must be a "Write Action"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  ),
};

export default Triggers;

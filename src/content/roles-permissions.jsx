import React from 'react';

export default {
  heading: 'Roles & Permissions',
  body: (
    <>
      <p className="mb-8 text-gray-500 text-lg leading-relaxed dark:text-gray-400">
        Cuva AI uses <strong>Role-Based Access Control (RBAC)</strong>. This is a simple way to manage who can see and change things in the platform. It helps your team work together safely by making sure everyone has the right level of access.
      </p>

      {/* Key Security Rules */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Key Security Rules</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Only What You Need</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Users only get access to the tools required for their specific job (Least Privilege).</p>
          </div>
          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Checks and Balances</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">We separate the people who build workflows from the people who run them.</p>
          </div>
          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Activity Tracking</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">The platform records every action so you always know who made a change and when.</p>
          </div>
        </div>
      </div>

      {/* User Roles Table */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">User Roles</h3>
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase text-gray-700 dark:text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Role</th>
                <th scope="col" className="px-6 py-3">Responsibility</th>
                <th scope="col" className="px-6 py-3">What they can do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">Admin</td>
                <td className="px-6 py-4">Platform Owner</td>
                <td className="px-6 py-4">Manage users, change security settings, and view all activity logs.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">Developer</td>
                <td className="px-6 py-4">Builder</td>
                <td className="px-6 py-4">Create AI agents, build workflows, and connect data sources.</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">Operator</td>
                <td className="px-6 py-4">User</td>
                <td className="px-6 py-4">Run existing workflows and monitor their progress.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/10 text-sm text-amber-800 dark:text-amber-200">
          <strong>Note:</strong> Developers cannot change user accounts. Operators cannot change how a workflow is built.
        </div>
      </div>

      {/* Where Permissions Apply */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Where Permissions Apply</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">Access is controlled in these specific areas:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Workspaces:</strong> General access to your team's area.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Workflows:</strong> Permission to create, edit, or just view specific automations.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Tools:</strong> Control over which AI tools can be used.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Knowledge:</strong> Access to the documents and data the AI learns from.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
            <span className="text-gray-700 dark:text-gray-300"><strong>Connectors:</strong> Permission to use links to outside apps (like Slack or Email).</span>
          </li>
        </ul>
      </div>

      {/* Monitoring & Safety + Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Monitoring & Safety</h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">To keep your data safe, Cuva AI tracks the following:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-md">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              <div className="text-sm">
                <strong className="block text-gray-900 dark:text-white">User Logs</strong>
                <span className="text-gray-500 dark:text-gray-400">A list of every action taken by every user.</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-md">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <div className="text-sm">
                <strong className="block text-gray-900 dark:text-white">Run History</strong>
                <span className="text-gray-500 dark:text-gray-400">A full record of what the AI did during a task (io logs).</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-md">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="text-sm">
                <strong className="block text-gray-900 dark:text-white">Change History</strong>
                <span className="text-gray-500 dark:text-gray-400">A record of any time a permission or setting was updated.</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h3>
          <div className="space-y-3">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 rounded-r-md">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">Limit Admins</h4>
              <p className="text-sm text-indigo-800 dark:text-indigo-300 mt-1">Only give the Admin role to one or two trusted people.</p>
            </div>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 rounded-r-md">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">Separate Tasks</h4>
              <p className="text-sm text-indigo-800 dark:text-indigo-300 mt-1">Keep the "Builder" (Developer) and "User" (Operator) roles separate to avoid mistakes.</p>
            </div>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 rounded-r-md">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">Regular Check-ups</h4>
              <p className="text-sm text-indigo-800 dark:text-indigo-300 mt-1">Once a month, check your user list to make sure everyone still has the correct role.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

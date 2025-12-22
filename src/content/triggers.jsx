import React from 'react';
import { Icons } from '../lib/icons';

const Triggers = {
  heading: "Triggers: Initiating the Action",
  body: (
    <>
      <p>
        <strong>Triggers</strong> are the starting events that launch a workflow. Every automation begins with a prompt or a pulse that tells the system: "It's time to work." Cuva AI provides three distinct styles of triggers to fit any business operational model.
      </p>

      <div className="space-y-6 mt-10">
        <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
              <Icons.Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">1. On Schedule (Time-Based)</h3>
          </div>
          <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
            Perfect for recurring operations that don't need human intervention. You can set workflows to run at specific intervals—hourly, daily, or on custom schedules.
          </p>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 italic text-[13px] text-gray-500 dark:text-gray-400">
            Example: "Every Monday at 9:00 AM, trigger the 'Weekly Compliance Audit' agent to scan all new files."
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center">
              <Icons.Triggers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">2. Event-Based (Integration-Driven)</h3>
          </div>
          <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
            React in real-time to changes in your enterprise ecosystem. These triggers fire when a specific action happens in a connected application.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            <li className="flex items-center gap-3 text-[13px] text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              New email arrival (Gmail/Outlook)
            </li>
            <li className="flex items-center gap-3 text-[13px] text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              New record in CRM (Salesforce)
            </li>
            <li className="flex items-center gap-3 text-[13px] text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              File upload to SharePoint/S3
            </li>
            <li className="flex items-center gap-3 text-[13px] text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              Webhook from external system
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
              <Icons.Chat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">3. Manual (On-Demand)</h3>
          </div>
          <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
            Sometimes you need an agent to work right now. Manual triggers allow users to launch workflows via:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-green-500/30 transition-colors">
              <span className="text-[14px] font-bold text-gray-900 dark:text-white">Natural Language Chat</span>
              <span className="text-[10px] font-bold bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded uppercase tracking-wider">CuvaBot</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-colors">
              <span className="text-[14px] font-bold text-gray-900 dark:text-white">API Call</span>
              <span className="text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-1 rounded uppercase tracking-wider">REST</span>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

export default Triggers;

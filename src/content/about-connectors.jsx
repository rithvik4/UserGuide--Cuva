import React from 'react';

export default {
    heading: 'About Connectors',
    body: (
        <>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                Connectors are the critical intake valves of the Cuva AI ecosystem. They securely bridge your external enterprise applications with Cuva's Knowledge Graph, enabling agents to perceive, search, and act upon data that resides in siloed systems.
            </p>

            {/* Core Functions Section - Modeled after the "Why it matters" section but Cuva-branded */}
            <div className="space-y-8 mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">Core Capabilities</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Unified Ingestion</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Connectors don't just "read" files; they fetch metadata, activity logs, permissions, and entity relationships. A Slack connector captures not just the message, but who sent it, when, and in which channel context.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Permission Enforcement</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            <strong>Security First:</strong> Cuva mirrors the access control lists (ACLs) of the source system. If a user cannot see a document in Google Drive, they cannot find it via Cuva Search or Agents.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4">
                            <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Live Synchronization</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Connectors support both full crawls and incremental updates. When a Jira ticket status changes, Cuva detects the event and updates the Knowledge Graph in near real-time.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4">
                            <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Action Enablement</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            Unlike passive search indexers, Cuva connectors are bidirectional. They allow agents to <em>write back</em>—sending emails, updating rows, or posting messages.
                        </p>
                    </div>
                </div>
            </div>

            {/* Types of Connectors Section */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">Connector Types</h3>

                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 shadow-sm rounded-xl">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-3xl font-bold">N</div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Native Connectors</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-[15px]">
                                Pre-built, fully managed integrations for popular enterprise SaaS tools. These require zero code to set up—just OAuth authentication.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">Google Workspace</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">Microsoft 365</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">Salesforce</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">ServiceNow</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">Slack</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 shadow-sm rounded-xl">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-purple-100 text-purple-600 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-3xl font-bold">P</div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Push API Connectors</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-[15px]">
                                For internal tools or proprietary databases where a native connector doesn't exist. You can push JSON data directly into Cuva's index using our secure REST API.
                            </p>
                            <div className="flex gap-2">
                                <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">View API Documentation →</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 shadow-sm rounded-xl">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-orange-100 text-orange-600 dark:bg-orange-900/20 rounded-lg flex items-center justify-center text-3xl font-bold">W</div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Web Crawlers</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-[15px]">
                                Configurable crawlers to index public documentation, support sites, or internal intranets that are accessible via HTTP but lack an API.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">Sitemap Support</span>
                                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-full">JS Rendering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ),
};

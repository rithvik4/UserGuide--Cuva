import React from 'react';

export default {
    heading: 'Enterprise Search',
    body: (
        <>
            <p className="mb-10 text-gray-500">Break down data silos with a unified search interface that indexes your entire enterprise ecosystem—from cloud storage and SaaS apps to internal databases.</p>

            <div className="space-y-8">
                <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">The Unified Knowledge Layer</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">
                        Enterprise Search in Cuva AI goes beyond simple file matching. It creates a semantic bridge between disparate systems like Salesforce, SharePoint, Slack, and your local PDFs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-slate-100 dark:border-slate-800 text-center">
                            <div className="text-xl font-bold text-blue-600 mb-1">50+</div>
                            <div className="text-[11px] uppercase tracking-wider text-gray-400">Native Connectors</div>
                        </div>
                        <div className="p-4 border border-slate-100 dark:border-slate-800 text-center">
                            <div className="text-xl font-bold text-blue-600 mb-1">Sub-Sec</div>
                            <div className="text-[11px] uppercase tracking-wider text-gray-400">Search Latency</div>
                        </div>
                        <div className="p-4 border border-slate-100 dark:border-slate-800 text-center">
                            <div className="text-xl font-bold text-blue-600 mb-1">100%</div>
                            <div className="text-[11px] uppercase tracking-wider text-gray-400">Data Encryption</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">Semantic Understanding</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            Search by concept, not just keywords. If you search for "onboarding delays," CuvaBot finds documents mentioning "new hire bottlenecks," "training lag," and "hardware delivery issues" across all connected platforms.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">Access-Aware Retrieval</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            Enterprise Search respects your existing permission structures. If a user doesn't have permission to view a file in SharePoint, it will never appear in their CuvaBot search results.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2">Deep Content Indexing</h4>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 dark:text-gray-400">
                            We index more than just titles. CuvaBot searches through the content of images (via OCR), recorded meeting transcripts, and complex architectural diagrams to find the answer you need.
                        </p>
                    </div>
                </div>
            </div>
        </>
    ),
};

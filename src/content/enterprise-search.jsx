import React from 'react';

export default {
    // heading: 'Enterprise Search',
    body: (
        <>
            <>
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">The Unified Knowledge Layer</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                        Enterprise Search in Cuva AI goes beyond simple file matching. It creates a semantic bridge between disparate systems like Salesforce, SharePoint, Slack, and your local PDFs, enabling Cuvabot to retrieve answers from anywhere in your ecosystem.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Semantic Understanding</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Search by concept, not just keywords. If you search for "onboarding delays," Cuvabot finds documents mentioning "new hire bottlenecks," "training lag," and "hardware delivery issues" across all connected platforms.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Access-Aware Retrieval</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Enterprise Search respects your existing permission structures. If a user doesn't have permission to view a file in SharePoint, it will never appear in their Cuvabot search results.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div>
                                <strong className="block text-gray-900 dark:text-white mb-1">Deep Content Indexing</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We index more than just titles. Cuvabot searches through the content of images (via OCR), recorded meeting transcripts, and complex architectural diagrams to find the answer you need.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-1">50+</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Native Connectors</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-1">Sub-Sec</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Search Latency</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-1">100%</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Data Encryption</div>
                        </div>
                    </div>
                </div>
            </>
        </>
    ),
};

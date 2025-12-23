import React from 'react';
import kbStep1 from '../assets/docs/kb-step-1.png';
import kbStep2 from '../assets/docs/kb-step-2.png';
import kbStep3 from '../assets/docs/kb-step-3.png';

const KnowledgeBase = {
    // heading: "Enterprise Knowledge Base",
    body: (
        <>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is a Knowledge Base?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    A Knowledge Base serves as the curated repository of domain-specific intelligence and the long-term memory for your AI. By storing verified facts, technical specifications, and internal documentation in an optimized format, it provides the AI with a grounded "Source of Truth" for instant retrieval. Unlike general AI training, a Knowledge Base ensures that your agent’s responses are accurate, contextually relevant, and synchronized with your most current organizational data.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connecting Data Sources</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    To integrate your organization's intelligence into the Studio, navigate to the Knowledge Sources section and select Add Source.
                </p>
                <div className="space-y-3 mb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Supported Connectors:</strong> Choose from Google Drive, SharePoint, or Public URLs.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Authentication:</strong> You will be prompted to authenticate the connection and select specific folders or files for indexing.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Indexing Logic:</strong> Once added, the system performs a Sync and Ingestion process, transforming unstructured documents into an AI-optimized vector format (embeddings) ready for use in any Agent workflow.
                    </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Enabling Auto-Sync & Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    To ensure your AI Agent's intelligence remains current, locate the Auto-sync settings within your Knowledge Base dashboard.
                </p>
                <div className="space-y-3 mb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Intervals:</strong> Select a synchronization frequency (e.g., Hourly, Daily,Weekly or Custom) to automatically fetch and re-index updated files.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Automation:</strong> This eliminates manual updates, ensuring agents reference the most recent documentation versions in real-time.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Monitoring:</strong> Use the Sync Status indicator to track the health of your data pipeline and verify successful ingestion.
                    </p>
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Create a Knowledge Base in Cuva Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Creating a Knowledge Base (KB) is the most effective way to give your AI agent "smarts" by providing it with a private library of your own documents and data.
                </p>
            </div>

            <div className="space-y-20 mt-10">
                {/* Step 1 */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 flex items-center tracking-tight">
                        <span className="w-8 h-8 bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 text-[15px] font-bold">1</span>
                        Step 1: Create a New Knowledge Base
                    </h3>

                    <div className="border border-slate-200 dark:border-slate-700 shadow-lg mb-10">
                        <img src={kbStep1} alt="Create Knowledge Base" className="w-full h-auto" />
                    </div>

                    <div>
                        <p className="text-[16px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">The first step is to build a container for your information.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Open the Studio</strong> Navigate to the Knowledge Base section in your sidebar.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-bold">2</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Start a New KB</strong> Click the <span className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-[11px] font-bold">+ Create New</span> button.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-bold">3</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Name It</strong> Give it a clear name (e.g., "Product Manuals 2025") for easy discovery.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 flex items-center tracking-tight">
                        <span className="w-8 h-8 bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-4 text-[15px] font-bold">2</span>
                        Step 2: Upload Files and Content
                    </h3>

                    <div className="border border-slate-200 dark:border-slate-700 shadow-lg mb-10">
                        <img src={kbStep2} alt="Upload Files" className="w-full h-auto" />
                    </div>

                    <div>
                        <p className="text-[16px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">Once your KB is created, you need to populate it with data.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-purple-500/10 text-purple-600 flex items-center justify-center text-[10px] font-bold">1</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Supported Formats</strong> Upload PDFs, Word documents (.docx), and Text files (.txt).
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-purple-500/10 text-purple-600 flex items-center justify-center text-[10px] font-bold">2</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">How to Upload</strong> Drag and drop your documents into the upload zone.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-purple-500/10 text-purple-600 flex items-center justify-center text-[10px] font-bold">3</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Processing</strong> Wait while the system semantically indexes files.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 flex items-center tracking-tight">
                        <span className="w-8 h-8 bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center mr-4 text-[15px] font-bold">3</span>
                        Step 3: Chat with Your Knowledge
                    </h3>

                    <div className="border border-slate-200 dark:border-slate-700 shadow-lg mb-10">
                        <img src={kbStep3} alt="Query Knowledge Base" className="w-full h-auto" />
                    </div>

                    <div>
                        <p className="text-[16px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">Test if the Knowledge Base understands the information you uploaded.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">1</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Open Chat</strong> Navigate to the platform's chat or preview window.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">2</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Ask a Question</strong> Type a specific question about your documents.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">3</div>
                                <div className="text-[15px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Check Citations</strong> The KB will provide citations for high data accuracy.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    ),
};

export default KnowledgeBase;

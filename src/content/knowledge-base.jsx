import React from 'react';
import kbStep1 from '../assets/docs/kb-step-1.png';
import kbStep2 from '../assets/docs/kb-step-2.png';
import kbStep3 from '../assets/docs/kb-step-3.png';

const KnowledgeBase = {
    heading: "Enterprise Knowledge Base",
    body: (
        <>
            <p>
                Creating a Knowledge Base (KB) is the most effective way to give your AI agent "smarts" by providing it with a private library of your own documents and data.
            </p>

            <div className="space-y-20 mt-10">
                {/* Step 1 */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 flex items-center tracking-tight">
                        <span className="w-8 h-8 bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 text-[13px] font-bold">1</span>
                        Step 1: Create a New Knowledge Base
                    </h3>

                    <div className="border border-slate-200 dark:border-slate-700 shadow-lg mb-10">
                        <img src={kbStep1} alt="Create Knowledge Base" className="w-full h-auto" />
                    </div>

                    <div>
                        <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">The first step is to build a container for your information.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Open the Studio</strong> Navigate to the Knowledge Base section in your sidebar.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-bold">2</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Start a New KB</strong> Click the <span className="inline-block px-2 py-0.5 bg-blue-500/10 text-blue-600 rounded text-[11px] font-bold">+ Create New</span> button.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px] font-bold">3</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Name It</strong> Give it a clear name (e.g., "Product Manuals 2025") for easy discovery.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 flex items-center tracking-tight">
                        <span className="w-8 h-8 bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-4 text-[13px] font-bold">2</span>
                        Step 2: Upload Files and Content
                    </h3>

                    <div className="border border-slate-200 dark:border-slate-700 shadow-lg mb-10">
                        <img src={kbStep2} alt="Upload Files" className="w-full h-auto" />
                    </div>

                    <div>
                        <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">Once your KB is created, you need to populate it with data.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-purple-500/10 text-purple-600 flex items-center justify-center text-[10px] font-bold">1</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Supported Formats</strong> Upload PDFs, Word documents (.docx), and Text files (.txt).
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-purple-500/10 text-purple-600 flex items-center justify-center text-[10px] font-bold">2</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">How to Upload</strong> Drag and drop your documents into the upload zone.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-purple-500/10 text-purple-600 flex items-center justify-center text-[10px] font-bold">3</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Processing</strong> Wait while the system semantically indexes files.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-8 flex items-center tracking-tight">
                        <span className="w-8 h-8 bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center mr-4 text-[13px] font-bold">3</span>
                        Step 3: Chat with Your Knowledge
                    </h3>

                    <div className="border border-slate-200 dark:border-slate-700 shadow-lg mb-10">
                        <img src={kbStep3} alt="Query Knowledge Base" className="w-full h-auto" />
                    </div>

                    <div>
                        <p className="text-[14px] leading-relaxed text-gray-500 dark:text-gray-400 mb-6">Test if the Knowledge Base understands the information you uploaded.</p>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">1</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Open Chat</strong> Navigate to the platform's chat or preview window.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">2</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
                                    <strong className="text-gray-900 dark:text-white block mb-1">Ask a Question</strong> Type a specific question about your documents.
                                </div>
                            </li>
                            <li className="flex flex-col gap-3">
                                <div className="w-6 h-6 bg-green-500/10 text-green-600 flex items-center justify-center text-[10px] font-bold">3</div>
                                <div className="text-[13.5px] text-gray-600 dark:text-gray-400 leading-normal">
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

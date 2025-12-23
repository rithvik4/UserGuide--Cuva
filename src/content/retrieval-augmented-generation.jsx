import React from 'react';

const RetrievalAugmentedGeneration = {
    heading: "Retrieval Augmented Generation (RAG)",
    body: (
        <>
            <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is RAG?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Retrieval-Augmented Generation (RAG) is a technique that enhances the capabilities of Large Language Models (LLMs) by connecting them to your trusted internal data. Instead of relying solely on pre-trained knowledge, RAG allows the AI to "look up" relevant information from your specific documents—like manuals, policies, or codebases—before generating an answer. This grounds the AI's responses in facts, making it far more accurate and relevant to your unique business context.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Why use RAG?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Standard AI models are powerful but have limitations: they can hallucinate (make things up), their knowledge is cut off at a certain date, and they know nothing about your private business data. RAG solves these critical issues.
                </p>
                <div className="space-y-3 mb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Accuracy & Trust:</strong> By citing real sources from your Knowledge Base, RAG drastically reduces hallucinations, ensuring answers are factual and verifiable.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Up-to-Date Information:</strong> You don't need to retrain the AI model when facts change. Simply update the document in your Knowledge Base, and the agent instantly has access to the latest version.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">Data Privacy:</strong> Your sensitive data stays within your secure environment. The LLM processes snippets of text to generate an answer but never retains or trains on your proprietary information.
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Cuva Platform implements a "Closed-Loop" RAG architecture to strictly govern data flow. This design ensures that all document parsing, embedding, and retrieval operations are executed locally within your secure infrastructure, preventing proprietary data from being exposed to or used for training external public models.
                </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">1. The "Closed-Loop" RAG Advantage</h3>
            <p>
                To give you the most accurate answers while maintaining total privacy, we manage the entire AI process internally:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-12">
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-[16px]">Custom Chunking</div>
                    <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">We use local Python libraries to split documents. No full files are ever transmitted elsewhere.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-[16px]">Local Embedding</div>
                    <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">We use locally-hosted models to convert text into vectors, keeping the data's "meaning" private.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-[16px]">Private Vector Store</div>
                    <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">Resulting vectors are stored in a secure internal database isolated from the public internet.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">2. Strict Access Denial</h3>
            <div className="bg-red-500/5 dark:bg-red-500/10 border-l-4 border-red-500 p-8 mb-12 rounded-r-3xl">
                <p className="text-red-700 dark:text-red-400 mb-6 font-bold text-[17px]">
                    The system is configured with a strict "No Third-Party" access policy:
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <span className="text-red-500 text-lg">🛡️</span>
                        <span className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400"><strong>Zero External Calls:</strong> The RAG pipeline runs entirely within your dedicated secure environment.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-red-500 text-lg">🛑</span>
                        <span className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400"><strong>Deny by Default:</strong> Any request from an un-whitelisted external vendor is automatically blocked.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-red-500 text-lg">🔒</span>
                        <span className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400"><strong>No Data Sharing:</strong> Your data is never shared with outside companies for model training or any other purpose.</span>
                    </li>
                </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">3. Enterprise Safeguards</h3>
            <div className="grid grid-cols-1 gap-4 mb-12">
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-[11px]">ENC</div>
                    <div className="ml-5">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Encryption</h4>
                        <p className="text-[15px] text-gray-500 dark:text-gray-400">All data is encrypted both in transit and at rest using enterprise standards.</p>
                    </div>
                </div>
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-[11px]">ACL</div>
                    <div className="ml-5">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Access Control (RBAC)</h4>
                        <p className="text-[15px] text-gray-500 dark:text-gray-400">You decide who can see which Knowledge Base with granular permissions.</p>
                    </div>
                </div>
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-[11px]">LOG</div>
                    <div className="ml-5">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Audit Logs</h4>
                        <p className="text-[15px] text-gray-500 dark:text-gray-400">Comprehensive logging of every retrieval action for full transparency and auditability.</p>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Why This Matters</h4>
                <p className="text-[16px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                    This setup means you can upload highly sensitive files (like financial audits or HR records) with total confidence. The AI "learns" from your files to help you, but your data never leaves your control and is never used to train other models.
                </p>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-[12px] text-slate-400 italic">
                    Our Commitment: Your intellectual property remains yours. By using custom-coded Python RAG instead of third-party shortcuts, we ensure that your AI is powerful, private, and protected.
                </div>
            </div>
        </>
    ),
};

export default RetrievalAugmentedGeneration;

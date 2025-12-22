import React from 'react';

const RetrievalAugmentedGeneration = {
    heading: "Retrieval Augmented Generation (RAG)",
    body: (
        <>
            <div className="bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-3xl p-10 mb-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                <h2 className="text-2xl font-bold mb-4 relative z-10 tracking-tight">Closed-Loop RAG Architecture</h2>
                <p className="text-slate-400 text-[15px] leading-relaxed max-w-2xl relative z-10">
                    By using custom Python logic, we maintain full control over the core pillars of RAG. We ensure your data stays inside your secure environment with a "Closed-Loop" system.
                </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">1. The "Closed-Loop" RAG Advantage</h3>
            <p>
                To give you the most accurate answers while maintaining total privacy, we manage the entire AI process internally:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-12">
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-[14px]">Custom Chunking</div>
                    <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">We use local Python libraries to split documents. No full files are ever transmitted elsewhere.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-[14px]">Local Embedding</div>
                    <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">We use locally-hosted models to convert text into vectors, keeping the data's "meaning" private.</p>
                </div>
                <div className="p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-2xl shadow-sm hover:border-blue-500/30 transition-colors">
                    <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-[14px]">Private Vector Store</div>
                    <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400">Resulting vectors are stored in a secure internal database isolated from the public internet.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">2. Strict Access Denial</h3>
            <div className="bg-red-500/5 dark:bg-red-500/10 border-l-4 border-red-500 p-8 mb-12 rounded-r-3xl">
                <p className="text-red-700 dark:text-red-400 mb-6 font-bold text-[15px]">
                    The system is configured with a strict "No Third-Party" access policy:
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <span className="text-red-500 text-lg">🛡️</span>
                        <span className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400"><strong>Zero External Calls:</strong> The RAG pipeline runs entirely within your dedicated secure environment.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-red-500 text-lg">🛑</span>
                        <span className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400"><strong>Deny by Default:</strong> Any request from an un-whitelisted external vendor is automatically blocked.</span>
                    </li>
                    <li className="flex items-start gap-4">
                        <span className="text-red-500 text-lg">🔒</span>
                        <span className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400"><strong>No Data Sharing:</strong> Your data is never shared with outside companies for model training or any other purpose.</span>
                    </li>
                </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">3. Enterprise Safeguards</h3>
            <div className="grid grid-cols-1 gap-4 mb-12">
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-[11px]">ENC</div>
                    <div className="ml-5">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Encryption</h4>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400">All data is encrypted both in transit and at rest using enterprise standards.</p>
                    </div>
                </div>
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-[11px]">ACL</div>
                    <div className="ml-5">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Access Control (RBAC)</h4>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400">You decide who can see which Knowledge Base with granular permissions.</p>
                    </div>
                </div>
                <div className="flex items-center bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-green-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center font-bold text-[11px]">LOG</div>
                    <div className="ml-5">
                        <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">Audit Logs</h4>
                        <p className="text-[13px] text-gray-500 dark:text-gray-400">Comprehensive logging of every retrieval action for full transparency and auditability.</p>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Why This Matters</h4>
                <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
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

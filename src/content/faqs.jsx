import React from 'react';

const questions = [
  {
    q: 'Who should use Cuva?',
    a: 'Cuva is designed for product, data, and automation teams that want to operationalize AI-driven workflows at scale. It fits both enterprise and SMB deployments.',
  },
  {
    q: 'What is required to use Cuva?',
    a: 'A browser, a user account, and access to any connectors you want to use. For advanced deployments, follow the On-Prem or Cloud deployment guides.',
  },
  {
    q: 'Do I need coding skills to use Cuva?',
    a: 'No. The visual agent studio provides low-code building blocks. Developers can extend connectors and actions when customization is needed.',
  },
  {
    q: 'How do I get logs for support?',
    a: 'Open the execution history, copy the execution id, and download the log bundle. Attach those to a support ticket for faster resolution.',
  },
];

export default {
  heading: 'Frequently Asked Questions',
  body: (
    <>
      <div className="grid grid-cols-12 gap-10">
        <aside className="col-span-12 lg:col-span-5">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Find answers to common questions about the Cuva AI platform, from initial setup to advanced enterprise orchestration.
          </p>

          <p className="mt-8 text-[17px] font-bold text-gray-900 dark:text-white">Can't find what you are looking for?</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">We would like to chat with you.</p>

          <div className="mt-8 flex items-center gap-6 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" fill="#fff" />
              </svg>
            </div>

            <div className="text-sm">
              <p className="font-bold text-gray-900 dark:text-white">Need Personal Help?</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Open the Hub or start a support ticket for personalized assistance.</p>
            </div>
          </div>
        </aside>

        <main className="col-span-12 lg:col-span-7">
          <div className="mb-6">
            <div className="flex items-center border dark:border-slate-800 rounded-xl px-4 py-3 bg-white dark:bg-slate-900 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <svg className="w-5 h-5 text-gray-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input className="flex-1 outline-none bg-transparent text-[17px]" placeholder="Search FAQs..." />
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((item, idx) => (
              <details key={idx} className="border dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/50 hover:border-blue-500/30 transition-colors group">
                <summary className="cursor-pointer list-none font-bold text-gray-900 dark:text-white flex justify-between items-center text-[17px]">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed border-t dark:border-slate-800 pt-4">
                  {item.a}
                </div>
              </details>
            ))}

            <details className="border dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/50 hover:border-blue-500/30 transition-colors group">
              <summary className="cursor-pointer list-none font-bold text-gray-900 dark:text-white flex justify-between items-center text-[17px]">
                Do I need design skills to create agents?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed border-t dark:border-slate-800 pt-4">
                No — the Agent Studio provides templates and drag-and-drop tooling. Designers can add branded prompts and messages as needed.
              </div>
            </details>

            <details className="border dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/50 hover:border-blue-500/30 transition-colors group">
              <summary className="cursor-pointer list-none font-bold text-gray-900 dark:text-white flex justify-between items-center text-[17px]">
                Why should I choose Cuva over similar tools?
                <span className="text-gray-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="mt-4 text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed border-t dark:border-slate-800 pt-4">
                Cuva focuses on production-grade agent orchestration, connector templates, and observability to help teams run AI at scale.
              </div>
            </details>
          </div>
        </main>
      </div>
    </>
  ),
};

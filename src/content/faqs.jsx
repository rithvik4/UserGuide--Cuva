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
      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-5 pr-6">
          
          <p className="mt-6 text-gray-600">Can't find what you are looking for? <br></br>We would like to chat with you.</p>

          <div className="mt-8 flex items-center gap-6">
            <div className="w-20 h-19 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H8l-5 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" fill="#fff" />
              </svg>
            </div>

            <div className="text-sm text-gray-700">
              <p className="text-xs text-gray-500 mt-1">Open the Hub or start a support ticket for personalised help.</p>
            </div>
          </div>
        </aside>

        <main className="col-span-7">
          <div className="mb-6">
            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
            <div className="flex items-center border rounded-md px-3 py-2 shadow-sm">
              <svg className="w-5 h-5 text-gray-400 mr-3" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input id="faq-search" className="flex-1 outline-none" placeholder="What are you looking for?" />
            </div>
          </div>

          <div className="space-y-3">
            {questions.map((item, idx) => (
              <details key={idx} className="border rounded-md p-4">
                <summary className="cursor-pointer list-none font-medium">{item.q}</summary>
                <div className="mt-3 text-sm text-gray-700">{item.a}</div>
              </details>
            ))}

            <details className="border rounded-md p-4">
              <summary className="cursor-pointer list-none font-medium">Do I need design skills to create agents?</summary>
              <div className="mt-3 text-sm text-gray-700">No — the Agent Studio provides templates and drag-and-drop tooling. Designers can add branded prompts and messages as needed.</div>
            </details>

            <details className="border rounded-md p-4">
              <summary className="cursor-pointer list-none font-medium">Why should I choose Cuva over similar tools?</summary>
              <div className="mt-3 text-sm text-gray-700">Cuva focuses on production-grade agent orchestration, connector templates, and observability to help teams run AI at scale.</div>
            </details>
          </div>
        </main>
      </div>
    </>
  ),
<<<<<<< Updated upstream
<<<<<<< Updated upstream
};
=======
};
>>>>>>> Stashed changes
=======
};
>>>>>>> Stashed changes

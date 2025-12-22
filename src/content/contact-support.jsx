import React from 'react';

function ContactCard({ title, children }) {
<<<<<<< Updated upstream
  return (
    <div className="rounded-lg border p-6 bg-white shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}

export default {
  heading: 'Contact and Support',
  body: (
    <>
      <p className="mt-2 text-gray-600">We’re here to help — choose the channel that best matches your needs.</p>

      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-7 space-y-4">
          <ContactCard title="Support Portal">
            Open a ticket from the <strong>Hub</strong> for tracked issues and feature requests. Attach execution ids, logs, and screenshots for faster triage.
          </ContactCard>

          <ContactCard title="What to include in a ticket">
            <ul className="list-disc ml-5 space-y-1">
              <li>Clear description of the problem and expected behavior.</li>
              <li>Agent or workflow id, execution id, and timestamps.</li>
              <li>Steps to reproduce, configuration snippets, and screenshots.</li>
            </ul>
          </ContactCard>

          <ContactCard title="Service levels & priority">
            Our standard response target is within one business day for non-critical issues. For production-impacting incidents, mark the ticket as <strong>High priority</strong> and include business impact details.
          </ContactCard>
        </div>

        <aside className="col-span-5 space-y-4">
          <ContactCard title="Email support">
            For account or billing questions, email <a href="mailto:support@cuva.ai" className="text-indigo-600">support@cuva.ai</a>. Expect a response within one business day.
          </ContactCard>

          <ContactCard title="Enterprise accounts">
            Enterprise customers can reach their assigned Customer Success Manager for onboarding, integrations, and priority support.
          </ContactCard>

          <div className="rounded-lg border p-4 bg-gradient-to-r from-indigo-50 to-white">
            <h4 className="font-semibold">Quick contact</h4>
            <p className="text-sm text-gray-700 mt-2">Prefer instant help? Click the <strong>Hub</strong> button in the top-right to start a live conversation with our support team.</p>
          </div>
        </aside>
      </div>
    </>
  ),
=======
    return (
        <div className="rounded-lg border p-6 bg-white shadow-sm dark:bg-slate-900/50 dark:border-slate-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h4>
            <div className="text-sm text-gray-700 dark:text-gray-400">{children}</div>
        </div>
    );
}

export default {
    heading: 'Contact and Support',
    body: (
        <>
            <p className="mt-2 text-gray-600 dark:text-gray-400">We’re here to help — choose the channel that best matches your needs.</p>

            <div className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-12 lg:col-span-7 space-y-4">
                    <ContactCard title="Support Portal">
                        Open a ticket from the <strong>Hub</strong> for tracked issues and feature requests. Attach execution ids, logs, and screenshots for faster triage.
                    </ContactCard>

                    <ContactCard title="What to include in a ticket">
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Clear description of the problem and expected behavior.</li>
                            <li>Agent or workflow id, execution id, and timestamps.</li>
                            <li>Steps to reproduce, configuration snippets, and screenshots.</li>
                        </ul>
                    </ContactCard>

                    <ContactCard title="Service levels & priority">
                        Our standard response target is within one business day for non-critical issues. For production-impacting incidents, mark the ticket as <strong>High priority</strong> and include business impact details.
                    </ContactCard>
                </div>

                <aside className="col-span-12 lg:col-span-5 space-y-4">
                    <ContactCard title="Email support">
                        For account or billing questions, email <a href="mailto:support@cuva.ai" className="text-blue-600 dark:text-blue-400 hover:underline">support@cuva.ai</a>. Expect a response within one business day.
                    </ContactCard>

                    <ContactCard title="Enterprise accounts">
                        Enterprise customers can reach their assigned Customer Success Manager for onboarding, integrations, and priority support.
                    </ContactCard>

                    <div className="rounded-lg border p-4 bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900 dark:border-slate-800">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Quick contact</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">Prefer instant help? Click the <strong>Hub</strong> button in the top-right to start a live conversation with our support team.</p>
                    </div>
                </aside>
            </div>
        </>
    ),
>>>>>>> Stashed changes
};

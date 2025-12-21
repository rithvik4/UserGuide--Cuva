import React from 'react';

export default {
  heading: 'User roles & permissions (Admin, Builder, Viewer)',
  body: (
    <>
      <ul className="list-disc ml-6 mt-4 space-y-1">
        <li><strong>Admin:</strong> Full access, manage users and settings</li>
        <li><strong>Builder:</strong> Create and manage agents, workflows, and integrations</li>
        <li><strong>Viewer:</strong> Read-only access to documentation and reports</li>
      </ul>
    </>
  ),
};

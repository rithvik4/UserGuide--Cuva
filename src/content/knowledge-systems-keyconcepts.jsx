import React from 'react';

export default {
  heading: 'Knowledge Systems (Knowledge Base, RAG)',
  body: (
    <>
      <p className="text-gray-700 dark:text-gray-200">
        Knowledge Systems in Cuva AI act as the platform's advanced "Digital Brain." The foundational layer equips AI agents with the deep, context-aware understanding necessary for sophisticated problem-solving and decision-making. This sophisticated infrastructure is built upon the seamless integration of several core components:
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Agentic ETL (Extract, Transform, Load)</h3>
      <p className="text-gray-700 dark:text-gray-200">This process is not a static data pipeline but an intelligent, AI-driven mechanism for continuously enriching and updating the Knowledge Bases. Agentic ETL leverages specialized AI agents to autonomously:</p>
      <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-200">
        <li>Extract relevant data from diverse and often unstructured sources (e.g., databases, documents, emails, websites).</li>
        <li>Transform this raw data into a structured, vector-optimized format suitable for efficient retrieval and reasoning by other AI agents. This includes cleaning, normalizing, and vectorizing the content.</li>
        <li>Load the transformed information into the appropriate Knowledge Bases, ensuring the "Digital Brain" remains current and accurate in real-time.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Agentic RAG (Retrieval-Augmented Generation)</h3>
      <p className="text-gray-700 dark:text-gray-200">Retrieval-Augmented Generation (RAG) is the powerful technology that makes your Cuva AI agent smart, accurate, and reliable. It acts as a bridge, connecting the AI's core reasoning engine (the Large Language Model) with your organization's verified, deep institutional knowledge.</p>
      <p className="text-gray-700 dark:text-gray-200">When a Cuva AI agent needs to answer a question or complete a complex task, it uses RAG to ensure its response is grounded in facts, significantly reducing the risk of "hallucinations".</p>

      <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Retrieval: Find the Facts</h4>
      <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> To quickly locate the most relevant pieces of information from your organization's documents, data, and repository.</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The AI converts the user's query into a unique mathematical signature (a "vector"). It then performs a high-speed vector similarity search across all Knowledge Bases to identify documents or data chunks that are conceptually closest to the query.</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Output:</strong> A small, highly relevant set of "snippets" of text/data.</p>

      <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Augmentation: Provide Context</h4>
      <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> To inject the retrieved facts into the AI's instruction set, creating a factual foundation for the response.</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The retrieved information (the "ground-truth data") is dynamically inserted into the prompt sent to the LLM. The instruction effectively becomes: "Answer the following question ONLY based on this provided context: [Retrieved Snippet 1, Snippet 2, etc.]. Question: [User's Question]"</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Impact:</strong> This step augments (enhances) the LLM's input with verified data, forcing it to stick to the facts.</p>

      <h4 className="text-md font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">Generation: Synthesize the Answer</h4>
      <p className="text-gray-700 dark:text-gray-200"><strong>Goal:</strong> To deliver a final, accurate, and coherent answer.</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Mechanism:</strong> The LLM uses its linguistic capabilities and reasoning to process the original question alongside the newly supplied factual context.</p>
      <p className="text-gray-700 dark:text-gray-200"><strong>Result:</strong> A highly accurate, context-aware, and trustworthy output that is directly grounded in your organization data, eliminating guesswork and preventing the AI from generating incorrect or fabricated information.</p>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-gray-100">Knowledge Bases (KBs)</h3>
      <p className="text-gray-700 dark:text-gray-200">These form the structured and curated repository of domain-specific and organizational intelligence. A Knowledge Base serves as the long-term memory for the AI, storing verified facts, proprietary documents, technical specifications, process flows, and historical data in an optimized format. By indexing this information meticulously, the platform ensures that the AI agents have instant, reliable access to the authoritative information required for their tasks.</p>
    </>
  ),
};

import React from "react";

export default function SearchResults({ query = "", docsIndex = [], onSelectDoc = () => {} }) {
  const q = (query || "").trim().toLowerCase();
  const results = q
    ? docsIndex.filter((d) => {
        return (
          d.label.toLowerCase().includes(q) ||
          (d.heading && d.heading.toLowerCase().includes(q)) ||
          (d.id && d.id.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <div className="max-w-3xl mx-auto py-12 px-8">
      <h2 className="text-2xl font-semibold mb-4">Search results for "{query}"</h2>

      {q === "" ? (
        <div className="text-gray-500">Enter a search query to find documentation pages.</div>
      ) : results.length === 0 ? (
        <div className="text-gray-500">No results found.</div>
      ) : (
        <ul className="space-y-3">
          {results.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => onSelectDoc(r.id)}
                className="text-left w-full"
              >
                <div className="text-lg text-blue-700 font-medium">{r.label}</div>
                {r.heading ? <div className="text-sm text-gray-600">{r.heading}</div> : null}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

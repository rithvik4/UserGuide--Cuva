import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './SearchResults';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import docsSections from './data/navigation';
import docsContent from './content';

export default function CuvaDocsApp() {
  const [activeId, setActiveId] = useState('introduction');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const doc = params.get('doc');
    if (doc) setActiveId(doc);
  }, []);

  const docsIndex = useMemo(() => {
    const items = [];
    docsSections.forEach((section) => {
      (section.items || []).forEach((item) => {
        if (item.id && docsContent[item.id]) {
          items.push({
            id: item.id,
            title: docsContent[item.id].heading || item.label,
            section: section.title || section.label,
            body: docsContent[item.id].body,
          });
        }
        if (Array.isArray(item.children)) {
          item.children.forEach((child) => {
            if (child.id && docsContent[child.id]) {
              items.push({
                id: child.id,
                title: docsContent[child.id].heading || child.label,
                section: section.title || section.label,
                body: docsContent[child.id].body,
              });
            }
          });
        }
      });
    });
    return items;
  }, []);

  function handleSelectDoc(id) {
    setActiveId(id);
    const params = new URLSearchParams(window.location.search);
    params.set('doc', id);
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.replaceState({}, '', newUrl);
  }

  function handleSearch(q) {
    setSearchQuery(q);
    if (q && q.length > 0) setActiveId('search-results');
    else setActiveId('introduction');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <Header docsIndex={docsIndex} onSelectDoc={handleSelectDoc} onSearch={handleSearch} />

      <Sidebar sections={docsSections} activeId={activeId} onSelect={handleSelectDoc} />

      <main className="ml-[20%] w-[80%] min-h-screen pt-16">
        {activeId === 'search-results' ? (
          <SearchResults query={searchQuery} docsIndex={docsIndex} onSelectDoc={handleSelectDoc} />
        ) : (
          <MainContent activeId={activeId} />
        )}
      </main>
    </div>
  );
}

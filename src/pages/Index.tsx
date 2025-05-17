
import React from 'react';
import PeriodicTable from '@/components/PeriodicTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-2">
            Interactive Periodic Table
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore all elements with detailed information. Hover over elements to see basic info, 
            click for more details, and use the filters to find specific elements.
          </p>
        </header>
        
        <main>
          <PeriodicTable />
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Data sourced from public domain chemistry resources. For educational purposes only.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

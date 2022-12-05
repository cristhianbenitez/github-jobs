import React from 'react';
import { JobsList, SearchBar, Sidebar } from './components';

function App() {
  return (
    <div className="container mx-auto lg:px-28">
      <header>
        <h1 className="text-2xl font-bold my-8">
          Github <span className="font-thin">Jobs</span>
        </h1>
        <SearchBar />
      </header>
      <main className="flex justify-between">
        <JobsList />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { JobsList, SearchBar, Sidebar } from '../components';
import jobsApi from '../helpers/jobsApi';

export const Home = () => {
  const [query, setQuery] = React.useState('');
  const [page, setPage] = React.useState(10);
  const { data, isLoading } = useQuery(
    ['jobs-search', query, page],
    async () => {
      const res = await jobsApi.get('/search', {
        params: { q: query, start: page }
      });
      return res.data;
    },
    { enabled: Boolean(query.length > 0) }
  );

  const fiveJobsResults = data?.jobs_results.slice(5);

  const nextPage = () => setPage(page + 10);
  const prevPage = () => setPage(page - 10);

  return (
    <main>
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <div className="flex justify-between gap-8">
        <Sidebar />
        <JobsList
          jobsResults={fiveJobsResults}
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { JobDescription, JobsList, SearchBar, Sidebar } from './components';
import jobsApi from './helpers/jobsApi';

const App = () => {
  const [query, setQuery] = React.useState('front-end');
  const [page, setPage] = React.useState(10);
  const [location, setLocation] = React.useState('');
  const [jobData, setJobData] = React.useState({});

  const { data, isLoading } = useQuery(
    ['jobs-search', query, page, location],
    async () => {
      const res = await jobsApi.get('/search', {
        params: { q: query, start: page, location: location }
      });
      return res.data;
    },
    { enabled: Boolean(query.length > 0) || Boolean(location) }
  );

  const fiveJobsResults = data?.jobs_results.slice(5);

  const nextPage = () => setPage(page + 10);
  const prevPage = () => setPage(page - 10);

  return (
    <div className="container mx-auto lg:px-28">
      <header>
        <h1 className="text-2xl font-bold my-8">
          Github <span className="font-thin">Jobs</span>
        </h1>
      </header>
      {!jobData.title ? (
        <main>
          <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
          <div className="flex justify-between gap-8">
            <Sidebar setLocation={setLocation} />
            <JobsList
              jobsResults={fiveJobsResults}
              nextPage={nextPage}
              prevPage={prevPage}
              page={page}
              setJobData={setJobData}
              isLoading={isLoading}
            />
          </div>
        </main>
      ) : (
        <JobDescription jobData={jobData} setJobData={setJobData} />
      )}
    </div>
  );
};

export default App;

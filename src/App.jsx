import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Layout } from './components';
import { Home, JobDescription } from './pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="job-description/:id" element={<JobDescription />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

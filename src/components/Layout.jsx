import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <div className="container mx-auto lg:px-28">
        <header>
          <h1 className="text-2xl font-bold my-8">
            Github <span className="font-thin">Jobs</span>
          </h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

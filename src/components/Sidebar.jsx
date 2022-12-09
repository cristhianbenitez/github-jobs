import React from 'react';
import { BiWorld } from 'react-icons/bi';

export const Sidebar = () => {
  return (
    <section className="w-1/3">
      <div className="mb-8">
        <label htmlFor="filter" className="text-sm ">
          <input type="checkbox" name="" id="filter" className="mr-2 w-4 h-4" />
          Full time
        </label>
      </div>
      <div>
        <label
          htmlFor="location"
          className="flex flex-col gap-4 uppercase text-lightGray mb-10"
        >
          <span className="font-bold">Location</span>
          <div className="flex items-center bg-white rounded">
            <BiWorld className="mx-4 text-lg" />
            <input
              type="text"
              id="location"
              className="bg-transparent outline-none p-3 w-full placeholder:text-sm placeholder:font-roboto"
              placeholder="City, state, zip code or country"
            />
          </div>
        </label>

        <div>
          <label htmlFor="option" className="font-medium ">
            <input
              type="radio"
              name="option"
              id="option"
              className="mr-4 w-4 h-4"
            />
            New York
          </label>
        </div>
      </div>
    </section>
  );
};

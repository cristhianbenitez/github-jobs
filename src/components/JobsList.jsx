import React from 'react';

export const JobsList = () => {
  return (
    <section>
      <div>
        <label htmlFor="filter">
          <input type="checkbox" name="" id="filter" />
          Full time
        </label>
      </div>

      <div>
        <label htmlFor="location" className="flex flex-col">
          Location
          <input type="text" id="location" />
        </label>

        <div>
          <label htmlFor="option">
            <input type="radio" name="option" id="" />
            New York
          </label>
        </div>
      </div>
    </section>
  );
};

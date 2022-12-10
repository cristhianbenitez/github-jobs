import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BiWorld } from 'react-icons/bi';
import { locationApi } from '../helpers/jobsApi';

export const Sidebar = ({ setLocation }) => {
  const [locationName, setLocationName] = React.useState('');

  const { data, isLoading } = useQuery(
    ['locations', locationName],
    async () => {
      const res = await locationApi.get('/locations.json', {
        params: { q: locationName }
      });
      return res.data;
    },
    { enabled: Boolean(locationName.length > 0) }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationName.length > 0) {
      setLocation(locationName);
    }
  };

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
          <form
            className="flex items-center bg-white rounded"
            onSubmit={handleSubmit}
          >
            <BiWorld className="mx-4 text-lg" />
            <input
              value={locationName}
              onChange={(e) => {
                setLocationName(e.target.value);
              }}
              type="text"
              id="location"
              name="location"
              className="bg-transparent outline-none p-3 w-full placeholder:text-sm placeholder:font-roboto"
              placeholder="City, state, zip code or country"
            />
          </form>
        </label>

        <div className="flex flex-col gap-4">
          {['London', 'Amsterdam', 'New York', 'Berlin'].map((location) => (
            <label
              key={location}
              htmlFor={`option-${location}`}
              className="font-medium "
            >
              <input
                type="radio"
                name="location"
                id={`option-${location}`}
                className="mr-4 w-4 h-4"
                onClick={(e) => setLocation(location)}
              />
              {location}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

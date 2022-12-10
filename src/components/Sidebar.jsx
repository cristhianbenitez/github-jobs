import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BiWorld } from 'react-icons/bi';
import { locationApi } from '../helpers/jobsApi';
import { useEffectOnce } from '../helpers/useEffectOnce';
import axios from 'axios';
import Geonames from 'geonames.js'; /* es module */

export const Sidebar = ({ setLocation, toggleShowFullTimeOnly }) => {
  const [locationName, setLocationName] = React.useState('');

  const geonamesApi = Geonames({
    username: 'cris0987',
    lan: 'en',
    encoding: 'JSON'
  });

  useEffectOnce(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { longitude, latitude } = position.coords;
        const { geonames } = await geonamesApi.findNearbyPlaceName({
          lat: latitude,
          lng: longitude
        });
        setLocation(geonames[0].adminName1);
      });
    } else {
      alert('geolocation not available?! What year is this?');
    }
  });

  const { data, isLoading } = useQuery(
    ['locations', locationName],
    async () => {
      const res = await geonamesApi.search({
        name: locationName,
        name_startsWith: locationName,
        style: 'medium',
        isNameRequired: true,
        maxRows: 1
      });
      return res.geonames;
    },
    { enabled: Boolean(locationName.length > 0) }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationName.length > 0) {
      setLocation(locationName);
      setLocationName('');
    }
  };

  return (
    <section className="lg:w-1/3">
      <div className="mb-8 flex flex-col">
        <label htmlFor="filter" className="text-sm ">
          <input
            type="checkbox"
            name="time"
            id="full-time"
            className="mr-2 w-4 h-4"
            onClick={toggleShowFullTimeOnly}
          />
          Full time
        </label>
      </div>
      <div>
        <label
          htmlFor="location"
          className="flex flex-col gap-4 uppercase text-sm tracking-wide text-lightGray mb-10"
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
          {data?.map((props) => {
            return (
              props.adminName1 && (
                <label
                  key={props.geonameId}
                  htmlFor={`option-${props.adminName1}`}
                  className="font-medium "
                >
                  <input
                    type="radio"
                    name="location"
                    id={`option-${props.adminName1}`}
                    className="mr-4 w-4 h-4"
                    onClick={(e) => {
                      setLocation(props.adminName1);
                      setLocationName('');
                    }}
                  />
                  {props.adminName1}
                </label>
              )
            );
          })}

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
                onClick={(e) => {
                  setLocation(location);
                  setLocationName('');
                }}
              />
              {location}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

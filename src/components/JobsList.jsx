import React from 'react';
import { BiWorld, BiTimeFive } from 'react-icons/bi';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

export const JobsList = ({
  jobsResults,
  nextPage,
  page,
  isLoading,
  prevPage,
  setJobData
}) => {
  if (isLoading) return;
  return (
    <section className="w-2/3 ">
      {jobsResults?.map((props) => {
        return (
          <a onClick={() => setJobData(props)}>
            <div className="flex items-end justify-between bg-white rounded p-3 mb-8 font-roboto ">
              <div className="flex items-center">
                <div className="w-[40px] h-[40px] mr-4">
                  {props.thumbnail ? (
                    <img
                      src={props.thumbnail}
                      className="w-full object-cover"
                    />
                  ) : (
                    <div className="text-xs bg-[#F2F2F2] w-full h-full text-lightGray flex justify-center items-center text-center">
                      not found
                    </div>
                  )}
                </div>
                <div>
                  <span className="company-name">{props.company_name}</span>
                  <p className="job-title">{props.title}</p>
                  {props.extensions[1]?.includes('time') && (
                    <span className="job-time">
                      {props.extensions[1].replace(/-|–/gi, ' ')}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-lightGray flex text-xs font-medium">
                <span className="flex gap-2 mr-7">
                  <BiWorld />
                  {props.location}
                </span>
                <span className="flex gap-2">
                  <BiTimeFive />
                  {props.extensions[0]}
                </span>
              </div>
            </div>
          </a>
        );
      })}
      {jobsResults.length && (
        <div className="w-full flex justify-end text-lightGray ">
          {page > 10 && (
            <button
              onClick={prevPage}
              className="border border-solid hover:border-[#1E86FF] hover:text-[#1E86FF] flex items-center text-xs p-2 gap-2 rounded mr-3"
            >
              <AiOutlineLeft /> Prev
            </button>
          )}
          <button
            onClick={nextPage}
            className="border border-solid hover:border-[#1E86FF] hover:text-[#1E86FF] flex items-center text-xs p-2 gap-2 rounded mr"
          >
            Next <AiOutlineRight />
          </button>
        </div>
      )}
    </section>
  );
};

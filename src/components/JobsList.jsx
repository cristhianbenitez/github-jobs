import React from 'react';
import { BiWorld, BiTimeFive } from 'react-icons/bi';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

export const JobsList = ({
  jobsResults,
  nextPage,
  page,
  isLoading,
  prevPage
}) => {
  if (isLoading) return;
  return (
    <section className="w-2/3 ">
      {jobsResults?.map((props) => {
        return (
          <div className="flex items-center justify-between bg-white rounded p-3 mb-8 font-roboto ">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] mr-4">
                {props.thumbnail ? (
                  <img src={props.thumbnail} className="w-full object-cover" />
                ) : (
                  <div className="text-xs bg-[#F2F2F2] w-full h-full text-lightGray flex justify-center items-center text-center">
                    not found
                  </div>
                )}
              </div>
              <div className="text-[#334680]">
                <span className="font-bold  text-xs mb-2">
                  {props.company_name}
                </span>
                <p className="mb-3 text-lg max-w-xs">{props.title}</p>
                {props.extensions[1]?.includes('time') && (
                  <span className="border border-solid border-[#334680] text-xs px-2 py-[0.375rem] rounded font-bold">
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

import React from 'react';
import { BiWorld, BiTimeFive } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';

export const JobDescription = ({ jobData, setJobData }) => {
  function createDescription() {
    return { __html: jobData.description.replace(/(?:\r\n|\r|\n)/g, '<br/>') };
  }
  return (
    <main>
      <div className="flex justify-between gap-8">
        <div className="w-1/4">
          <span
            onClick={() => setJobData({})}
            className="flex items-center cursor-pointer text-[#1E86FF] text-sm gap-4 mb-9"
          >
            <BsArrowLeft /> Back to search
          </span>
        </div>

        <div className="w-3/4 font-roboto">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold text-[#334680] mr-4">
              {jobData?.title}
            </h2>
            <span className="border text-center border-solid border-[#334680] text-xs px-2 py-[0.375rem] rounded font-bold text-[#334680]">
              {jobData.detected_extensions.schedule_type}
            </span>
          </div>
          <span className="flex gap-2 text-lightGray text-xs font- mb-8">
            <BiTimeFive />
            {jobData.detected_extensions.posted_at || 'Unknown'}
          </span>

          <div className="flex items-center mb-8">
            <div className="w-[40px] h-[40px] mr-4">
              {jobData?.thumbnail ? (
                <img src={jobData?.thumbnail} className="w-full object-cover" />
              ) : (
                <div className="text-xs bg-[#F2F2F2] w-full h-full text-lightGray flex justify-center items-center text-center">
                  not found
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <span className="font-bold  text-xs mb-2 text-[#334680]">
                {jobData?.company_name}
              </span>
              <span className="flex gap-2 mr-7 text-lightGray text-xs ">
                <BiWorld />
                {jobData?.location}
              </span>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={createDescription()}
            className="text-[#334680]"
          ></div>
        </div>
      </div>
    </main>
  );
};

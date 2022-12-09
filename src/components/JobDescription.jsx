import React from 'react';
import { BiWorld, BiTimeFive } from 'react-icons/bi';

export const JobDescription = ({ jobData }) => {
  function createDescription() {
    return { __html: jobData.description.replace(/(?:\r\n|\r|\n)/g, '<br/>') };
  }
  console.log();
  return (
    <main>
      <div className="flex justify-between gap-8">
        <div>
          <span></span>
          <div>
            <span></span>
            <p></p>
          </div>
        </div>

        <div className="font-roboto">
          <div className="flex items-center">
            <h2 className="job-title">{jobData?.title}</h2>
            {jobData?.extensions[1]?.includes('time') && (
              <span className="job-time">
                {jobData?.extensions[1].replace(/-|–/gi, ' ')}
              </span>
            )}
          </div>
          <span className="flex gap-2 text-lightGray text-xs font- mb-8">
            <BiTimeFive />
            {jobData?.extensions[0]}
          </span>

          <div className="flex items-center">
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
              <span className="company-name">{jobData?.company_name}</span>
              <span className="flex gap-2 mr-7 text-lightGray text-xs font-medium">
                <BiWorld />
                {jobData?.location}
              </span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={createDescription()}></div>
        </div>
      </div>
    </main>
  );
};

import React from 'react';
import { MdWorkOutline } from 'react-icons/md';

export const SearchBar = ({ setQuery, setPage }) => {
  const [inputValue, setInputValue] = React.useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
    setPage(10);
  };

  return (
    <section className="bg-searchbar-background bg-cover bg-center flex justify-center items-center px-[12.5rem] py-10 rounded-lg mb-11">
      <form
        className="flex w-[790px] h-[56px] bg-white justify-between rounded"
        onSubmit={handleOnSubmit}
      >
        <div className="flex w-full items-center justify-center">
          <MdWorkOutline className="ml-4 mr-3 fill-slate-400 " />
          <input
            type="text"
            className=" w-full h-full placeholder-slate-400 placeholder:text-xs"
            placeholder="Title, companies, expertise or benefits"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-[#1E86FF] rounded px-12 py-4 mr-1 my-1 flex items-center text-white"
        >
          Search
        </button>
      </form>
    </section>
  );
};

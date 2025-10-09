import React from 'react';

const SearchBar = ({setSearchInput}) => {
    const handleSearch = (e) => {
        setSearchInput(e.target.value)
        
    }
    return (
        <label className="input bg-transparent text-[#001931] border-2 border-gray-300 rounded-[8px] flex items-center gap-2.5 px-[10px] py-[7.5px]">
            <svg
              className="h-[1em] opacity-50 text-[#001931]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={handleSearch}
              type="search"
              name='search'
              required
              placeholder="Search"
              className="bg-transparent text-[#001931] placeholder:text-[#001931] focus:outline-none"
            />
          </label>
    );
};

export default SearchBar;
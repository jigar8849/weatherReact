import React from 'react'

function SearchBar({ search, setSearch, fetchWeather }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city..."
          className="flex-1 bg-white  py-2 pl-3 text-black border border-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => fetchWeather(search)}
          className="bg-black text-white px-6 py-2 rounded-r-md font-semibold border border-black"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

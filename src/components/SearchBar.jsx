import React from 'react'


// components/SearchBar.jsx
function SearchBar({ search, setSearch, fetchWeather }) {
  return (
    <div className="flex bg-white rounded flex-col sm:flex-row justify-between items-center gap-4 mb-6 ml-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search city..."
        className="w-full sm:flex-1 px-4 py-2 rounded-lg text-black"
      />
      <button
        onClick={() => fetchWeather(search)}
        className="bg-black text-white px-6 py-2 rounded-lg font-semibold w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

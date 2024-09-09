"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center md:w-3/4 border-2 border-blue-500 rounded-lg overflow-hidden"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 pl-6 md:pl-4 text-sm md:text-base flex-grow outline-none text-gray-600"
          placeholder="Search... 83 100+ products"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white flex items-center px-8 py-4"
        >
          <MagnifyingGlassIcon className="w-5 h-5 stroke-current stroke-2" />
          <span className="ml-2 text-sm md:text-base font-bold text-xl">
            Search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

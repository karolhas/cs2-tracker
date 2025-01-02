"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      // Add login later
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center overflow-hidden w-full max-w-xl shadow-md"
    >
      <input
        type="text"
        className="w-full p-3 bg-[#202020]/40  rounded-l-lg border border-[#202020]/80 text-slate-200 placeholder-neutral-500 focus:outline-none"
        placeholder="Copy & paste player's Steam URL/Custom URL/SteamID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="p-4 bg-neutral-800 border border-[#202020]/80 hover:bg-neutral-700 rounded-r-lg transition duration-200 flex items-center justify-center "
      >
        <FaSearch className="text-white" />
      </button>
    </form>
  );
}

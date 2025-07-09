import { ChevronsUpDown, Search } from "lucide-react";

export default function SearchBar({ onSearch, onSort, sortField, sortOrder }) {
  const handleClick = (field) => {
    if (sortField !== field) {
      onSort(field, 1); // New sort field → Ascending
    } else {
      // Cycle through: asc → desc → no sort
      if (sortOrder === 1) onSort(field, -1);
      else if (sortOrder === -1) onSort("", 0);
      else onSort(field, 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
      {/* Sort Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => handleClick("postId")}
          className="border-none shadow-lg rounded-2xl px-3 py-1 flex items-center gap-2"
        >
          <span className="text-[15px]">Post ID</span>
          <ChevronsUpDown
            size={16}
            className={`cursor-pointer ${
              sortField === "postId" ? "text-blue-500" : "text-gray-500"
            }`}
          />
        </button>

        <button
          onClick={() => handleClick("name")}
          className="border-none shadow-lg rounded-2xl px-3 py-1 flex items-center gap-2"
        >
          <span className="text-[15px]">Name</span>
          <ChevronsUpDown
            size={16}
            className={`cursor-pointer ${
              sortField === "name" ? "text-blue-500" : "text-gray-500"
            }`}
          />
        </button>

        <button
          onClick={() => handleClick("email")}
          className="border-none shadow-lg rounded-2xl px-3 py-1 flex items-center gap-2"
        >
          <span className="text-[15px]">Email</span>
          <ChevronsUpDown
            size={16}
            className={`cursor-pointer ${
              sortField === "email" ? "text-blue-500" : "text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute top-5 left-2.5 text-gray-500" size={16} />
        <input
          type="text"
          placeholder="Search name, email, comment"
          onChange={(e) => onSearch(e.target.value)}
          className="border-none rounded-2xl bg-white shadow-lg outline-0 px-3 py-4 pl-8 w-72 text-sm"
        />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { fetchComments } from "../../api";
// import Header from "./Header";
import Table from "./Table";
import SearchBar from "./SearchBar";
import Partial from "./Partial";

import {
  sortByName,
  sortByPostId,
  sortByEmail,
  filterBySearchTerm,
} from "../utils/helpers";

import TableShimmerUi from "./TableShimmerUI";

export default function Dashboard() {
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState(() => sessionStorage.getItem("searchTerm") || "");
  const [sortField, setSortField] = useState(() => sessionStorage.getItem("sortField") || "");
  const [sortOrder, setSortOrder] = useState(() => Number(sessionStorage.getItem("sortOrder")) || 0);
  const [pageSize, setPageSize] = useState(() => Number(sessionStorage.getItem("pageSize")) || 10);
  const [currentPage, setCurrentPage] = useState(() => Number(sessionStorage.getItem("currentPage")) || 1);
  const [loading, setLoading] = useState(true);

  // Fetch comments with minimum shimmer delay
  useEffect(() => {
    setLoading(true);
    const startTime = Date.now();

    fetchComments().then((data) => {
      const elapsed = Date.now() - startTime;
      const delay = Math.max(0, 600 - elapsed);
      setTimeout(() => {
        setComments(data);
        setLoading(false);
      }, delay);
    });
  }, []);

  // Store filter/sort/pagination in sessionStorage
  useEffect(() => {
    sessionStorage.setItem("searchTerm", searchTerm);
    sessionStorage.setItem("sortField", sortField);
    sessionStorage.setItem("sortOrder", sortOrder);
    sessionStorage.setItem("pageSize", pageSize);
    sessionStorage.setItem("currentPage", currentPage);
  }, [searchTerm, sortField, sortOrder, pageSize, currentPage]);

  // Handlers
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // Filtered & Sorted Data
  let filteredData = filterBySearchTerm(comments, searchTerm);
  if (sortOrder !== 0) {
    if (sortField === "name") filteredData = sortByName(filteredData, sortOrder);
    else if (sortField === "email") filteredData = sortByEmail(filteredData, sortOrder);
    else if (sortField === "postId") filteredData = sortByPostId(filteredData, sortOrder);
  }

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const currentData = filteredData.slice(startIdx, startIdx + pageSize);

  return (
    <div className="w-full pt-[25%] md:pt-[8%] bg-gray-100 flex justify-center items-center font-poppins">
      <div className="p-4 w-full md:w-[90%] lg:w-[80%]">
        <SearchBar
          onSearch={handleSearch}
          onSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
        />

        {loading ? <TableShimmerUi /> : <Table data={currentData} />}

        <Partial
          total={filteredData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </div>
  );
}

export default function Partial({
  total,
  pageSize,
  currentPage,
  setCurrentPage,
  totalPages,
  onPageSizeChange,
}) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(start + pageSize - 1, total);

  return (
    <div className="flex justify-end  mt-4 items-center flex-wrap gap-5 text-sm">
      <p>
        {start}-{end} of {total} items
      </p>

      <div className="flex items-center gap-2">
        <button
          className="border px-2"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>
        <span className="border px-3">{currentPage}</span>
        {currentPage < totalPages && (
          <button
            className="border px-2"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          >
            {'>'}
          </button>
        )}
      </div>

      <select
        className="border p-1"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value={10}>10 / Page</option>
        <option value={50}>50 / Page</option>
        <option value={100}>100 / Page</option>
      </select>
    </div>
  );
}

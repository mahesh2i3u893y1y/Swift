 const TableShimmerUi =() => {
  const rows = Array.from({ length: 10 });

  return (
    <div className="overflow-x-auto">
      <div className="rounded-xl shadow-xl overflow-hidden">
        <table className="w-full table-fixed text-[13px]">
          <thead className="bg-[#CCCCD6] text-[#272A4B]">
            <tr>
              <th className="w-[10%] text-left px-5 py-4">Post ID</th>
              <th className="w-[25%] text-left px-5 py-4">Name</th>
              <th className="w-[25%] text-left px-5 py-4">Email</th>
              <th className="w-[40%] text-left px-5 py-4">Comment</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((_, index) => (
              <tr
                key={index}
                className="border-t-[2px] border-gray-300 bg-white animate-pulse"
              >
                <td className="w-[10%] px-5 py-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </td>
                <td className="w-[25%] px-5 py-4">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                </td>
                <td className="w-[25%] px-5 py-4">
                  <div className="h-4 bg-gray-300 rounded w-[90%]"></div>
                </td>
                <td className="w-[40%] px-5 py-4">
                  {/* <div className="h-4 bg-gray-300 rounded w-full mb-1"></div> */}
                  <div className="h-4 bg-gray-200 rounded w-[80%]"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default TableShimmerUi
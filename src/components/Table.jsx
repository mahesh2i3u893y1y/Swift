export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <div className="rounded-xl shadow-xl overflow-hidden">
        <table className="w-full table-fixed text-[13px]">
          <thead className="bg-[#CCCCD6] text-[#272A4B]">
            <tr>
              <th className="md:w-[10%] text-left truncate whitespace-nowrap overflow-hidden px-5 py-4">Post ID</th>
              <th className="md:w-[25%] text-left truncate whitespace-nowrap overflow-hidden px-5 py-4">Name</th>
              <th className="md:w-[25%] text-left truncate whitespace-nowrap overflow-hidden px-5 py-4">Email</th>
              <th className="md:w-[40%] text-left truncate whitespace-nowrap overflow-hidden px-5 py-4">Comment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t-[2px] border-gray-300 text-[#3F464F] bg-white hover:bg-gray-100"
              >
                <td className="md:w-[10%] text-center truncate whitespace-nowrap overflow-hidden px-5 py-4">
                  {item.postId}
                </td>
                <td className="md:w-[25%] truncate whitespace-nowrap overflow-hidden px-5 py-4">
                  {item.name}
                </td>
                <td className="md:w-[25%] truncate whitespace-nowrap overflow-hidden px-5 py-4">
                  {item.email}
                </td>
                <td className="md:w-[40%] truncate whitespace-nowrap overflow-hidden px-5 py-4">
                  {item.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

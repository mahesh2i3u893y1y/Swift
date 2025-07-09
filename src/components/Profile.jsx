import { useEffect, useState } from "react";
import Header from "./Header";
import { fetchUsers } from "../../api";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";


export default function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((data) => setUser(data[0]));
  }, []);

  console.log(user)

  const handleBackDashboard = () => {
    navigate("/")
  }

  if (!user) return <Loading/>

  return (
    <div className="min-h-screen bg-gray-50 pt-[8%] font-poppins">

      <div className="max-w-5xl mx-auto bg-white mt-10 p-6 md:p-10 rounded-xl shadow-sm">
        {/* Header Text */}
        <div className="flex items-center gap-2 text-gray-800 text-lg font-semibold mb-6">
          <button className="text-xl cursor-pointer" onClick={handleBackDashboard}><ArrowLeftIcon size={20} /></button>
          Welcome, {user.name}
        </div>

        {/* Profile Top */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-blue-700">
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Info Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <label className="block text-gray-500 mb-1 ">User ID</label>
            <input
              value={user.id}
              readOnly
              className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-200 text-gray-800 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-500 mb-1">Name</label>
            <input
              value={user.name}
              readOnly
              className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-200 text-gray-800 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-500 mb-1">Email ID</label>
            <input
              value={user.email}
              readOnly
              className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-200 text-gray-800 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-500 mb-1">Address</label>
            <input
              value={user.address.city}
              readOnly
              className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-200 text-gray-800 truncate outline-none"
              title={user.address.city}
            />
          </div>
          <div>
            <label className="block text-gray-500 mb-1">Phone</label>
            <input
              value={user.phone}
              readOnly
              className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-200 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import swiftlogo from "../assets/swiftlogo.png";
import { fetchUsers } from "../../api";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import HeaderSkeleton from "./HeaderSkeleton";


export default function Header() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  
 useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers().then((data) => setUser(data[0]));
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  

  const handleProfileNavigation = () => {
    navigate("/profile")
  }

  if (!user) return <HeaderSkeleton />;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 px-9 bg-[#272A4B] text-white shadow-md">
      {/* Logo */}
      <img src={swiftlogo} alt="logo" className="w-32" />

      {/* User profile */}
      <div className="flex items-center gap-3 cursor-pointer" onClick={handleProfileNavigation}>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-500">
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <h2 className="text-base font-medium">{user.name}</h2>
      </div>
    </header>
  );
}

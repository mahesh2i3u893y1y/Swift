import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/error.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex flex-col items-center md:justify-center p-5 font-poppins">
      <h1 className="text-xl md:text-2xl font-extrabold mb-4">Oops! Something went wrong.</h1>
        <p className="text-[15px] md:text-[20px] text-[#28397C] mb-6">
          The page you are looking for might be missing or under maintenance.
        </p>
      <img src={errorImage} alt="Error" className="object-cover " />
      <div className="relative text-center text-white px-6">

       
        <p
          onClick={() => navigate("/dashboard")}
          className="px-6 py-2 my-4 text-[14px] text-[#28397C] underline cursor-pointer font-semibold"
        >
          Start fresh
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

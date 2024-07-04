import "../App.css";
import React from "react";
export default function Forgotpassword() {
  return (
    <div className="2xl-container mx-auto h-screen bg-[#ECEFF1]">
      <div className="w-[90%] mx-auto h-screen grid grid-cols-1">
        <div className="flex flex-col justify-center items-center h-screen w-[100%]">
          <div className="flex flex-col justify-center items-center m-3 p-10 bg-white rounded-md">
            <h1 className="font-[Roboto] text-[28px] text-center m-1">
              Password Reset
            </h1>
            <p className="p-3 bg-yellow-100 font-[Roboto] text-[16px] outline-yellow-500 border-yellow-500 rounded-md sm:w-[300px] m-2 font-normal">
              Forgotten your password? Enter your e-mail address below, and we
              will send you an e-mail allowing you to reset it.
            </p>
            <img
              src="https://ik.imagekit.io/bagqqfegz/WebScrapper/web-scraping-main-icon.png?updatedAt=1719985089241"
              className="h-[150px] m-1"
              alt="icon"
            />
            <p className="text-[20px] font-[Roboto] text-center m-1">
              DocScrapper.io
            </p>
            <input
              type="email"
              className="w-[300px] h-[30px] p-3 m-2 rounded-sm font-[Roboto] text-black text-[16px] placeholder-slate-400 bg-blue-50 border-none outline-yellow-400 cursor-pointer"
              placeholder="Email"
              required
            />
            <button className="text-white font-[Roboto] text-[16px] p-2 bg-green-500 cursor-pointer m-2 rounded-md hover:bg-green-600">
              Reset My Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../App.css";
import React from "react";
export default function Signup() {
  return (
    <div className="2xl-container mx-auto h-screen bg-[#ECEFF1]">
      <div className="w-[90%] mx-auto h-screen grid grid-cols-1">
        <div className="flex flex-col justify-center items-center h-screen w-[100%]">
          <div className="flex flex-col justify-center items-center m-3 p-10 bg-white rounded-md">
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
            <input
              type="password"
              className="w-[300px] h-[30px] p-3 m-2 rounded-sm font-[Roboto] text-black text-[16px] placeholder-slate-400 bg-blue-50 border-none outline-yellow-400 cursor-pointer"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="w-[300px] h-[30px] p-3 m-2 rounded-sm font-[Roboto] text-black text-[16px] placeholder-slate-400 bg-blue-50 border-none outline-yellow-400 cursor-pointer"
              placeholder="Confirm Password"
              required
            />
            <button className="w-[300px] h-[35px] bg-[#23658c] p-2 text-[16px] text-white font-[Roboto] rounded-sm m-1 cursor-pointer">
              Sign Up
            </button>
            <div className="flex">
              <p className="text-[18px] font-[Roboto] font-normal p-2">
                Have an account?
              </p>
              <a
                href="/"
                className="text-[18px] font-[Roboto] font-normal p-2 text-blue-700 hover:underline"
              >
                Sign In
              </a>
            </div>
            <p className="text-[18px] font-[Roboto] font-normal p-2">
              or you can sign in with
            </p>
            <div className="flex justify-center gap-2 w-[300px]">
              <a href="#">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  viewBox="0 0 960 1000"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980s-246.667-47-340-141S0 632 0 500c0-133.333 46.667-246.667 140-340S346.667 20 480 20m114 330v-78h-72c-29.333 0-54 11-74 33s-30 49-30 81v44h-76v74h76v222h86V504h90v-74h-90v-52c0-18.667 6-28 18-28h72" />
                </svg>
              </a>
              <a href="#">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a href="#">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

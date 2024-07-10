import React from "react";

export default function Home() {
  return (
    <div className="2xl:container mx-auto h-screen">
      <div className="w-[90%] mx-auto grid grid-cols-1">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="font-[Roboto] text-[40px] text-blue-400 font-normal text-center mt-10">
            Upload Document
          </h1>
          <p className="font-[Roboto] text-[20px] text-black text-center">
            Select the Document for which you want to ask Questions
          </p>
          <p className="font-[Roboto] text-[17px]">
            Powered by
            <span className="text-red-600 font-[Roboto]"> Solid Docs</span>
          </p>
          <button className="bg-red-600 h-20 w-72 text-white font-[Roboto] text-[22px] rounded-lg hover:drop-shadow-xl cursor-pointer hover:bg-red-700">
            Select Document
          </button>
          <p className="font-[Roboto] 17px">or drop document here.</p>
          <div>
            <h1 className="font-[Roboto] text-[30px] font-normal text-center">
              Drop your Questions here
            </h1>
            <div className="relative w-[90vw] lg:w-[60vw] h-[50px] mt-3">
              <input
                type="text"
                placeholder="Enter your Questions"
                className="w-full h-full p-5 pr-10 rounded-3xl font-[Roboto] text-black text-[16px] bg-gray-100 border-none outline-none"
                required
              />
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="absolute top-1/2 right-5 transform -translate-y-1/2 w-10 h-10 p-2 text-white bg-slate-200 hover:bg-slate-300 rounded-[50%]"
              >
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

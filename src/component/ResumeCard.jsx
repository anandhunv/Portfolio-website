import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full group  flex">
      <div className="w-10 h-[6px] bg-gradient-to-b from-[#0A0A09] to-[#121212] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-blue-400 inline-flex group-hover:bg-white duration-300 " ></span>
        </span>
      </div>
      <div className="w-full bg-gradient-to-b from-[#0A0A09] to-[#121212] hover:bg-gray-700 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center ">
          <div className="flex ">
            <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400">{subTitle}</p>
            </div>
           
            {/* <div>
            <p className="px-4 py-2 text-blue-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center text-sm font-medium">
              {result}
            </p>
          </div> */}
          </div>
          
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;

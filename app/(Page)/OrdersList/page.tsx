import Purchase from "@/app/Components/DashCompo/Purchase";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full bg-[#E8EDF2] h-full">
        <h1 className="text-2xl font-bold text-gray-900 p-6">Orders List</h1>
        <Purchase />

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 p-6">
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              3
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              4
            </button>
            <button className="w-10 h-10 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
              5
            </button>
          </div>
          <button className="text-purple-500 hover:text-purple-600 font-semibold flex items-center gap-2 transition-colors">
            Next <span>→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default page;

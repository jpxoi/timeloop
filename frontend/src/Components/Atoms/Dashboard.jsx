import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  return (
    <div className="bg-white rounded-[0.5rem] px-3 py-2 mt-2 shadow-sm">
      <div className="text-[15px] font-medium my-2">Dashboard</div>
      <div className="flex justify-between">
        <div className="flex items-cetner rounded-[0.7rem] bg-[#0057FF] p-2 text-white text-[14px] space-x-1 ">
          <PencilSquareIcon className="w-5 h-5 " />
          <div>Notes</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

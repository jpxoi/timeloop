import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Timezones() {
  const [showSync2City, setShowSync2City] = React.useState(false);

  const toggleSync2City = () => {
    setShowSync2City(!showSync2City);
  };

  return (
    <div
      className={`flex flex-col p-2 pl-3 text-gray-900 rounded-[0.5rem] relative ${
        showSync2City
          ? "border border-gray-400,"
          : "hover:bg-gray-100 hover:shadow-sm"
      }`}
    >
      <div
        className="flex space-x-3  items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={toggleSync2City}
      >
        <GlobeAmericasIcon className=" w-6 h-6 cursor-pointer" />
        <div className="text-lg ">Sync2City</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showSync2City ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden pr-1`}
      >
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="commonninja_component pid-9d18f3c0-2903-48db-a127-6f921e3e7419 h-full"></div>
        </div>
      </div>
    </div>
  );
}

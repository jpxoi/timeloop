import {
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Pomodoro() {
  const [showPomodoro, setShowPomodoro] = React.useState(false);
  const togglePomodoro = () => {
    setShowPomodoro(!showPomodoro);
  };
  return (
    <div
      className={`flex flex-col p-2 pl-3 text-gray-900 rounded-[0.5rem] relative ${
        showPomodoro
          ? "border border-gray-400,"
          : "hover:bg-gray-100 hover:shadow-sm"
      }`}
    >
      <div
        className="flex space-x-3  items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={togglePomodoro}
      >
        <ClockIcon className=" w-6 h-6 cursor-pointer" />
        <div className="text-lg ">Pomodoro</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showPomodoro ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden pr-1`}
      >
        <div className="flex flex-col items-center justify-center mt-4">
          <iframe
            src="https://pomofocus.io/"
            className="w-full h-[200px] rounded-[0.5rem] border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function HourInput({ mode, Time, onTimeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(
    Time ? parseInt(Time.split(":")[0]) % 12 || 12 : 1
  );
  const [minutes, setMinutes] = useState(
    Time ? parseInt(Time.split(":")[1]) : 0
  );
  const [period, setPeriod] = useState(
    Time && Time.includes("pm") ? "pm" : "am"
  );

  const toggleHourScroller = () => {
    setIsOpen(!isOpen);
  };

  const handleHourChange = (increment) => {
    let newHours = hours + increment * 2;
    if (newHours < 1) {
      newHours = 12;
    } else if (newHours > 12) {
      newHours = 1;
    }
    setHours(newHours);
    updateValue();
  };

  const handlePeriodChange = () => {
    setPeriod(period === "am" ? "pm" : "am");
    updateValue();
  };

  const updateValue = () => {
    const formatTime = `${hours < 10 ? `${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${period}`;
    onTimeChange(formatTime, mode);
  };

  return (
    <div className="relative flex flex-col items-center">
      <input
        type="text"
        value={`${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        } ${period}`}
        onClick={toggleHourScroller}
        readOnly
        className="hover:bg-gray-100 text-gray-900 text-base rounded-full mx-3 py-1.5 items-center text-center" // Add text-center class here
        style={{
          border: "none",
          outline: "none",
          width: "7rem",
          boxShadow: "none",
        }}
      />

      {isOpen && (
        <div className="absolute bg-white border border-gray-300 text-gray-700 shadow-lg rounded-md p-2 top-full z-10">
          <div className="flex items-center flex-row">
            <div className="flex flex-col items-center mx-2">
              <button className="mb-1" onClick={() => handleHourChange(-1)}>
                <span className="text-2xl">-</span>
              </button>
              <div>{hours}</div>
              <button className="mt-1" onClick={() => handleHourChange(1)}>
                <span className="text-2xl">+</span>
              </button>
            </div>
            <span className="text-2xl mx-2">:</span>

            <div className="flex flex-col items-center mx-2">
              <button className="mb-1" onClick={handlePeriodChange}>
                <span className="text-2xl">▲</span>
              </button>
              <div>{period.toUpperCase()}</div>
              <button className="mt-1" onClick={handlePeriodChange}>
                <span className="text-2xl">▼</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HourInput;

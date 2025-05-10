import React, { useState } from "react";
import DayColumn from "../Molecules/DayColumn";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

dayjs.extend(weekOfYear);

function WeekView() {
  const [currentWeek, setCurrentWeek] = useState(dayjs().startOf("week"));
  const [selectedHour, setSelectedHour] = useState(null); // State to store selected hour
  const [events, setEvents] = useState({}); // State to store events for the current week

  const goToPreviousWeek = () => {
    setCurrentWeek(currentWeek.subtract(1, "week"));
    setSelectedHour(null); // Reset selected hour when moving to previous week
  };

  const goToNextWeek = () => {
    setCurrentWeek(currentWeek.add(1, "week"));
    setSelectedHour(null); // Reset selected hour when moving to next week
  };

  const addEvent = (day, hour, event) => {
    const key = dayjs(currentWeek).add(day, "day").format("YYYY-MM-DD");
    setEvents((prevEvents) => ({
      ...prevEvents,
      [key]: {
        ...prevEvents[key],
        [hour]: event,
      },
    }));
  };

  const daysWeek = Array.from({ length: 7 }).map((_, index) => ({
    name: currentWeek.add(index, "day").format("ddd").toUpperCase(),
    date: currentWeek.add(index, "day").format("DD"),
  }));

  let currentTime = new Date();
  let currentTimezone = currentTime.getTimezoneOffset();
  currentTimezone = (currentTimezone / 60) * -1;
  let gmt = "GMT";
  if (currentTimezone !== 0) {
    gmt += currentTimezone > 0 ? " +" : " ";
    gmt += currentTimezone;
  }

  const weekOfYear = currentWeek.week();

  return (
    <div className="flex flex-col h-full w-full pb-2 pr-2">
      {/* Navigation */}
      <div className="flex justify-between items-center  px-4 py-2 h-[7rem] border-b">
        <button onClick={goToPreviousWeek}>
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="text-center text-lg">
          <span className="">{currentWeek.format("MMM YYYY")}</span>
          {" / W"}
          {weekOfYear}
        </div>
        <button onClick={goToNextWeek}>
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Header */}
      <div className="week-header grid grid-cols-[1fr_14fr] h-[10rem]">
        <div className="week-timezone flex justify-center items-center border-b border-gray-200">
          <div className="px-4">
            <p className="text-xs text-gray-500">{gmt}</p>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b border-gray-200 ">
          {daysWeek.map((day, index) => (
            <div
              key={index}
              className={`text-center py-2 flex flex-col justify-center items-center ${
                day.name === dayjs().format("ddd").toUpperCase() &&
                day.date === dayjs().format("DD")
                  ? "text-red-500"
                  : "text-gray-700"
              }`}
            >
              <div className="text-[0.9rem] font-[500] flex space-x-2">
                <div>{day.name}</div>
                <div>{day.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="week-container grid grid-cols-[1fr_14fr] max-h-full overflow-y-scroll">
        <div className="week-hours">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="hour h-20 flex justify-center items-start px-4"
            >
              <span className="text-sm text-gray-500 -translate-y-1">
                {index % 12 === 0
                  ? "12" + (index < 12 ? " am" : " pm")
                  : (index % 12) + (index < 12 ? " am" : " pm")}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 h-full w-full">
          {daysWeek.map((day, index) => (
            <div key={index} className="flex justify-center items-center">
              <DayColumn
                day={day.name}
                events={
                  events[
                    dayjs(currentWeek).add(index, "day").format("YYYY-MM-DD")
                  ]
                }
                addEvent={(hour, event) => addEvent(index, hour, event)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeekView;

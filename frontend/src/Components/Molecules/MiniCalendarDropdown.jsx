import React, { useState } from "react";
import {
  CalendarIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import LeftArrow from "../Atoms/LeftArrow";
import RightArrow from "../Atoms/RightArrow";
import { MiniCalendar } from "../Molecules/MiniCalendar";
import DisplayMonthYear from "../Molecules/DisplayMonthYear";
import cn from "classnames";
import dayjs from "dayjs";
import { WeatherIcon } from "react-icons-weather";
import Button from "../Atoms/Button";

export default function CalendarComponent({
  currentMonth,
  setCurrentMonth,
  todayButton,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  const toggleCalendar = () => {
    setShowCalendar((prevState) => !prevState);
  };

  const GetNextMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY")
      .add(1, "month")
      .format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };

  const GetPreviousMonth = () => {
    const newMonth = dayjs(currentMonth, "MMMM YYYY")
      .subtract(1, "month")
      .format("MMMM YYYY");
    setCurrentMonth(newMonth);
  };

  return (
    <div
      className={`flex flex-col p-2 pl-0 text-gray-900 rounded-[0.5rem] relative ${
        showCalendar
          ? "border border-gray-400,"
          : "hover:bg-gray-100 hover:shadow-sm"
      }`}
    >
      <div
        className="flex space-x-3  items-center  text-[0.9rem] font-[400] cursor-pointer"
        onClick={toggleCalendar}
      >
        <div className="flex space-x-3 items-center justify-center font-[350] cursor-pointer "></div>
        <CalendarIcon className=" w-6 h-6 cursor-pointer " />
        <div className="text-lg">Calendar</div>
      </div>

      <div
        className={`transition-all duration-[700ms] ${
          showCalendar ? "max-h-[500px]" : "max-h-0"
        } overflow-hidden `}
      >
        <div className="rounded-[0.5rem] pt-2 pl-2 items-center">
          <div className="flex flex-col text-gray-800 rounded-[0.5rem]">
            <div className="flex justify-between items-center pl-2 py-2">
              <div>
                <DisplayMonthYear
                  params="font-[600] text-[1.2rem] pl-1.5"
                  date={currentMonth}
                />
              </div>

              <div className="flex justify-center items-center space-x-4 pr-2 relative">
                <Button
                  params="text-[0.85rem] text-blue-600 pr-5  font-[500]"
                  text="Today"
                  action={todayButton}
                />

                <div className="flex justify-center items-center relative">
                  <LeftArrow
                    buttonparams=""
                    iconparams="w-5 h-5"
                    action={GetPreviousMonth}
                  />

                  <div className="h-5 w-[0.1rem] rounded-full bg-gray-300 absolute left-0 top-1/2 -translate-x-4 transform -translate-y-1/2"></div>

                  <RightArrow
                    buttonparams=""
                    iconparams="w-5 h-5"
                    action={GetNextMonth}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 mt-2 rounded-[0.5rem] py-1 mb-2">
            {day.map((day, index) => {
              let textColorClass = "text-blue-500";
              if (day === "SU" || day === "SA") {
                textColorClass = "text-rose-500";
              }

              return (
                <div key={index}>
                  <h1
                    className={`text-[0.8rem] font-[450] grid place-content-center ${textColorClass}`}
                  >
                    {day}
                  </h1>
                </div>
              );
            })}
          </div>

          <div className="h-[11rem] grid grid-cols-7 mt-1 mb-2">
            {MiniCalendar({
              month: dayjs(currentMonth).month(),
              year: dayjs(currentMonth).year(),
            }).map(({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="text-xs font-[500] grid place-content-center"
                >
                  <button
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-green-500 text-white font-bold" : "",
                      "h-5 w-5 grid place-content-center rounded hover:border-green-500 hover:border-2 hover:bg-white hover:text-black transition-all cursor-pointer"
                    )}
                  >
                    {date.date()}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import DisplayDayWeek from "../Molecules/DisplayDayWeek";
import DropdownMenu from "../Atoms/DropdownMenu";
import EventCard from "../Atoms/EventCard";
import WeatherCard from "../Atoms/Weather";
import CalendarComponent from "../Molecules/MiniCalendarDropdown";
import Pomodoro from "../Molecules/Pomodoro";
import Timezones from "../Molecules/Timezones";

export default function Sidebar({
  currentMonth,
  setCurrentMonth,
  onTodayButtonClick,
}) {
  const [showCard, setShowCard] = useState(false);
  const [dateClick, setDateClick] = useState(null);

  const handleEventClose = () => {
    setShowCard(false);
  };

  return (
    <nav
      id="app-sidebar"
      className="flex w-[25%] h-screen overflow-y-auto border-r py-2 min-w-[300px] max-w-[400px] "
    >
      <div className="flex flex-col justify-between w-full">
        <div className="max-h-screen">
          <div className=" px-5 flex space-x-4 items-center py-4 border-b">
            <DisplayDayWeek params="" />
            <div className="w-full rounded-[0.5rem] px-2 py-1 bg-white border text-gray-600 text-base font-[400]">
              <div className="font-[500]">Today</div>
              <div className="font-normal text-sm leading-5">
                No events scheduled
              </div>
            </div>
          </div>

          <div className="px-6">
            <div className="mt-6 mb-3 text-base text-gray-500 font-medium">
              GENERAL
            </div>

            <div className="">
              <WeatherCard />
            </div>

            <div className="mt-2">
              <CalendarComponent
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
                todayButton={onTodayButtonClick}
              />
            </div>

            <div className="mt-2">
              <Pomodoro />
            </div>

            <div className="mt-8 mb-3 text-base text-gray-500 font-medium">
              WORKSPACE
            </div>

            <div className="">
              <Timezones />
            </div>
          </div>
        </div>

        <div className="">
          <div className="px-5 py-1">
            <DropdownMenu />
          </div>
        </div>
      </div>

      {showCard && (
        <EventCard selectedDate={dateClick} onClose={handleEventClose} />
      )}
    </nav>
  );
}

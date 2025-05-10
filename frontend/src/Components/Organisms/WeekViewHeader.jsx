import React from "react";
import dayjs from "dayjs";

function WeekViewHeader({ currentWeek }) {
  const startOfWeek = dayjs(currentWeek).startOf("week");
  const days = [];

  for (let i = 0; i < 7; i++) {
    days.push(startOfWeek.add(i, "day"));
  }

  return (
    <div className="bg-gray-100 py-2 px-4 text-center font-[500] text-lg">
      <div className="week-header grid grid-cols-[1fr_14fr] max-h-full overflow-y-scroll">
        <div className="week-timezone">
          <p className="text-xs text-gray-500">Timezone</p>
        </div>
        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <div
              key={index}
              className="pl-[8.5rem] flex flex-col justify-center items-center"
            >
              <div>{day.format("ddd")}</div>
              <div>{day.format("D")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeekViewHeader;

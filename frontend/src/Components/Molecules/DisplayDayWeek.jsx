import React from "react";
import dayjs from "dayjs";

function DisplayDayWeek({ date = dayjs(), params }) {
  const dayOfMonth = date.format("D");
  const weekday = date.format("ddd").toUpperCase();

  return (
    <div
      className={`${params} flex flex-col items-center justify-center  rounded-[0.5rem] border bg-white`}
    >
      <div className="bg-yellow-300  px-4 rounded-t-[0.5rem] shadow-md ">
        <div className="font-[450] text-[0.8rem] leading-5">{weekday}</div>
      </div>
      <div className="text-[1.4rem] leading-none py-1">{dayOfMonth}</div>
    </div>
  );
}

export default DisplayDayWeek;

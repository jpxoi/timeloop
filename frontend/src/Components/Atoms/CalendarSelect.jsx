import React from "react";

function CalendarSelect({ name, colour }) {
  // Provide the name of the calendar and desired colour as strings.
  const labelStyle = `text-${colour} font-[450] text-[15px] flex justify-center items-center p-2 border-2 rounded my-1`;
  const boxStyle = `form-checkbox bg-${colour} border-${colour} text-${colour} ms-3 rounded focus:ring-black focus:ring-1`;
  return (
    <label className={labelStyle}>
      <span>{name}</span>
      <input type="checkbox" className={boxStyle} id={name}></input>
    </label>
  );
}

export default CalendarSelect;

import React from "react";
import CalendarSelect from "../Atoms/CalendarSelect";

function CalendarList({ calendarsObjects }) {
  // Provide dictionary/object corresponding to calendar info of form [{name: "", colour: ""}]

  return (
    <div className="grid grid-cols-1 mt-6">
      {calendarsObjects.map((entry, index) => {
        return (
          <CalendarSelect
            key={index}
            name={entry.name}
            colour={entry.colour}
          />
        );
      })}
    </div>
  );
}

export default CalendarList;

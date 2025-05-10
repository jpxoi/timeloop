import React from "react";

function LandingTimePanel({ city, time_offset, current_time }) {
  return (
    <div className="rounded-lg h-14 mx-4 bg-gray-200 relative mt-1">
      <h1 className="font-semibold pt-2 pl-4">{city}</h1>
      <h2 className="pl-4 font-light absolute bottom-1">{time_offset}</h2>
      <h1 className="text-xl font-semibold absolute bottom-3 right-4">
        {current_time}
      </h1>
    </div>
  );
}

export default LandingTimePanel;

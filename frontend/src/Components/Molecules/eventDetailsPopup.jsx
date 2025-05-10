import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

function EventDetailsPopup({ event, onClose }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" bg-white rounded-[1.5rem] text-gray-100 min-w-[33%]">
        <div className="flex p-6 pt-4 text-gray-600 font-normal text-base justify-between pb-3 border-b ">
          <div>Event Details</div>
          <button onClick={onClose} className="flex">
            <XMarkIcon className="w-6 h-6 fill-red-600 " />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-[1rem] font-[500]">{event.title}</h3>
          <p className="text-[0.9rem] text-gray-800">
            Location: {event.location}
          </p>
          <p className="text-[0.9rem] text-gray-800">
            Description: {event.description}
          </p>
          <p className="text-[0.9rem] text-gray-800">
            Start Time: {event.startTime}
          </p>
          <p className="text-[0.9rem] text-gray-800">
            End Time: {event.endTime}
          </p>
          <div className="flex gap-2 mt-2">
            {event.tags.map((tag, index) => (
              <div
                key={index}
                className="rounded-full text-sm border bg-gray-200 px-3 py-1"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPopup;

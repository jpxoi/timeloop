import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import HourInput from "../Atoms/HourSlider";
import Calendar from "./Calendar";
import {
  ClockIcon,
  TagIcon,
  MapPinIcon,
  ChatBubbleLeftEllipsisIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

function DayColumn({ day, events, addEvent }) {
  const [isOpen, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskLocation, setTaskLocation] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const hourBlockStyle =
    "flex border-l border-b border-gray-200 min-h-20 hover:bg-gray-100  justify-center";

  const dayHours = Array.from({ length: 24 }).map((_, index) => {
    const hour = index % 12 === 0 ? 12 : index % 12;
    const period = index < 12 ? "am" : "pm";
    const startTime = `${hour}:00 ${period}`;
    const endTime = `${(hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12}:00 ${
      index + 1 < 12 ? "am" : "pm"
    }`;
    return { hour, period, startTime, endTime };
  });

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim();
      if (tag) {
        setTags([...tags, tag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleBlockClick = (startTime, endTime) => {
    // Set start and end times to the clicked hour
    setStartTime(startTime);
    setEndTime(endTime);
    setOpen(true);
  };

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleLocationChange = (event) => {
    setTaskLocation(event.target.value);
  };

  const handleAllDayToggle = () => {
    setAllDay(!allDay);
  };

  const handleTimeChange = (time, mode) => {
    if (mode === "start") {
      setStartTime(time);
    } else if (mode === "end") {
      setEndTime(time);
    }
  };

  const handleAddTask = () => {
    // Check if either startTime or endTime is not empty
    if (startTime !== "" && endTime !== "" && taskTitle.trim() !== "") {
      const event = {
        title: taskTitle.trim(),
        description: taskDescription.trim(),
        location: taskLocation, // Add taskLocation to the event object
        startTime,
        endTime,
        tags,
      };
      addEvent(startTime.split(":")[0], event);
      handleClose();
    }
  };

  const lightColors = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-violet-100",
    "bg-yellow-100",
    "bg-zinc-100",
  ];

  const handleClose = () => {
    setOpen(false);
    setTaskTitle("");
    setTaskDescription("");
    setTags([]);
    setTaskLocation("");
    setAllDay(false);
  };

  return (
    <div className="min-w-full flex">
      <div className="flex-grow">
        {dayHours.map(({ hour, period, startTime, endTime }, index) => (
          <div
            key={index}
            className={hourBlockStyle}
            onClick={() => handleBlockClick(startTime, endTime)}
          >
            {events && events[hour] && events[hour].startTime == startTime && (
              <div className="flex flex-col p-3 pt-2 text-wrap bg-blue-100 h-auto w-[11.5rem] rounded-[0.5rem]">
                <h3 className="text-[1rem] font-[500]">{events[hour].title}</h3>
                <p className="text-[0.9rem] text-gray-800">
                  {`${events[hour].startTime} - ${events[hour].endTime}`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className=" bg-white rounded-[1.5rem] text-gray-100 min-w-[33%]">
            <div className="flex p-6 pt-4 text-gray-600 font-normal text-base justify-between pb-3 border-b ">
              <div>Create event</div>
              <button onClick={handleClose} className="flex">
                <XMarkIcon className="w-6 h-6 fill-red-600 " />
              </button>
            </div>

            <div className="flex flex-col p-6 pt-3">
              <div className="text-black">
                <input
                  type="text"
                  placeholder="Title"
                  value={taskTitle}
                  onChange={handleTitleChange}
                  className="text-[1.8rem] font-[550] pl-0 rounded-lg focus:ring-blue-500 focus:border-transparent block w-full"
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none", // Remove the default focus styling
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => {
                  const bgColorClass = lightColors[index % lightColors.length];
                  const colorName = bgColorClass.split("-")[1];
                  const textColorClass = `text-${colorName}-600`;
                  return (
                    <div
                      key={index}
                      className={
                        "rounded-full text-sm flex items-center border " +
                        bgColorClass +
                        " px-3 py-1"
                      }
                    >
                      <span className={textColorClass + " mr-1 "}>{tag}</span>

                      <button
                        className="text-gray-400"
                        onClick={() => removeTag(index)}
                      >
                        &times;
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="relative text-black mt-4 flex w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center space-x-2 text-gray-600">
                  <TagIcon className="h-5 w-5 text-gray-500" />
                </span>
                <input
                  type="text"
                  className={`pl-10 p-3 pr-4 w-full border-gray-300 border rounded-[0.75rem] ${
                    tags.length ? "border" : "border-gray-300"
                  } focus:outline-none focus:border-blue-500`}
                  value={tagInput}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Add Label"
                />
              </div>

              <div className="relative text-black mt-3 flex w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center space-x-2 text-gray-600">
                  <MapPinIcon className="h-5 w-5 text-gray-500" />
                </span>
                <input
                  value={taskLocation}
                  onChange={handleLocationChange}
                  type="text"
                  placeholder="Add Location"
                  className="pl-10 w-full pr-4 py-3 border rounded-[0.75rem] border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className=" p-4 flex justify-between items-center text-sm mt-2 text-black">
                <div className="text-base">All Day</div>
                <div
                  className={`relative inline-block w-9 h-5 mr-2 align-middle select-none transition duration-200 ease-in ${
                    allDay ? "bg-blue-600" : "bg-gray-200"
                  } rounded-full p-0.5 cursor-pointer`}
                  onClick={handleAllDayToggle}
                >
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${
                      allDay ? "translate-x-full" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>

              <div className="flex px-4 justify-between text-gray-500 items-center w-full">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <HourInput
                    mode="start"
                    Time={startTime}
                    onTimeChange={handleTimeChange}
                  />
                </div>

                <ArrowRightIcon className="w-5 h-5 text-black" />

                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <HourInput
                    mode="end"
                    Time={endTime}
                    onTimeChange={handleTimeChange}
                  />
                </div>
              </div>

              <div className="relative text-black mt-4 flex w-full">
                <span className="absolute left-0 top-[1.55rem] transform -translate-y-1/2 pl-3 flex items-center space-x-2 text-gray-600">
                  <ChatBubbleLeftEllipsisIcon className="h-5 w-5 text-gray-500" />
                </span>
                <textarea
                  placeholder="Add Description"
                  value={taskDescription}
                  onChange={handleDescriptionChange}
                  rows="4"
                  className="pl-10 pr-4 py-3 rounded-[0.75rem] border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                />
              </div>

              <div className="flex justify-end mt-4 text-[1rem] font-[500]">
                <button
                  onClick={handleAddTask}
                  className="bg-blue-600 text-white px-6 py-3 rounded-[0.5rem]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DayColumn;

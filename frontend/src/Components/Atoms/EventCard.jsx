import React, { useState } from "react";
import { XMarkIcon, PaperClipIcon, LinkIcon } from "@heroicons/react/24/solid";

const EventCard = ({ selectedDate, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleAddInput = () => {
    if (inputValue.trim() !== "") {
      setInputList([inputList, inputValue]);
      setInputValue("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20">
      <div className="flex flex-col bg-white rounded-lg p-4 w-96 shadow-sm">
        <div className="flex space-x-2 justify-between items-center">
          <div className="text-[16px] font-[390] text-gray-600">
            Add schedule
          </div>
          <div>
            <button className="items-center" onClick={onClose}>
              <XMarkIcon className="w-4 h-4 fill-red-500" />
            </button>
          </div>
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task.."
        />

        <div>
          <button
            onClick={handleAddInput}
            className="bg-blue-600 px-3 rounded-full text-white text-[13px]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

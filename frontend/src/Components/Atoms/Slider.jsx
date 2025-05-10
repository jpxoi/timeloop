import React, { useState } from "react";

const Slider = ({ days }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 10));
  };

  const handleNext = () => {
    setStartIndex(Math.min(days.length - 10, startIndex + 10));
  };

  return (
    <div className="slider-container">
      <button onClick={handlePrev}>&lt;</button>
      <div className="slider">
        <div
          className="slide-track"
          style={{ transform: `translateX(-${startIndex * 100}px)` }}
        >
          {days.slice(startIndex, startIndex + 10).map((day, index) => (
            <div key={index} className="slide">
              {day}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Slider;

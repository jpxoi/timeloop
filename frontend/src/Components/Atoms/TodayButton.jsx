import React from "react";

function TodayButton({ linkurl }) {
  function openLink(link) {
    alert("Opening" + link);
  }

  return (
    <button
      className="text-white bg-[#0094FF] px-4 py-2 rounded-full"
      onClick={openLink()}
    >
      Today
    </button>
  );
}

export default TodayButton;

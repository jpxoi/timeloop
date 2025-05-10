import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const LeftArrow = ({ buttonparams, iconparams, action }) => {
  return (
    <button onClick={action} className={`${buttonparams}`}>
      <ChevronLeftIcon className={`${iconparams}`} />
    </button>
  );
};

export default LeftArrow;

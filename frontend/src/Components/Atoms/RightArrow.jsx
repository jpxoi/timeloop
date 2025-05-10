import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const RightArrow = ({ buttonparams, iconparams, action }) => {
  return (
    <button onClick={action} className={`${buttonparams}`}>
      <ChevronRightIcon className={`${iconparams}`} />
    </button>
  );
};

export default RightArrow;

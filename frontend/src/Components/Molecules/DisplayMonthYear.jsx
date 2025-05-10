import React from "react";
import dayjs from "dayjs";

function DisplayMonthYear({ date = dayjs().format("MMMM, YYYY"), params }) {
  return <div className={`${params}`}>{date}</div>;
}

export default DisplayMonthYear;

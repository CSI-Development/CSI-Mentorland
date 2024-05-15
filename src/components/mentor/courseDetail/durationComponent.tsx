/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

function DurationComponent({ duration }: any) {
  const [timelimit, setTimelimit] = useState("0");

  useEffect(() => {
    if (duration) {
      const dateObj = new Date(duration * 1000);
      console.log(dateObj, "dateobj");
      const hours = dateObj.getUTCHours();
      const minutes = dateObj.getUTCMinutes();
      const seconds = dateObj.getSeconds();
      const timeString =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");
      console.log(timeString, "time string");
      setTimelimit(timeString);
    }
  }, [duration]);

  return (
    <p className="m-1 flex">
      <FaPlayCircle className="mr-1 mt-1 text-black" /> {timelimit}
    </p>
  );
}

export default DurationComponent;

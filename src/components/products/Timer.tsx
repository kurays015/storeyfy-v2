"use client";

import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({
  expiryTimestamp,
}: {
  expiryTimestamp: Date;
}) {
  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    console.log("mounted");
    const time = new Date();
    time.setSeconds(time.getSeconds() + 86400); // 24 hrs
    restart(time);
  }, []);

  return (
    <div>
      <div className="text-3xl font-bold">
        <span>{hours < 10 ? `0${hours}` : hours}</span> :{" "}
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span> :{" "}
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
}

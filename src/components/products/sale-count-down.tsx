"use client";

import { useTimer } from "react-timer-hook";

export default function SaleCountDown() {
  const time = new Date();

  time.setSeconds(time.getSeconds() + 86400); // 24 hrs

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  if (!seconds || !minutes || !hours)
    return (
      <div className="h-[60px] customSm:text-start md:text-center">
        Loading...
      </div>
    );

  return (
    <div className="my-4 text-3xl font-bold">
      <span className="rounded-xl bg-red-400 p-2 text-white">
        {hours < 10 ? `0${hours}` : hours}
      </span>{" "}
      :{" "}
      <span className="rounded-xl bg-red-400 p-2 text-white">
        {minutes < 10 ? `0${minutes}` : minutes}
      </span>{" "}
      :{" "}
      <span className="rounded-xl bg-red-400 p-2 text-white">
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}

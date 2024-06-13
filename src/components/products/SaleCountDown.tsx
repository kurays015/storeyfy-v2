"use client";

import { useTimer } from "react-timer-hook";

export default function SaleCountDown() {
  const time = new Date();

  time.setSeconds(time.getSeconds() + 86400); // 24 hrs

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  if (!seconds || !minutes || !hours) return <p>Loading...</p>;

  return (
    <div className="text-3xl font-bold mt-4">
      <span className="bg-red-400 text-white p-2 rounded-xl">
        {hours < 10 ? `0${hours}` : hours}
      </span>{" "}
      :{" "}
      <span className="bg-red-400 text-white p-2 rounded-xl">
        {minutes < 10 ? `0${minutes}` : minutes}
      </span>{" "}
      :{" "}
      <span className="bg-red-400 text-white p-2 rounded-xl">
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
}

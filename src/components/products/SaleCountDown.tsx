"use client";

import { useTimer } from "react-timer-hook";

export default function SaleCountDown() {
  const time = new Date();

  time.setSeconds(time.getSeconds() + 86400); // 24 hrs

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire called"),
  });

  if (!seconds || !minutes || !hours) return <p>Loading...</p>;

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

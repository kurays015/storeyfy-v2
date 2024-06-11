import MyTimer from "./Timer";

export default function SaleCountDown() {
  const time = new Date();

  time.setSeconds(time.getSeconds() + 86400); // 24 hrs
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

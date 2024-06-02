export default function isValidNumber(amount: string) {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(amount);
}

export default function isValidNumber(amount: string) {
  // Check if the string matches a valid number format (e.g., 123.45)
  const regex = /^\d+(\.\d{1,2})?$/;
  if (!regex.test(amount)) {
    return false;
  }

  // Convert the string to a float and check against the limit
  const numericAmount = parseFloat(amount);

  return numericAmount > 0 && numericAmount <= 999_999.99;
}

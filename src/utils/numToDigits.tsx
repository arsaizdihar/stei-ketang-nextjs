export const numToDigits = (num: number, digits = 2) => {
  return num.toLocaleString("id-ID", {
    minimumIntegerDigits: digits,
    useGrouping: false,
  });
};

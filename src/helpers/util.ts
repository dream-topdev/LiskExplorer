export const formatLSK = (value: number) => {
  return Intl.NumberFormat().format(
    value / 100000000
  ) + " LSK";
};

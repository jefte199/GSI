export const formatNumberDecimalPlaces = (
  number: number,
  decimalPlacesTotal = 2
) => {
  const local = 'pt-BR';
  const options = { maximumFractionDigits: decimalPlacesTotal };

  return Intl.NumberFormat(local, options).format(number);
};

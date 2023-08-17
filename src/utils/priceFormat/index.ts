export function priceFormat(value: number) {
  const local = 'pt-br';
  const options = { currency: 'BRL', style: 'currency' };

  const valueFormatted = Intl.NumberFormat(local, options).format(value);
  return valueFormatted;
}

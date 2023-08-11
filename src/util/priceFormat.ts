export function priceFormat(value: number) {
  const formattedValue = value.toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formattedValue.replace(',', '.');
}

import dayjs from 'dayjs';

export const formattedDate = (date: string | undefined) => {
  if (!date) return '-';

  return dayjs(date).format('DD/MM/YYYY');
};

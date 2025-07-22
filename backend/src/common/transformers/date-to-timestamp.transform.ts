import { Transform } from 'class-transformer';

export function TransformDateToTimestamp() {
  return Transform(({ value }) => {
    if (typeof value === 'string') {
      const [day, month, year] = value.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      return date.getTime();
    }
    return value as string;
  });
}

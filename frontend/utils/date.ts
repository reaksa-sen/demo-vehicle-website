import differenceInYears from 'date-fns/differenceInYears';

/**
 * Return date format
 */
export function dateFormat(date: string) {
  return new Date(date).toLocaleDateString('km-KH', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Calculate Age
 */
export function calculateAge(date: string) {
  return differenceInYears(new Date(), new Date(date));
}

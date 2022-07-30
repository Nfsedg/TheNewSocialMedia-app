const TIME_FORMAT = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const differentHour = (timestamp) => {
  const getStamp = new Date(timestamp);
  const now = Date.now();
  const elapsed = (getStamp - now) / 1000;

  for (const [unit, secondUnit] of TIME_FORMAT) {
    if (secondUnit < Math.abs(elapsed) || unit === 'second') {
      const value = Math.floor(elapsed / secondUnit);
      return {
        value, unit,
      };
    }
  }
  return { value: null, unit: null };
};

export default function useTimeAgo(timestamp) {
  const { value, unit } = differentHour(timestamp);
  const rtf = new Intl.RelativeTimeFormat(navigator.language, { style: 'short' });
  return rtf.format(value, unit);
}

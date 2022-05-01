export const formatTime = (now: number) => {
  const utc = new Date(now).toISOString(); // 2022-04-01T08:00:00.100Z
  const [, time] = utc.split('T'); // 08:00:00.100Z
  return time.slice(0, -1); // 08:00:00.100
};

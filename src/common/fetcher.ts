export const fetcher = async (url: string) => {
  const request = await fetch(url);
  const data = await request.json();

  return data.status === 404 ? [] : data;
};

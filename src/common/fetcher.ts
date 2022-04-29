export const fetcher = async (url: string) => {
  const request = await fetch(url);
  const data = await request.json();
  await delay(2000);
  return data.status === 404 ? [] : data;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  await delay(500);
  return response.status === 404 ? [] : data;
};

const map = new Map();
const fetchData = (url: string) => {
  if (map.has(url)) {
    const { promise, data, error } = map.get(url);

    if (promise) throw promise;

    /* if promise is resolved, then remove from map */
    map.delete(url);
    if (error) throw error;
    else return data;
  }

  /** aka suspender */
  const promise = fetcher(url)
    .then((data) => map.set(url, { data }))
    .catch((error) => map.set(url, { error }));

  map.set(url, { promise });
  throw promise;
};

export const useFetch = (url: string) => {
  return fetchData(url);
};

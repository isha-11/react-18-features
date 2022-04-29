import { useEffect, useMemo, useRef, useState } from 'react';
import { fetcher } from './fetcher';

export const useData = <T>(query: string) => {
  const promise = useRef();
  //   const [promise, setPromise] = useState<Promise<T> | undefined>();
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<Error | undefined>();

  const suspender = useMemo(
    () =>
      fetcher(
        query
          ? `https://restcountries.com/v3.1/name/${query}`
          : 'https://restcountries.com/v3.1/all',
      )
        .then((data) => {
          setData(data);
          //   setPromise(undefined);
        })
        .catch((error) => {
          setError(error);
          //   setPromise(undefined);
        }),
    [query],
  );

  if (promise.current !== suspender) {
    promise.current = suspender;
    throw suspender;
  }

  if (error) {
    throw error;
  }

  return data;
};

//   useEffect(() => {
//     const fn = async () => {
//       const promise = fetcher(
//         query
//           ? `https://restcountries.com/v3.1/name/${query}`
//           : 'https://restcountries.com/v3.1/all',
//       );
//       setPromise(promise);

//       promise
//         .then((data) => {
//           setData(data);
//           setPromise(undefined);
//         })
//         .catch((error) => {
//           setError(error);
//           setPromise(undefined);
//         });
//     };

//     fn();
//   }, [query]);

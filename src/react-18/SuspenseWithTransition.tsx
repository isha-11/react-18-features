import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { QueryClientProvider, useQuery } from 'react-query';
import { FlexBox } from 'react-styled-flex';
import { queryClient } from '../common/queryClient';
import { StyledInput } from '../common/styled';

export const SuspenseWithTransition = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FlexBox as='section' column gap={'1rem'} padding={'2rem 0'}>
        <StyledInput type='text' value={query} onChange={handleChange} />
        <Suspense fallback={'Loading...'}>
          <Result query={query} />
        </Suspense>
      </FlexBox>
    </QueryClientProvider>
  );
};

const Result = ({ query }: { query: string }) => {
  const people = useQuery(query, () =>
    fetcher(`https://swapi.dev/api/people/?search=${query}`),
  );

  console.log(people);
  return <div></div>;
};

const fetcher = async (url: string) => {
  const request = await fetch(url);
  return request.json();
};

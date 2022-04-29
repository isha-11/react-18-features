import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { QueryClientProvider, useQuery } from 'react-query';
import { FlexBox } from 'react-styled-flex';
import { fetcher } from '../common/fetcher';
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
  const { data: countries } = useQuery(query, () =>
    fetcher(
      query
        ? `https://restcountries.com/v3.1/name/${query}`
        : 'https://restcountries.com/v3.1/all',
    ),
  );

  return (
    <ul>
      {countries.map((country: Country) => (
        <li>{country.name.official}</li>
      ))}
    </ul>
  );
};

interface Country {
  name: {
    official: string;
  };
}

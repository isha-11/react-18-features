import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { QueryClientProvider } from 'react-query';
import { FlexBox } from 'react-styled-flex';
import { queryClient } from '../common/queryClient';
import { Flag, Item, List, StyledInput } from '../common/styled';
import { useFetch } from '../common/useFetch';

export const SuspenseWithTransition = () => {
  const [urgentQuery, setUrgentQuery] = useState('');
  const [nonUrgentQuery, setNonUrgentQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrgentQuery(e.target.value);
    startTransition(() => setNonUrgentQuery(e.target.value));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <FlexBox as='section' column gap={'1rem'} padding={'2rem 0'}>
        <StyledInput type='text' value={urgentQuery} onChange={handleChange} />
        <Suspense fallback={'Loading...'}>
          <div style={{ opacity: isPending ? 0.4 : 1 }}>
            <Result query={nonUrgentQuery} />
          </div>
        </Suspense>
      </FlexBox>
    </QueryClientProvider>
  );
};

const Result = ({ query }: { query: string }) => {
  // const { data: countries } = useQuery(query, () =>
  //   fetcher(
  //     query
  //       ? `https://restcountries.com/v3.1/name/${query}`
  //       : 'https://restcountries.com/v3.1/all',
  //   ),
  // );
  const countries: Country[] = useFetch(
    query
      ? `https://restcountries.com/v3.1/name/${query}`
      : 'https://restcountries.com/v3.1/all',
  );

  return (
    <List>
      {countries
        .sort((a, b) => a.name.official.localeCompare(b.name.official))
        .map((country: Country) => (
          <Item key={country.name.official}>
            <Flag src={country.flags.png} />
            <span>{country.name.official}</span>
          </Item>
        ))}
    </List>
  );
};

interface Country {
  name: {
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

import { ChangeEvent, Suspense, useState, useTransition } from 'react';
import { QueryClientProvider, useQuery } from 'react-query';
import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { queryClient } from '../common/queryClient';
import { StyledInput } from '../common/styled';
import { useFetch } from '../common/useFetch';

export const SuspenseWithTransition = () => {
  const [urgentQuery, setUrgentQuery] = useState('ind');
  const [nonUrgentQuery, setNonUrgentQuery] = useState('ind');
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
          <Result query={nonUrgentQuery} />
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
            <img
              src={country.flags.png}
              loading='lazy'
              height={20}
              width={32}
            ></img>
            <span>{country.name.official}</span>
          </Item>
        ))}
    </List>
  );
};

const List = styled(FlexBox).attrs({
  as: 'ul',
  column: true,
  gap: '0.25rem',
  padding: '0',
  margin: '0',
})``;

const Item = styled(FlexBox).attrs({
  as: 'li',
  gap: '1rem',
  alignItems: 'center',
  padding: '0.5rem',
})`
  list-style-type: none;
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
`;

interface Country {
  name: {
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

import { ChangeEvent, Suspense, useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Flag, Item, List, Spinner, StyledInput } from '../common/styled';
import { useFetch } from '../common/useFetch';

export const SuspenseWithTransition = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <FlexBox as='section' column gap={'1rem'}>
      <StyledInput type='text' value={query} onChange={handleChange} />
      <Suspense fallback={<Spinner />}>
        <Result query={query} />
      </Suspense>
    </FlexBox>
  );
};

const Result = ({ query }: { query: string }) => {
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

import { ChangeEvent, useDeferredValue, useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import {
  Card,
  ReactLogo,
  Spinner,
  StyledInput,
  StyledQuery,
} from '../common/styled';

export const DeferredValue = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isPending = query !== deferredQuery;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <FlexBox as='section' column gap={'1rem'}>
      <StyledInput type='text' value={query} onChange={handleChange} />
      {isPending ? <Spinner /> : <Result query={deferredQuery} />}
    </FlexBox>
  );
};

const Result = ({ query }: { query: string }) => {
  if (query === '') {
    return <div></div>;
  } else {
    const rows = Array.from({ length: 5000 }, (_, i) => {
      return (
        <Card key={i}>
          <ReactLogo />
          <StyledQuery>{query}</StyledQuery>
        </Card>
      );
    });

    return (
      <FlexBox center column gap={'1rem'}>
        {rows}
      </FlexBox>
    );
  }
};

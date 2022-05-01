import { ChangeEvent, useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Card, ReactLogo, StyledInput, StyledQuery } from '../common/styled';

export const DeferredValue = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <FlexBox as='section' column gap={'1rem'}>
      <StyledInput type='text' value={query} onChange={handleChange} />
      <Result query={query} />
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

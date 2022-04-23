import { ChangeEvent, useState, useTransition } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Card, ReactLogo, StyledInput, StyledQuery } from '../common/styled';

export const Transition = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const [deferredQuery, setDeferredQuery] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    startTransition(() => setDeferredQuery(e.target.value));
  };

  return (
    <FlexBox as='section' column gap={'1rem'} padding={'2rem 0'}>
      <StyledInput type='text' value={query} onChange={handleChange} />
      <div>
        {isPending && (
          <div>
            <br />
            <span>Loading...</span>
          </div>
        )}
        {!isPending && <Result query={deferredQuery} />}
      </div>
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

import { ChangeEvent, useState, useTransition } from 'react';
import { FlexBox } from 'react-styled-flex';
import { StyledInput } from '../common/styled';

export const Suspense = () => {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <FlexBox as='section' column gap={'1rem'} padding={'2rem 0'}>
      <StyledInput type='text' value={query} onChange={handleChange} />
      {isPending ? <div>Loading...</div> : <Result query={query} />}
    </FlexBox>
  );
};

const Result = ({ query }: { query: string }) => {
  return <div></div>;
};

import { ChangeEvent, useState, useTransition } from 'react';
import { FlexBox } from 'react-styled-flex';
import {
  Card,
  ReactLogo,
  Spinner,
  StyledInput,
  StyledQuery,
} from '../common/styled';

export const Transition = () => {
  const [urgentQuery, setUrgentQuery] = useState('');
  const [nonUrgentQuery, setNonUrgentQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrgentQuery(e.target.value);
    startTransition(() => setNonUrgentQuery(e.target.value));
  };

  return (
    <FlexBox as='section' column gap={'1rem'} padding={'2rem 0'}>
      <StyledInput type='text' value={urgentQuery} onChange={handleChange} />
      {isPending ? <Spinner /> : <Result query={nonUrgentQuery} />}
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

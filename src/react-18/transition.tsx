import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';

const EMPTY_RESULT = <div></div>;

export const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(EMPTY_RESULT);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery === '') {
      setSearchResult(EMPTY_RESULT);
    } else {
      const rows = Array.from({ length: 5000 }, (_, i) => {
        return (
          <Card key={i}>
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
              alt='logo'
              height={200}
              width={200}
            />
            <StyledQuery>{searchQuery}</StyledQuery>
          </Card>
        );
      });

      startTransition(() => {
        setSearchResult(
          <FlexBox center column gap={'1rem'}>
            {rows}
          </FlexBox>,
        );
      });
    }
  }, [searchQuery]);

  return (
    <FlexBox as='section' column gap={'1rem'} padding={'2rem 0'}>
      <StyledInput type='text' value={searchQuery} onChange={handleChange} />
      <div>
        {isPending && (
          <div>
            <br />
            <span>Loading...</span>
          </div>
        )}
        {!isPending && searchResult}
      </div>
    </FlexBox>
  );
};

const StyledInput = styled.input`
  padding: 0.5rem;
`;

const Card = styled(FlexBox).attrs({
  center: true,
  column: true,
  padding: '1rem',
  width: '100%',
})`
  background-color: #20232a;
  color: #61dafb;
`;

const StyledQuery = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;
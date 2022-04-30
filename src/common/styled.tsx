import styled from 'styled-components';
import { FlexBox } from 'react-styled-flex';

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.border};
  border-right: 1px solid ${(props) => props.theme.color.border};

  td,
  th {
    text-align: left;
    padding: 0.25rem;
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-left: 1px solid ${(props) => props.theme.color.border};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.secondary15};
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
`;

export const Card = styled(FlexBox).attrs({
  center: true,
  column: true,
  padding: '1rem',
  width: '100%',
})`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
`;

export const StyledQuery = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ReactLogo = styled.img.attrs({
  src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  alt: 'react logo',
})`
  height: 200px;
  width: 200px;
`;

/* suspense + transition components */

export const List = styled(FlexBox).attrs({
  as: 'ul',
  column: true,
  gap: '0.25rem',
  padding: '0',
  margin: '0',
})``;

export const Item = styled(FlexBox).attrs({
  as: 'li',
  gap: '1rem',
  alignItems: 'center',
  padding: '0.5rem',
})`
  list-style-type: none;
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.primary20};
`;

export const Flag = styled.img.attrs({
  loading: 'lazy',
  alt: 'country flag',
})`
  height: 1.25rem;
  width: 2rem;
`;

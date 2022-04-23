import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid black;

  td,
  th {
    text-align: left;
    padding: 0.25rem;
    border-bottom: 1px solid black;
    border-left: 1px solid black;

    &:last-child {
      border-right: 1px solid black;
    }
  }
`;

export const Button = styled.button`
  background-color: #20232a;
  color: #61dafb;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #383a3e;
  }
`;

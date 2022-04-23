import { useEffect, useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';

export const Batching = () => {
  const [boolean, setBoolean] = useState(true);
  const [number, setNumber] = useState(1);
  const [date, setDate] = useState(() => new Date().toLocaleString());
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const handleClick = () => {
    setBoolean(!boolean);
    setNumber(number + 1);
    setDate(new Date().toLocaleString());
  };

  const handleTimeoutClick = () => {
    setTimeout(() => {
      setBoolean(!boolean);
      setNumber(number + 1);
      setDate(new Date().toLocaleString());
    }, 0);
  };

  useEffect(() => {
    setElements((prevElements) => [
      ...prevElements,
      <tr key={`${date}_${number}_${boolean}`}>
        <td>{boolean.toString()}</td>
        <td>{number}</td>
        <td>{date}</td>
      </tr>,
    ]);
  }, [boolean, number, date]);

  return (
    <FlexBox column gap={'1rem'}>
      <FlexBox gap={'1rem'}>
        <Button onClick={handleClick}>setState in Event handler</Button>
        <Button onClick={handleTimeoutClick}>setState in setTimeout</Button>
      </FlexBox>
      <Table cellSpacing={0}>
        <thead>
          <tr>
            <th>Boolean</th>
            <th>Number</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </Table>
    </FlexBox>
  );
};

const Table = styled.table`
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

const Button = styled.button`
  background-color: #20232a;
  color: #61dafb;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #383a3e;
  }
`;

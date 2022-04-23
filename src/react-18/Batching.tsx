import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { FlexBox } from 'react-styled-flex';
import { Button, Table } from '../common/styled';

export const Batching = () => {
  const [boolean, setBoolean] = useState(true);
  const [number, setNumber] = useState(0);
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

  const handleFlushSyncClick = () => {
    flushSync(() => setBoolean(!boolean));
    flushSync(() => setNumber(number + 1));
    flushSync(() => setDate(new Date().toLocaleString()));
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
        <Button onClick={handleFlushSyncClick}>setState in flushSync</Button>
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

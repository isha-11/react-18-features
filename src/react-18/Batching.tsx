import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { FlexBox } from 'react-styled-flex';
import { Button, Table } from '../common/styled';
import { useRenderCount } from '../common/useRenderCount';

export const Batching = () => {
  const [boolean, setBoolean] = useState(true);
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(() => Date.now());
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const renderCount = useRenderCount([boolean, number, date]);

  const handleClick = () => {
    setBoolean(!boolean);
    setNumber(number + 1);
    setDate(Date.now());
  };

  const handleTimeoutClick = () => {
    setTimeout(() => {
      setBoolean(!boolean);
      setNumber(number + 1);
      setDate(Date.now());
    }, 0);
  };

  const handleFlushSyncClick = () => {
    flushSync(() => setBoolean(!boolean));
    flushSync(() => setNumber(number + 1));
    flushSync(() => setDate(Date.now()));
  };

  useEffect(() => {
    setElements((prevElements) => [
      ...prevElements,
      <tr key={`${date}_${number}_${boolean}`}>
        <td>{renderCount}</td>
        <td>{boolean.toString()}</td>
        <td>{number}</td>
        <td>{new Date(date).toISOString()}</td>
      </tr>,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boolean, number, date]);

  return (
    <FlexBox column gap={'1rem'}>
      <FlexBox gap={'1rem'}>
        <Button onClick={handleClick}>setState in event handler</Button>
        <Button onClick={handleTimeoutClick}>setState in setTimeout</Button>
        <Button onClick={handleFlushSyncClick}>setState in flushSync</Button>
      </FlexBox>
      <Table cellSpacing={0}>
        <thead>
          <tr>
            <th>Render Count</th>
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
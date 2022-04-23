import { useEffect, useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Button, Table } from '../common/styled';
import { useRenderCount } from '../common/useRenderCount';

export const Batching = () => {
  const [boolean, setBoolean] = useState(true);
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(() => new Date().toLocaleString());
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const renderCount = useRenderCount([boolean, number, date]);

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
        <td>{renderCount}</td>
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

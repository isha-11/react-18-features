import { useEffect, useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { formatDate } from '../common/format-date';
import { Button, ButtonContainer, Table } from '../common/styled';
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

  useEffect(() => {
    setElements((prevElements) => [
      ...prevElements,
      <tr key={`${date}_${number}_${boolean}`}>
        <td>{renderCount}</td>
        <td>{boolean.toString()}</td>
        <td>{number}</td>
        <td>{formatDate(date)}</td>
      </tr>,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boolean, number, date]);

  return (
    <FlexBox column gap={'1rem'}>
      <ButtonContainer gap={'0.5rem'}>
        <Button onClick={handleClick}>
          Update state in <strong>event handler</strong>
        </Button>
        <Button onClick={handleTimeoutClick}>
          Update state in <strong>setTimeout</strong>
        </Button>
      </ButtonContainer>
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

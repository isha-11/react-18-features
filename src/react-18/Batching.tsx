import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { FlexBox } from 'react-styled-flex';
import { formatTime } from '../common/format-time';
import { Button, ButtonContainer, Table } from '../common/styled';
import { useRenderCount } from '../common/useRenderCount';

export const Batching = () => {
  const [boolean, setBoolean] = useState(true);
  const [number, setNumber] = useState(0);
  const [time, setTime] = useState(() => Date.now());
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const renderCount = useRenderCount([boolean, number, time]);

  const handleClick = () => {
    setBoolean(!boolean);
    setNumber(number + 1);
    setTime(Date.now());
  };

  const handleTimeoutClick = () => {
    setTimeout(() => {
      setBoolean(!boolean);
      setNumber(number + 1);
      setTime(Date.now());
    }, 0);
  };

  const handleFlushSyncClick = () => {
    flushSync(() => setBoolean(!boolean));
    flushSync(() => setNumber(number + 1));
    flushSync(() => setTime(Date.now()));
  };

  useEffect(() => {
    setElements((prevElements) => [
      ...prevElements,
      <tr key={`${time}_${number}_${boolean}`}>
        <td>{renderCount}</td>
        <td>{boolean.toString()}</td>
        <td>{number}</td>
        <td>{formatTime(time)}</td>
      </tr>,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boolean, number, time]);

  return (
    <FlexBox column gap={'1rem'}>
      <ButtonContainer gap={'0.5rem'}>
        <Button onClick={handleClick}>
          Update state in <strong>event handler</strong>
        </Button>
        <Button onClick={handleTimeoutClick}>
          Update state in <strong>setTimeout</strong>
        </Button>
        <Button onClick={handleFlushSyncClick}>
          Update state in <strong>flushSync</strong>
        </Button>
      </ButtonContainer>
      <Table cellSpacing={0}>
        <thead>
          <tr>
            <th>Render Count</th>
            <th>Boolean</th>
            <th>Number</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </Table>
    </FlexBox>
  );
};

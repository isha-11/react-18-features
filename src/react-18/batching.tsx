import { useEffect, useState } from 'react';
import { Box, FlexBox } from 'react-styled-flex';

export const Batching = () => {
  const [boolean, setBoolean] = useState(true);
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(() => new Date().toString());
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const handleButtonClick = () => {
    setTimeout(() => {
      setBoolean(!boolean);
      setNumber(number + 1);
      setDate(new Date().toString());
    }, 0);
  };

  useEffect(() => {
    setElements((prevElements) => [
      ...prevElements,
      <Card
        key={`${date}_${number}_${boolean}`}
        boolean={boolean}
        number={number}
        date={date}
      />,
    ]);
  }, [boolean, number, date]);

  return (
    <>
      <button onClick={handleButtonClick}>Click</button>
      <FlexBox column gap={'1rem'}>
        {elements}
      </FlexBox>
    </>
  );
};

const Card = ({
  boolean,
  number,
  date,
}: {
  boolean: boolean;
  number: number;
  date: string;
}) => {
  return (
    <Box>
      <div>Boolean: {boolean.toString()}</div>
      <div>Number: {number}</div>
      <div>Date: {date}</div>
    </Box>
  );
};

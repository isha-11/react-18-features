import { useEffect, useState } from 'react';
import { Box, FlexBox } from 'react-styled-flex';

export const Batching = () => {
  const [bool, setBool] = useState(true);
  const [num, setNum] = useState(0);
  const [date, setDate] = useState(() => new Date().toString());
  const [ele, setEle] = useState<JSX.Element[]>([]);

  const handleButtonClick = () => {
    setTimeout(() => {
      setBool(!bool);
      setNum(num + 1);
      setDate(new Date().toString());
    }, 0);
  };

  useEffect(() => {
    setEle([
      ...ele,
      <Card
        key={`${date}_${num}_${bool}`}
        boolean={bool}
        number={num}
        date={date}
      />,
    ]);
  }, [bool, num, date]);

  return (
    <>
      <button onClick={handleButtonClick}>Click</button>
      <FlexBox column gap={'1rem'}>
        {ele}
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

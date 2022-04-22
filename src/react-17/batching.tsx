import { useEffect, useState } from 'react';

export const Batching = () => {
  const [bool, setBool] = useState(true);
  const [num, setNum] = useState(0);
  const [date, setDate] = useState(() => Date.now());
  const [ele, setEle] = useState<JSX.Element[]>([]);

  const handleButtonClick = () => {
    setTimeout(() => {
      setBool(!bool);
      setNum(num + 1);
      setDate(Date.now());
    }, 0);
  };

  useEffect(() => {
    setEle([
      ...ele,
      <div key={`${date}_${num}_${bool}`}>
        Bool: {bool.toString()} Num: {num} Date: {date}
      </div>,
    ]);
  }, [bool, num, date]);

  return (
    <>
      <button onClick={handleButtonClick}>Click</button>
      {ele}
    </>
  );
};

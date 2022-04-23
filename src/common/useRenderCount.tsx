import { DependencyList, useEffect, useRef } from 'react';

export const useRenderCount = (deps: DependencyList) => {
  const renderCountRef = useRef(1);

  useEffect(() => {
    renderCountRef.current += 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return renderCountRef.current;
};

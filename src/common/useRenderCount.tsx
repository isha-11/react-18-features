import { DependencyList, useEffect, useRef, useState } from 'react';

export const useRenderCount = (deps: DependencyList) => {
  const renderCountRef = useRef(1);

  useEffect(() => {
    renderCountRef.current += 1;
  }, deps);

  return renderCountRef.current;
};

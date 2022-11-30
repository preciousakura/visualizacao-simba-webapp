import { useRef, useEffect, useCallback, useState, useMemo } from 'react';

export function useBoxWidth<T extends HTMLElement | SVGElement>(size: number = 40) {
  const boxRef = useRef<T>(null);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  const defineSize = useCallback(() => {
    const current = boxRef.current;

    if (current) {
      const parent = current.parentElement;

      const w = parent?.clientWidth;
      const h = parent?.clientHeight;

      w && setWidth(w - size);
      h && setHeight(h - size);
    }
  }, [size]);

  useEffect(() => {
    defineSize();
  }, [defineSize]);

  useEffect(() => {
    const resize = () => defineSize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [defineSize]);

  return useMemo(
    () => ({
      boxRef,
      width,
      height
    }),
    [width, height]
  );
}

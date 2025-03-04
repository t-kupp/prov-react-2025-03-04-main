import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height, isMobile };
}

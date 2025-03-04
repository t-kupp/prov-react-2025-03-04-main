// 5. Custom hook (3p)
// Flytta all logik som hanterar width och height in i en
// custom hook: useWindowSize
// useWindowSize ska returnera ett objekt med width, height och isMobile
// isMobile är true om fönstret är mindre än 600px bred.
//
// Move all logic that handles width and height into one
// custom hook: useWindowSize
// useWindowSize should return an object with width, height and isMobile
// isMobile is true if the window is less than 600px wide.

import useWindowSize from '@/hooks/useWindowSize';

export default function Question5() {
  const { width, height, isMobile } = useWindowSize();

  return (
    <div>
      <p>Fönsterbredd: {width}px</p>
      <p>Fönsterhöjd: {height}px</p>
      <p>Mobile: {isMobile ? 'True' : 'False'}</p>
    </div>
  );
}

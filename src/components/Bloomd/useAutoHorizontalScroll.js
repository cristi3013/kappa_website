import { useCallback, useEffect, useRef } from 'react';

const useAutoHorizontalScroll = (screenOffset = 0.2) => {
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    const offset = window.innerHeight * screenOffset;

    const userScroll = window.scrollY;

    const containerTop = containerRef.current.offsetTop;
    const containerBottom =
      containerRef.current.offsetTop + containerRef.current.offsetHeight;

    const top = containerTop - window.innerHeight + offset;
    const bottom = containerBottom - offset;

    const isInView = userScroll > top && userScroll < bottom;

    if (isInView) {
      const horizontalScroll = (userScroll - top) / (bottom - top);
      const maxPercentageCanTranslate =
        1 - window.innerWidth / containerRef.current.offsetWidth;

      containerRef.current.style.transform = `translateX(-${
        horizontalScroll * maxPercentageCanTranslate * 100
      }%)`;
      containerRef.current.style.transition = 'transform 10ms linear';
    }
  }, [screenOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return containerRef;
};

export default useAutoHorizontalScroll;

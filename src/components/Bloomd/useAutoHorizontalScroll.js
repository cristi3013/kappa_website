import { useCallback, useEffect, useRef } from 'react';

const useAutoHorizontalScroll = () => {
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    const userScroll = window.scrollY;

    const containerTop = containerRef.current.offsetTop;
    const containerBottom =
      containerRef.current.offsetTop + containerRef.current.offsetHeight;

    const top = containerTop - window.innerHeight + window.innerHeight * 0.3;
    const bottom = containerBottom - window.innerHeight * 0.6;

    const isInView = userScroll > top && userScroll < bottom;

    if (isInView) {
      const horizontalScroll = (userScroll - top) / (bottom - top);
      const maxPercentageCanTranslate =
        1 - window.innerWidth / containerRef.current.offsetWidth;

      containerRef.current.style.transform = `translateX(-${
        horizontalScroll * maxPercentageCanTranslate * 100
      }%)`;
      containerRef.current.style.transition = 'transform 25ms linear';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return containerRef;
};

export default useAutoHorizontalScroll;

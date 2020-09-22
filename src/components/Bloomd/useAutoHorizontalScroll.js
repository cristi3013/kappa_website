import { useCallback, useEffect, useRef } from 'react';

const useAutoHorizontalScroll = () => {
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    const userScroll = window.scrollY;

    const containerTop = containerRef.current.offsetTop;
    const containerBottom =
      containerRef.current.offsetTop + containerRef.current.offsetHeight;

    const top = (containerTop - window.innerHeight) * 1.15;
    const bottom = containerBottom * 0.85;

    const isInView = userScroll > top && userScroll < bottom;

    if (isInView) {
      const horizontalScroll = (userScroll - top) / (bottom - top);
      const maxPercentageCanTranslate =
        1 - window.innerWidth / containerRef.current.offsetWidth;

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          horizontalScroll * maxPercentageCanTranslate * 100
        }%)`;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return containerRef;
};

export default useAutoHorizontalScroll;

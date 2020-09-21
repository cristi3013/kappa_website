import { useCallback, useEffect, useRef } from 'react';

const useAutoHorizontalScroll = () => {
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    const userScroll = window.scrollY;

    const containerTop = containerRef.current.offsetTop;
    const containerBottom =
      containerRef.current.offsetTop + containerRef.current.offsetHeight;

    const top = (containerTop - window.innerHeight) * 1.1;
    const bottom = containerBottom * 0.9;

    const isInView = userScroll > top && userScroll < bottom;

    if (isInView) {
      const horizontalScroll = (userScroll - top) / (bottom - top);
      const percentageContainerWidthFromWindow =
        window.innerWidth / containerRef.current.offsetWidth;

      if (
        containerRef.current &&
        horizontalScroll <= 1 - percentageContainerWidthFromWindow
      ) {
        containerRef.current.style.transform = `translateX(-${
          horizontalScroll * 100
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

import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useVideoAutoplayInView = () => {
  const ref = useRef();
  const [wrapperRef, isContainerInView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (isContainerInView) {
      ref.current.play();
    } else {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [isContainerInView]);

  return [wrapperRef, ref];
};

export default useVideoAutoplayInView;

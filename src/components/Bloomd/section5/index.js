import React, { memo } from 'react';
import useAutoHorizontalScroll from '../useAutoHorizontalScroll';
import {
  BloomdSectionWrapperCss,
  InfoBlockCss,
  ContentWrapperCss,
} from './index.css';
import image1Png from '../images/image5-1.png';
import feedbackMp4 from './videos/feedback.mp4';
import IphoneXFrame from '../IphoneXFrame';
import useVideoAutoplayInView from '../useVideoAutoplayInView';

const BloomdSection5 = memo(function BloomdSection5() {
  const ref = useAutoHorizontalScroll();
  const [feedbackMp4WrapperRef, feedbackMp4Ref] = useVideoAutoplayInView();

  return (
    <BloomdSectionWrapperCss>
      <InfoBlockCss>
        <h1>Constantly asking for feedback</h1>
        <p>
          A user-friendly feedback form has been implemented to constantly “take
          the pulse“ of the community.
        </p>
      </InfoBlockCss>
      <ContentWrapperCss ref={ref}>
        <IphoneXFrame>
          <img src={image1Png} alt="" />
        </IphoneXFrame>
        <IphoneXFrame ref={feedbackMp4WrapperRef}>
          <video
            src={feedbackMp4}
            ref={feedbackMp4Ref}
            type="video/mp4"
            crossOrigin="true"
            autoPlay={false}
            loop
            playsInline
            muted
          />
        </IphoneXFrame>
      </ContentWrapperCss>
    </BloomdSectionWrapperCss>
  );
});

export default BloomdSection5;

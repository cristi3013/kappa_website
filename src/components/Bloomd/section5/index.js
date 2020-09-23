import React, { memo } from 'react';
import useAutoHorizontalScroll from '../useAutoHorizontalScroll';
import {
  BloomdSectionWrapperCss,
  InfoBlockCss,
  ContentWrapperCss,
} from './index.css';
import image1Png from '../images/image5-1.png';
import image2Png from '../images/image5-2.png';
import IphoneXFrame from '../IphoneXFrame';

const BloomdSection5 = memo(function BloomdSection5() {
  const ref = useAutoHorizontalScroll();

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
        <IphoneXFrame>
          <img src={image2Png} alt="" />
        </IphoneXFrame>
      </ContentWrapperCss>
    </BloomdSectionWrapperCss>
  );
});

export default BloomdSection5;

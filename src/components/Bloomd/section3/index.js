import React, { memo } from 'react';
import useAutoHorizontalScroll from '../useAutoHorizontalScroll';
import {
  BloomdSectionWrapperCss,
  InfoBlockCss,
  ContentWrapperCss,
} from './index.css';
import image1Png from '../images/image3-1.png';
import image2Png from '../images/image3-2.png';
import image3Png from '../images/image3-3.png';

const BloomdSection3 = memo(function BloomdSection2() {
  const ref = useAutoHorizontalScroll();

  return (
    <BloomdSectionWrapperCss>
      <InfoBlockCss>
        <h1>A Progressive Web App</h1>
        <p>
          A PWA satisfies the need for cross-device accessibility (smartphones,
          tablets, desktop). We delivered the MVP in two months.
        </p>
      </InfoBlockCss>
      <ContentWrapperCss ref={ref}>
        <div>
          <img src={image1Png} alt="" />
          <img src={image2Png} alt="" />
          <em>Different mobile viewport width</em>
        </div>

        <div>
          <img src={image3Png} alt="" />
          <em>Tablet/desktop view</em>
        </div>
      </ContentWrapperCss>
      <em class="auto-horizontal-scroll-active">
        Different mobile/tablet and desktop viewport width
      </em>
    </BloomdSectionWrapperCss>
  );
});

export default BloomdSection3;

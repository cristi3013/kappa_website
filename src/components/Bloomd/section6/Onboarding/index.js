import React, { memo } from 'react';
import { PaddingLeftRightCss, DescriptionCss } from '../index.css';
import { ScreensWrapperCss } from './index.css';
import editProfileImagePng from './images/edit-profile-image.png';
import goToChatsPng from './images/go-to-chats.png';
import deletePostPng from './images/delete-post.png';
import goToRequestPng from './images/go-to-request.png';
import goToHomepagePng from './images/go-to-homepage.png';
import finishPng from './images/finish.png';
import useAutoHorizontalScroll from '../../useAutoHorizontalScroll';

const Onboarding = memo(function Onboarding() {
  const ref = useAutoHorizontalScroll();

  return (
    <>
      <PaddingLeftRightCss>
        <DescriptionCss>
          <h3>Changes in Vision</h3>
          <p>
            We chose colours that are contrasting enough for users with impaired
            vision to use the app comfortably.
          </p>
        </DescriptionCss>
      </PaddingLeftRightCss>

      <ScreensWrapperCss ref={ref}>
        <img src={editProfileImagePng} alt="" />
        <img src={goToChatsPng} alt="" />
        <img src={deletePostPng} alt="" />
        <img src={goToRequestPng} alt="" />
        <img src={goToHomepagePng} alt="" />
        <img src={finishPng} alt="" />
      </ScreensWrapperCss>
    </>
  );
});

export default Onboarding;

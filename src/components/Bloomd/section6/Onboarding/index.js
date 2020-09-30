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
          <h3>Getting help: onboarding</h3>
          <p>
            A tutorial takes the user through the basics in order to guide (the
            elderly) around the “look” and “feel” of the app.
          </p>
        </DescriptionCss>
      </PaddingLeftRightCss>

      <ScreensWrapperCss ref={ref}>
        <div>
          <img src={editProfileImagePng} alt="" />
        </div>
        <div>
          <img src={goToChatsPng} alt="" />
        </div>
        <div>
          <img src={deletePostPng} alt="" />
        </div>
        <div>
          <img src={goToRequestPng} alt="" />
        </div>
        <div>
          <img src={goToHomepagePng} alt="" />
        </div>
        <div>
          <img src={finishPng} alt="" />
        </div>
      </ScreensWrapperCss>
    </>
  );
});

export default Onboarding;

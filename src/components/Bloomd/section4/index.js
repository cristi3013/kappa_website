import React, { memo } from 'react';
import {
  BloomdSectionWrapperCss,
  TitleWrapperCss,
  //   InfoBlockCss,
  ContentWrapperCss,
} from './index.css';
import image1Png from '../images/image4-1.png';
import image2Png from '../images/image4-2.png';
import image3Png from '../images/image4-3.png';
import image4Png from '../images/image4-4.png';
import image5Png from '../images/image4-5.png';
import image6Png from '../images/image4-6.png';

const BloomdSection4 = memo(function BloomdSection4() {
  return (
    <BloomdSectionWrapperCss>
      <TitleWrapperCss>
        <img src={image1Png} alt="" />
        <div>
          <h1>A safe community</h1>
          <p>
            The iProov integration ensures users are biometrically authenticated
            and verified through Genuine Presence Assurance.
          </p>
        </div>
      </TitleWrapperCss>
      <ContentWrapperCss>
        <div className="left">
          <img src={image2Png} alt="" />
          <img src={image3Png} alt="" />
          <em>Users are quickly informed they must authenticate</em>
        </div>
        <div className="center">
          <img src={image4Png} alt="" />
          <em>Using iProov for biometric authentication</em>
        </div>
        <div className="right">
          <div className="right-images">
            <div>
              <img src={image5Png} alt="" />
            </div>
            <div>
              <img src={image6Png} alt="" />
            </div>
          </div>
          <em>Give feedback after every chat via an accessible report form.</em>
        </div>
      </ContentWrapperCss>
    </BloomdSectionWrapperCss>
  );
});

export default BloomdSection4;

import React from 'react';
import {
  BloomdSectionWrapperCss,
  InfoBlockCss,
  ContentWrapperCss,
  ImagesWrapperCss,
  VideoWrapperCss,
} from './index.css';
import image2Png from '../images/image2.png';
import image3Png from '../images/image3.png';
import video1Png from '../images/video1.png';
import IphoneXFrame from '../IphoneXFrame';

const BloomdSection2 = () => {
  return (
    <BloomdSectionWrapperCss>
      <InfoBlockCss>
        <p>
          When the COVID-19 virus hit we soon realised that we could do our bit
          to help with the other global pandemic: loneliness and social
          isolation.
        </p>
        <p>
          We developed this simplified version of Bloomd with the goal of
          creating a safe place to keep each other company during this difficult
          time.
        </p>
      </InfoBlockCss>
      <ContentWrapperCss>
        <div style={{ width: '100%', maxWidth: 650 }}>
          <ImagesWrapperCss>
            <IphoneXFrame>
              <img src={image2Png} alt="" />
            </IphoneXFrame>
            <IphoneXFrame>
              <img src={image3Png} alt="" />
            </IphoneXFrame>
          </ImagesWrapperCss>
          <em>Easily post a request and manage replies.</em>
        </div>

        <VideoWrapperCss>
          <IphoneXFrame>
            <img src={video1Png} alt="" />
          </IphoneXFrame>
          <em>Cancelling upcoming appointments.</em>
        </VideoWrapperCss>
      </ContentWrapperCss>
    </BloomdSectionWrapperCss>
  );
};

export default BloomdSection2;

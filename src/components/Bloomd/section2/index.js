import React from 'react';
import {
  BloomdSectionWrapperCss,
  InfoBlockCss,
  ContentWrapperCss,
  ImagesWrapperCss,
  VideoWrapperCss,
} from './index.css';
import image1Png from '../images/image2-1.png';
import image2Png from '../images/image2-2.png';
import videoPng from '../images/video2.png';
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
        <div style={{ width: '100%', maxWidth: 700 }}>
          <ImagesWrapperCss>
            <IphoneXFrame>
              <img src={image1Png} alt="" />
            </IphoneXFrame>
            <IphoneXFrame>
              <img src={image2Png} alt="" />
            </IphoneXFrame>
          </ImagesWrapperCss>
          <em>Easily post a request and manage replies.</em>
        </div>

        <VideoWrapperCss>
          <IphoneXFrame>
            <img src={videoPng} alt="" />
          </IphoneXFrame>
          <em>Respond to requests and save them for later.</em>
        </VideoWrapperCss>
      </ContentWrapperCss>
    </BloomdSectionWrapperCss>
  );
};

export default BloomdSection2;

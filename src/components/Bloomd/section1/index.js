import React from 'react';
import {
  BloomdSectionWrapperCss,
  InfoBlockCss,
  InfoBlockItemCss,
  ItemsCss,
  ImageCss,
} from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';
import image from '../images/image1.png';

const BloomdSection1 = () => {
  return (
    <BloomdSectionWrapperCss>
      <InfoBlockCss>
        <h1>bloomd™ app</h1>

        <p>
          <a
            href="https://www.bloomd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="website"
          >
            bloomd™
          </a>{' '}
          is a digital community which facilitates intergenerational exchange of
          knowledge, experience, and companionship in a fun and safe way.
        </p>
        <p>
          The straightforward guiding belief of this project is that the whole
          world would benefit from accessing the experience of our elders. Our
          goal was to create an <span>elder-friendly user interface</span> that
          would enable giving and receiving advice.
        </p>
        <ItemsCss>
          <InfoBlockItemCss>
            <h4>| Responsibilities &lt;</h4>
            <p>Development Design Interaction Front-End Back-End Testing</p>
          </InfoBlockItemCss>

          <InfoBlockItemCss>
            <h4>| Technologies used &lt;</h4>
            <p>Typescript ReactJS PHP Laravel MySQL Iproov Twilio Pusher</p>
          </InfoBlockItemCss>

          <InfoBlockItemCss>
            <h4>| Live app &lt;</h4>
            <SecondaryLinkCss
              as="a"
              to=""
              href="https://app.bloomd.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              bloomd.com
            </SecondaryLinkCss>
          </InfoBlockItemCss>
        </ItemsCss>
      </InfoBlockCss>
      <ImageCss>
        <img src={image} alt="" />
      </ImageCss>
    </BloomdSectionWrapperCss>
  );
};

export default BloomdSection1;

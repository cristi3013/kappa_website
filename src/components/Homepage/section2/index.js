import React from 'react';
import { PrimaryLinkCss } from '../../../layout/index.css';
import {
  SecondSectionWrapperCss,
  BlockCss,
  InfoCss,
  ImageCss,
} from './index.css';
import img1 from './images/image1.png';
import img2 from './images/image2.png';

const SecondSection = () => {
  return (
    <SecondSectionWrapperCss>
      <h4>| Currently working on &lt;</h4>
      <BlockCss>
        <InfoCss>
          <h2>Bryant Dental</h2>
          <p>
            Bryant Dental is a UK-based dentistry equipment manufacturer and
            distributor.
          </p>
          <section>
            <p>Acknowledgements:</p>
            <ul>
              <li>
                2019 <span>Dental Industry Awards Best Website</span>
              </li>
              <li>
                2018 <span>Awwwards Honorable Mention</span>
              </li>
            </ul>
          </section>
          <PrimaryLinkCss to="/bryant">View project</PrimaryLinkCss>
        </InfoCss>
        <ImageCss>
          <img src={img1} alt="Bryant Dental" />
        </ImageCss>
      </BlockCss>

      <BlockCss>
        <InfoCss>
          <h2>Nova AI</h2>
          <p>
            Nova is a powerful AI assisted dental practice management and
            counter litigation system.
          </p>
          <section>&nbsp;</section>
          <PrimaryLinkCss to="/nova">View project</PrimaryLinkCss>
        </InfoCss>
        <ImageCss>
          <img src={img2} alt="Nova AI" />
        </ImageCss>
      </BlockCss>
    </SecondSectionWrapperCss>
  );
};
export default SecondSection;

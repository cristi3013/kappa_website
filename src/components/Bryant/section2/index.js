import React from 'react';
import {
  BryantSectionWrapperCss,
  InfoBlockCss,
  InfoBlockItemCss,
  ItemsCss,
  ImageCss,
} from './index.css';
import { SecondaryLinkCss } from '../../../layout/index.css';
import image from '../images/image2.png';

const BryantSection2 = () => {
  return (
    <BryantSectionWrapperCss>
      <InfoBlockCss>
        <p>
          The dentistry market is very capricious, but strives for innovation.
          We helped Bryant Dental provide the security of their brand to
          dentists and to be seen for their capability to innovate & design
          dental products.
        </p>
      </InfoBlockCss>
      <ImageCss>
        <img src={image} />
      </ImageCss>
    </BryantSectionWrapperCss>
  );
};

export default BryantSection2;

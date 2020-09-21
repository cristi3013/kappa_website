import React from 'react';
import {
  NovaSectionWrapperCss,
  InfoBlockCss,
  InfoBlockItemCss,
  ItemsCss,
} from './index.css';
import { PrimaryLinkCss } from '../../../layout/index.css';

import image from '../images/image2.png';

const NovaSection6 = () => {
  return (
    <NovaSectionWrapperCss>
      <InfoBlockCss>
        <h1>Bryant Dental</h1>
        <PrimaryLinkCss to="/bryant">Go to project</PrimaryLinkCss>
      </InfoBlockCss>
    </NovaSectionWrapperCss>
  );
};

export default NovaSection6;

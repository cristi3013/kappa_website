import React, { memo } from 'react';
import { ReactComponent as IphoneXFrameSvg } from './iphone-x-frame.svg';
import {
  IphoneWrapperCss,
  DropShadowWrapperCss,
  ImageWrapperCss,
} from './index.css';

const IphoneXFrame = memo(function IphoneXFrame({ children }) {
  return (
    <IphoneWrapperCss>
      <DropShadowWrapperCss />
      <IphoneXFrameSvg />
      <ImageWrapperCss>{children}</ImageWrapperCss>
    </IphoneWrapperCss>
  );
});

export default IphoneXFrame;

import React, { memo, forwardRef } from 'react';
import { ReactComponent as IphoneXFrameSvg } from './iphone-x-frame.svg';
import {
  IphoneWrapperCss,
  DropShadowWrapperCss,
  ImageWrapperCss,
} from './index.css';

const IphoneXFrame = memo(
  forwardRef(function IphoneXFrame({ children }, ref) {
    return (
      <IphoneWrapperCss ref={ref}>
        <DropShadowWrapperCss />
        <IphoneXFrameSvg />
        <ImageWrapperCss>{children}</ImageWrapperCss>
      </IphoneWrapperCss>
    );
  })
);

export default IphoneXFrame;

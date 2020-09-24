import styled from 'styled-components';

export const IphoneWrapperCss = styled.div`
  position: relative;

  svg {
    position: relative;
    z-index: 2;
    pointer-events: none;
  }
`;

export const DropShadowWrapperCss = styled.div`
  position: absolute;
  border-radius: 16%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 97.5%;
  height: 97.5%;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
`;

export const ImageWrapperCss = styled.div`
  border-radius: 5%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
  z-index: 1;
  width: 87%;
  height: 94%;

  img,
  video {
    width: 100%;
    height: 100%;
  }
`;

import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const BryantSectionWrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0px;

  justify-content: center;
  align-items: center;

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    padding: 50px 0px 25px;
    width: auto;
  }
`;

export const InfoBlockCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin-bottom: 50px;
  p,
  h1 {
    width: 50vw;
    max-width: 648px;
  }
  @media (max-width: ${screens.lg}) {
    width: 100%;

    p,
    h1,
    h4 {
      padding: 0px 25px;
      width: auto;
    }
  }
`;

export const ImageCss = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 80px 0px;
  img {
    width: 100%;
  }

  @media (max-width: ${screens.lg}) {
    margin: 75px 0px 0px;
    max-height: 350px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    img {
      width: auto;
      height: 100%;
      max-height: 350px;
    }
  }
`;

export const ItemsCss = styled.div`
  display: flex;
  margin: 25px 0px 25px;
  justify-content: center;
  width: 100%;

  .render3d {
    width: 100%;
    max-width: 520px;
    position: absolute;
    z-index: 0;
    height: auto;
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const HintWrapperCss = styled.div`
  width: 100%;
  position: relative;

  img {
    position: absolute;
    top: -115px;
    width: 100%;
    z-index: -1;
  }
`;

export const InfoBlockItemCss = styled.div`
  width: auto;
  margin: 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }

  img.hidden {
    opacity: 0;
  }
  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
  }
`;

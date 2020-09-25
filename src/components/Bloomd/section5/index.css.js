import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';

export const BloomdSectionWrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 130px;
  background: ${colors.grey2};
  overflow: hidden;

  justify-content: center;
  align-items: center;

  @media (max-width: ${screens.sm}) {
    padding-top: 50px;
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    width: auto;
  }
`;

export const InfoBlockCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 648px;

  h1 {
    color: ${colors.black};
  }

  p {
    color: ${colors.grey};
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

export const ContentContainerCss = styled.div`
  width: 100%;
  overflow-x: auto;
  user-select: none;
`;

export const ContentWrapperCss = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;

  & > * {
    width: 47.5%;
    max-width: 300px;

    &:first-child {
      margin-right: 25%;
    }
  }

  @media (max-width: ${screens.md}) {
    width: 640px;
    display: inline-flex;
    max-width: initial;
    padding: 0 5%;
    align-self: flex-start;

    & > *:first-child {
      margin-right: 5%;
    }
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 60px;
    margin-bottom: 50px;
  }
`;

import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';

export const BloomdSectionWrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 130px 0;
  background: ${colors.grey2};
  overflow: hidden;

  justify-content: center;
  align-items: center;

  @media (max-width: ${screens.sm}) {
    padding: 50px 0;
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

export const ContentWrapperCss = styled.div`
  width: 80vw;
  max-width: 800px;
  margin-top: 130px;
  display: flex;
  justify-content: center;

  & > * {
    width: 47.5%;
    max-width: 300px;

    &:first-child {
      margin-right: 25%;
    }
  }

  @media (max-width: ${screens.md}) {
    display: inline-flex;
    width: 800px;
    max-width: initial;
    padding: 0 5%;
    align-self: flex-start;
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 60px;
  }
`;

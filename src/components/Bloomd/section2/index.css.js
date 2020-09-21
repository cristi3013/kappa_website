import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';

export const BloomdSectionWrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 130px;
  background: ${colors.grey2};

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
  p,
  h1 {
    width: 50vw;
    max-width: 648px;
  }

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
  margin-top: 130px;
  display: flex;
  justify-content: space-between;

  em {
    display: block;
    color: ${colors.grey};
    text-align: center;
    margin: 0;
    margin-top: 50px;
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 60px;
  }

  @media (max-width: ${screens.xl}) {
    flex-direction: column;
    align-items: center;

    & > * {
      width: 100%;

      &:first-child {
        margin-bottom: 50px;
      }
    }
  }
`;

export const ImagesWrapperCss = styled.div`
  display: flex;

  & > * {
    width: 40%;
    height: auto;
    max-width: 270px;

    &:first-child {
      margin-right: 10%;
    }
  }

  @media (max-width: ${screens.xl}) {
    justify-content: center;
  }
`;

export const VideoWrapperCss = styled.div`
  & > *:first-child {
    max-width: 270px;
    margin: 0 auto;

    @media (max-width: ${screens.sm}) {
      max-width: 240px;
    }
  }
`;

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

  em.auto-horizontal-scroll-active {
    display: none;
    color: ${colors.grey};
    text-align: center;
    margin: 0;
    margin-top: 50px;
    padding: 0 25px;
  }

  @media (max-width: ${screens.sm}) {
    padding: 50px 0;
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    width: auto;

    em.auto-horizontal-scroll-active {
      display: block;
    }
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
  max-width: 1200px;
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  em {
    display: block;
    color: ${colors.grey};
    text-align: center;
    margin: 0;
    margin-top: 50px;
  }

  & > * {
    &:first-child {
      width: 40%;
      margin-right: 65px;

      img {
        max-width: 40%;
      }

      & > *:first-child {
        margin-right: 35px;
      }
    }

    &:last-child {
      width: 60%;

      img {
        max-width: 100%;
      }
    }
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 50px;
  }

  @media (max-width: ${screens.lg}) {
    display: inline-flex;
    width: 1200px;
    max-width: initial;
    padding: 0 5%;
    align-self: flex-start;

    em {
      display: none;
    }
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 60px;
  }
`;

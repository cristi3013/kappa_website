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
  width: 50vw;
  max-width: 648px;

  h1 {
    color: ${colors.black};
  }

  p {
    color: ${colors.grey4};
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
  width: 80%;
  margin: 0 auto;
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
      margin-right: 20px;
      text-align: center;

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

  @media (max-width: ${screens.lg}) {
    display: inline-flex;
    width: 1200px;
    max-width: initial;
    padding: 0 5%;
    align-self: flex-start;

    & > * {
      &:first-child {
        margin-right: 35px;

        img {
          max-width: initial;
          width: calc(50% - (35px / 2));
        }
      }
    }

    em {
      display: none;
    }
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 60px;
  }
`;

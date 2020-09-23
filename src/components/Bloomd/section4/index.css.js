import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';

export const BloomdSectionWrapperCss = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 130px 0;
  background: ${colors.grey3};
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

export const TitleWrapperCss = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;
  width: 50vw;
  max-width: 648px;

  img {
    margin-right: 50px;
    width: 140px;
    height: auto;
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

  @media (max-width: ${screens.md}) {
    img {
      display: none;
    }
  }
`;

export const ContentWrapperCss = styled.div`
  width: 80vw;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  em {
    display: block;
    color: ${colors.grey};
    text-align: center;
    margin: 0;
    margin-top: 50px;
    height: 40px;
  }

  .left,
  .center,
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  .left {
    img {
      width: 95%;
    }

    img:first-child {
      margin-bottom: 30px;
    }
  }

  .center {
    img {
      width: 96.25%;
      height: auto;
    }
  }

  .right-images {
    display: flex;
    justify-content: space-between;

    img {
      width: 49%;
      height: auto;
    }

    img:first-child {
      margin-right: 2%;
    }
  }

  & > * {
    margin-right: 3%;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    align-items: center;

    & > * {
      /* width: 100%; */
      margin-bottom: 50px;
    }
  }

  @media (max-width: ${screens.sm}) {
    margin-top: 60px;
  }
`;

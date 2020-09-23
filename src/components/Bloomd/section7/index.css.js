import styled, { css } from 'styled-components';
import { screens, colors } from '../../../constants/theme';

export const BloomdSectionWrapperCss = styled.div`
  padding: 130px 0;
  background: ${colors.grey2};

  h1,
  h3 {
    color: ${colors.black};
  }

  h3 {
    font-style: italic;
  }

  p {
    color: ${colors.grey};
  }

  em {
    display: block;
    color: ${colors.grey};
    text-align: center;
    margin: 0;
    margin-top: 50px;
  }

  @media (max-width: ${screens.sm}) {
    padding: 50px 0;
  }
`;

export const PaddingLeftRightCss = styled.div`
  padding: 0 5%;
`;

export const DescriptionCss = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media (max-width: ${screens.xs}) {
    margin: 0;
  }
`;

export const BackgroundLineCss = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 210px;
    background: #fdfdfd;
    width: 90%;

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    transform: translateY(130%);

    @media (max-width: ${screens.lg}) {
      transform: translateY(230%);
    }

    @media (max-width: ${screens.xs}) {
      transform: translateY(200%);
    }

    ${({ right }) =>
      right &&
      css`
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
      `};
  }
`;

export const GroupWrapperCss = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    &:first-child {
      width: 50%;
      height: auto;
      max-width: 300px;
      margin-right: 10%;
    }

    &:last-child {
      max-width: 400px;
    }
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    align-items: center;

    & > * {
      &:first-child {
        order: 2;
        margin-right: 0;
      }

      &:last-child {
        order: 1;
        margin-bottom: 50px;

        text-align: center;
        svg {
          margin: 0 auto;
        }
      }
    }
  }

  @media (max-width: ${screens.xs}) {
    & > *:first-child {
      width: 65%;
    }
  }

  ${({ right }) =>
    right &&
    css`
      & > * {
        &:first-child {
          order: 2;
          margin-right: 0;
          margin-left: 10%;
        }

        &:last-child {
          order: 1;
        }
      }

      @media (max-width: ${screens.lg}) {
        & > *:first-child {
          margin-left: 0;
        }
      }
    `}
`;

export const GroupDescriptionCss = styled.div`
  svg {
    display: block;
  }

  transform: translateY(35%);

  @media (max-width: ${screens.lg}) {
    transform: none;
  }
`;

export const SeparatorCss = styled.div`
  height: 80px;
`;

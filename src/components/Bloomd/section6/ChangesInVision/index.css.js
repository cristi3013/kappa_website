import styled from 'styled-components';
import { screens } from '../../../../constants/theme';

export const DesktopWrapperCss = styled.div`
  display: grid;
  grid-template-areas:
    'reply feedback'
    'reply-em feedback-em';
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 10%;
  justify-content: center;

  #reply {
    grid-area: reply;
  }
  #feedback {
    grid-area: feedback;
  }
  #reply-em {
    grid-area: reply-em;
  }
  #feedback-em {
    grid-area: feedback-em;
  }

  @media (max-width: ${screens.lg}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);

    #feedback {
      margin-top: 50px;
    }

    grid-template-areas:
      'reply'
      'reply-em'
      'feedback'
      'feedback-em';
  }

  @media (max-width: ${screens.sm}) {
    display: none;
  }
`;

export const DesktopImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      margin-bottom: 20px;
    }
  }

  img {
    width: 100%;
    max-width: 255px;
    height: auto;

    &.no-color {
      filter: grayscale(100%);
    }
  }
`;

export const MobileWrapperCss = styled.div`
  @media (min-width: ${screens.sm}) {
    display: none;
  }

  svg {
    display: block;
    margin: 0 auto;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const MobileImagesWrapperCss = styled.div`
  display: inline-flex;
  align-items: flex-end;
  user-select: none;
  margin-top: 40px;
  padding: 0 5%;

  & > * {
    width: 255px;

    &:first-child {
      padding-right: 10%;
    }
  }

  img {
    transition: filter 0.25s;
    ${({ noColor }) => noColor && 'filter: grayscale(100%)'};
  }
`;

import styled from 'styled-components';
import { screens } from '../../../constants/theme';
import personPng from './images/person.png';
import appPng from './images/app.png';

export const WrapperCss = styled.div`
  display: flex;

  & > * {
    height: 40vw;
    min-height: 250px;
    max-height: 600px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;

    &:first-child {
      background-image: url(${personPng}),
        radial-gradient(1000px circle at 50% 0, #8a7db3, #595087);
      width: 40%;
    }

    &:last-child {
      background-image: url(${appPng}), linear-gradient(#c6fddd, #c6fddd);
      width: 60%;
    }
  }

  @media (max-width: ${screens.md}) {
    flex-direction: column;

    & > * {
      &:first-child,
      &:last-child {
        width: 100%;
      }
    }
  }
`;

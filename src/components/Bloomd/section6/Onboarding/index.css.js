import styled from 'styled-components';
import { screens } from '../../../../constants/theme';

export const ScreensWrapperCss = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 50px;
  overflow: hidden;
  justify-content: center;

  img {
    display: block;
    width: calc((100% - ${({ children }) => children.length} * 5%) / 6);
    padding-right: 5%;
    max-width: 160px;
    height: auto;

    &:last-child {
      padding-right: 0;
    }
  }

  @media (max-width: ${screens.xl}) {
    display: inline-flex;
    img {
      width: 160px;
      max-width: initial;
    }
  }
`;

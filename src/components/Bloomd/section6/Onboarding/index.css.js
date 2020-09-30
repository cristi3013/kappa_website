import styled from 'styled-components';
import { screens } from '../../../../constants/theme';

export const ScreensWrapperCss = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 50px;
  overflow: hidden;
  justify-content: center;

  & > * {
    width: calc((100% - ${({ children }) => children.length} * 5%) / 6);
    padding-right: 5%;
    max-width: 160px;

    &:last-child {
      padding-right: 0;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${screens.xl}) {
    display: inline-flex;
    & > * {
      width: 160px;
      max-width: initial;
    }
  }
`;

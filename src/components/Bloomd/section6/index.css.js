import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';

export const BloomdSectionWrapperCss = styled.div`
  padding: 130px 0;
  background: ${colors.grey3};

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

export const TitleWrapperCss = styled.div`
  margin: 0 auto;
  max-width: 648px;
`;

export const DescriptionCss = styled.div`
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media (max-width: ${screens.xs}) {
    margin: 0;
  }
`;

export const SectionContainerCss = styled.div`
  padding-top: 65px;
  padding-bottom: 65px;
  ${({ first }) => first && 'padding-top: 130px'};

  @media (max-width: ${screens.lg}) {
    padding-top: 25px;
    padding-bottom: 25px;
    ${({ first }) => first && 'padding-top: 50px'};
  }

  ${({ last }) => last && 'padding-bottom: 0'};
`;

export const DescriptiveNavigationWrapperCss = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    flex: 1;
    &:first-child {
      max-width: 300px;
      margin-right: 50px;
    }

    &:last-child {
      max-width: 400px;

      transform: translateY(35%);
    }
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    align-items: center;

    & > * {
      &:first-child {
        width: 65%;
        margin-right: 0;
      }

      &:last-child {
        transform: none;
        width: 100%;
        margin-top: 40px;

        img {
          max-width: 100%;
        }
      }
    }
  }

  @media (max-width: ${screens.xs}) {
    & > *:last-child {
      align-self: flex-start;
    }
  }
`;

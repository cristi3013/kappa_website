import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const InternshipFirstSectionWrapperCss = styled.div`
  display: flex;
  padding-left: 8.33vw;
  padding-top: 200px;
  padding-bottom: 150px;

  align-items: flex-start;

  h4 {
    width: 16.66vw;
    margin-right: 8.33vw;
    @media (max-width: ${screens.lg}) {
      width: 100%;
      margin-right: 0px;
    }
  }

  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    padding: 50px 25px 25px;
  }
`;

export const InfoBlockCss = styled.div`
  width: 50vw;
  @media (max-width: ${screens.lg}) {
    width: 100%;
    margin-bottom: 100px;
  }

  p {
    span,
    a {
      border-bottom: 2px solid ${colors.blue};
      text-decoration: none;
    }
  }
`;

export const ItemsCss = styled.div`
  margin: 140px 0px;
`;

export const InfoBlockItemCss = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  img {
    width: 100%;
    max-width: 500px;
    margin-bottom: 50px;
  }

  h1 {
    margin: 0px 0px 5px;
  }
  .container {
    position: relative;
  }
  .mask {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    height: 100%;
    maxwidth: 100%;
    height: 84%;
  }
`;
export const PrimaryLinkCss = styled.div`
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.03em;
  text-decoration: none;
  width: fit-content;
  color: ${colors.white};
  display: inline-block;

  padding: 7px 7px 8px;
  margin: -7px 25px 20px 0px;

  text-align: center;

  position: relative;
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);

  &:after {
    position: absolute;
    transition: all 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    content: '';
    width: 100%;
    right: auto;
    left: 0;
    bottom: 0;
    height: 2px;
    background: ${colors.blue};
  }

  &:hover {
    cursor: pointer;
    &:after {
      width: 0%;
      right: 0;
      left: auto;
    }
  }

  a {
    text-decoration: none;
  }
`;

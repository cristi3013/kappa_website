import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';

export const InternshipSecondSectionWrapperCss=styled.div`
display: flex;
  padding-left: 8.33vw;
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

  .gif{
    padding-top:50px;
  }

`;
export const SecondSectionContainerCss = styled.div`

	h2 {
		color: ${colors.white};
	}

	@media (max-width: ${screens.lg}) {
		margin: 25px;
	}
`;

export const InfoBlockCss = styled.div`
  display:inline;
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

  h2{
    line-height:90%;
  }

  .text{
    position:relative;
  }

  .paragraph{
    position:absolute;
    top:70px;
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

`;



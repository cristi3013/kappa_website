import styled from 'styled-components';
import { screens, colors } from '../../../constants/theme';
export const FirstSectionWrapperCss = styled.div`
  height: 100vh;
  width:100%;
  display: flex;

  justify-content: center;
  align-items: center;
 

`;

export const FirstSectionContainerCss = styled.div`
width:100%;
display: flex;
  flex-direction:column;
max-width:648px;

 h2{
   color:${colors.white};
 }

`

export const TitleCss = styled.h4`
color:${colors.brown};
`;
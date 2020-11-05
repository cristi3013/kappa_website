import styled from 'styled-components';
import {screens, fonts, colors} from '../../../constants/theme';

export const InternshipThirdSectionWrapperCss = styled.div`
display: flex;
  padding-left: 8.33vw;
  align-items: flex-start;
  padding-top: 200px;

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


  .paragraphText{
    color:#9694A7;
    padding-bottom:150px;
  }

  .paragraphStyled{
    color:#F5F5F5; 
    font-style:italic; 
  }

  .armyGifContainer{
    position:relative;
    padding-top:150px;
  }

  .armyMask{
  display:block;
  position: absolute;
  margin-bottom:100px;
  right:0;
  top:150px;
  left:0;
  }

  .cap{
    position: absolute;
    bottom:0;
    right:0px;
    top:42px;
    left:-50px;
  }

  .book{
    position: absolute;
    bottom:0;
    right:0;
    top:340px;
    left:267px;
  }

`;

export const InfoBlockCss = styled.div`


`;

export const ItemsCss = styled.div`
`;

export const InfoBlockItemCss=styled.div`

display:flex;
flex-direction: column;
.kGifContainer{
  position:relative;
  padding:0;
  margin:0;
  left:325px;
}

.kMask {
  display:block;
  position: absolute;
  bottom:0;
  right:0;
  top:0;
  left:0;
 
}

.vrGoogles {
  position: absolute;
  bottom:0;
  right:0;
  top:-40px;
  left:120px;
}

.vrController1{
  position:absolute;
  bottom:0;
  right:190px;
  top:140px;
  left:-110px;
}

.vrController2{
  position:absolute;
  bottom:0;
  right:0;
  top:140px;
  left:190px;
}

.paragraph{
  position:relative;
  padding-top:210px;
  padding-left:100px;
}

.paragraphText{
  padding:0;
}

.paragraphText{
  color: #9694A7;
}

.paragraphStyled{
    color:#F5F5F5; 
    font-style:italic; 
  }

.paragraph2{
  position:absolute;
  padding-top:110px;
  margin-left:-350px;
  
}
`;
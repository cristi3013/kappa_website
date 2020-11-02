import styled from 'styled-components';
import {screens, fonts, colors} from '../../../constants/theme';

export const InternshipThirdSectionWrapperCss = styled.div`
display: flex;
  padding-left: 8.33vw;
  align-items: flex-start;
  padding-top: 50px;

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

  .paragraphTitle{
    font-size:32px;
  }

  .paragraphText{
    font-size:18px;
    color:#9694A7;
  }

  .paragraphStyled{
    color:#F5F5F5; 
    font-style:italic; 
    font-size:18px;
  }

  .parentContainer{
    position:absolute;
    margin-left:0px;
  }
  .gifContainer{
    position:relative;
  }
  .armyMask{
    position: absolute;
    bottom: 0px;
    right: 0;
    top: 0;
    left: 0;
    maxwidth:100%;
  }
`;

export const InfoBlockCss = styled.div`


`;

export const ItemsCss = styled.div``;

export const InfoBlockItemCss=styled.div`

.parentContainer{
  position:absolute;
  margin-left:320px;
}
.gifContainer{
  position:relative;
  margin-top:40px;
}
.mask{
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  maxwidth:100%;
}

.vrGoogles{
position:absolute;
bottom: 200px;
right: 0;
top: 0px;
left: 120px;
maxwidth:100%;
}

.vrController1{
  position:absolute;
  bottom: 0px;
  right: 0px;
  top: 135px;
  left:-110px;
  maxwidth:100%;

}

.vrController2{
  position:absolute;
  bottom: 0px;
  right: 0px;
  top: 125px;
  left:210px;
  maxwidth:100%;
}



`;
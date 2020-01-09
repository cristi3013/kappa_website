import styled from 'styled-components';
import { screens, colors } from '../../constants/theme';

export const HeaderWrapperCss = styled.div`
left:0px;
right:0px;
top:0px;
padding:0px 60px;
  height: 80px;
position:fixed;
  display: flex;

  justify-content: space-between;
  align-items: center;
 
 nav,a{
     color:${colors.white};
     text-decoration:none;
     font-style: normal;
font-weight: 500;

 }

 li{
    list-style: none;
 }




`;
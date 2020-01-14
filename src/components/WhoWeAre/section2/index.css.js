import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';



export const WhoWeAreSecondSectionWrapperCss = styled.div`

    display:flex;
    padding-left:8.33vw;
    padding-top:0px;
    padding-bottom:150px;
    
    align-items:flex-start;

    @media (max-width:${screens.lg}) {
        flex-direction:column;
        padding:25px;
    }

    h4{
        width:16.66vw;
        margin-right:8.33vw;

        @media (max-width:${screens.lg}) {
        width:100%;
        margin-right:0px;
        }
    }
`;

export const InfoBlockCss = styled.div`
    width:50vw;

    @media (max-width:${screens.lg}) {
        width:100%;
        margin-right:0px;
        }

    ol{
        counter-reset:listCnt;
        padding-inline-start:0px;
    }
    li{
        list-style:none;
        margin-bottom:60px;
       h3{
           margin-bottom:3px;
       }

    }
    li:before{
        counter-increment:listCnt;
        content:counter(listCnt);
        color:${colors.white};
        border:2px solid ${colors.white};
        display:inline-block;
        border-radius:50%;
        width:38px;
        height:38px;
        text-align:center;

        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 0px;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        margin-right:24px;
        margin-left:-65px;

        @media (max-width:${screens.lg}) {
            margin-left:0px;
        }
        

    }
`;
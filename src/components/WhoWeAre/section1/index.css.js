import styled from 'styled-components';
import { screens, fonts, colors } from '../../../constants/theme';



export const WhoWeAreFirstSectionWrapperCss = styled.div`

    display:flex;
    padding-left:8.33vw;
    padding-top:200px;
    padding-bottom:150px;
    
    align-items:flex-start;

    h4{
        width:16.66vw;
        margin-right:8.33vw;
    }
`;

export const InfoBlockCss = styled.div`
    width:50vw;

    p{
        span{
            border-bottom:2px solid ${colors.brown}
        }
    }
`;
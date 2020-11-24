import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-left: 120px;
`

export const InternshipSection5WrapperCss = styled.div`
    display: flex;
    max-width: 1440px;
    margin: auto;

    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 50px 25px 25px;
    }
`

export const InfoBlockCss = styled.div`
    /* global styles */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        display: flex;
    }

    .box {
        flex-wrap: wrap;
    }

    .box1 {
        flex: 0.7;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }

    .box2 {
        flex: 1;
    }

    .box2 .firstParagraph {
        color: #9694a7;
        max-width: 900px;
        margin-bottom: 150px;
    }

    .box3 {
        width: 100%;
    }

    .box3 .gifContainer {
        position: relative;
        padding-left: 60%;
        transform: scale(0.9);
    }

    .box3 .gifPortal {
        position: absolute;
        top: 0px;
        width: 100%;
        height: auto;
        margin-top: -35%;
        margin-left: -39%;
        transform: scale(0.3);
    }

    .box3 .portalMask {
        position: absolute;
        width: 100%;
        height: auto;
        margin-top: -35%;
        margin-left: -39%;
        transform: scale(0.31);
    }

    .box3 .mug {
        position: absolute;
        margin-left: -40%;
        margin-top: -27%;
        width: 100%;
        height: auto;
        transform: scale(0.1);
    }

    .box3 .mugHand {
        position: absolute;
        margin-left: -57%;
        margin-top: -5%;
        width: 100%;
        height: auto;
        transform: scale(0.24);
    }

    .box3 .keyboard {
        position: absolute;
        margin-left: -29%;
        margin-top: -32%;
        width: 100%;
        height: auto;
        transform: scale(0.2);
    }

    .box3 .keyboardHand {
        position: absolute;
        margin-left: -20%;
        margin-top: -60%;
        width: 100%;
        height: auto;
        transform: scale(0.2);
    }

    .box3 .document {
        position: absolute;
        margin-left: -53%;
        margin-top: -47%;
        width: 100%;
        height: auto;
        transform: scale(0.1);
    }

    .box3 .documentHand {
        position: absolute;
        margin-left: -61.5%;
        margin-top: -33%;
        width: 100%;
        height: auto;
        transform: scale(0.22);
    }
`

import styled, { keyframes } from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const BackgroundSection = styled.div`
    background: ${colors.dark_grey};
    /* overflow: hidden; */
    .textBar {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        height: auto;
        width: 2500px;
        padding-bottom: 100px;
    }

    .symbol {
        font-style: italic;
        color: #7481f4;
        width: 100%;
        height: auto;
    }

    .box4 h1 {
        color: white;
        font-style: italic;
    }
    .box5 h1 {
        color: white;
        font-style: italic;
    }
    .box6 h1 {
        color: white;
        font-style: italic;
    }
    .box7 h1 {
        color: white;
        font-style: italic;
    }
    .box8 h1 {
        color: white;
        font-style: italic;
    }
    .box9 h1 {
        color: white;
        font-style: italic;
    }
`

export const SectionWrapper = styled.div`
    margin-left: 120px;
`

export const InternshipSection10WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
`

export const InfoBlockCss = styled.div`
    .sectionWrapper {
        padding-top: 100px;
        padding-bottom: 80px;
        flex: wrap;
    }

    .firstContainer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 250px;
    }

    .box {
        flex: wrap;
    }

    .box1 {
        flex: 1;
    }

    .box1 .gifWrapper {
        position: relative;
        transform: scale(0.5);
    }

    .box1 img {
        width: 100%;
        height: auto;
    }
    .box1 .pGif {
        position: absolute;
        top: 0;
        left: 0;
    }
    .box1 .pMask {
        position: absolute;
        top: 0;
        left: 0;
    }

    .box2 {
        flex: 1;
        width: 100%;
        height: 100px;
    }

    .box2 .title {
        color: white;
        margin-bottom: 35px;
        max-width: 600px;
    }

    .box2 .firstParagraph {
        color: #9694a7;
        line-height: 32px;
        max-width: 450px;
    }
`

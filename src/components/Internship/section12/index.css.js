import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-top: 180px;
    margin-left: 120px;
`

export const InternshipSection12WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
`
export const InfoBlockCss = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .firstContainer {
        margin-top: 50px;
    }

    .box1 {
        flex: 1;
        margin-left: 13%;
    }

    .box1 .title {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: white;
        margin-bottom: 35px;

        max-width: 600px;
    }

    .box1 .firstParagraph {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
        max-width: 550px;
    }

    .secondContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .box2 {
        flex: 1;
        margin-left: 13%;
    }

    .box2 h4 {
        color: white;
        font-style: italic;
        font-weight: lighter;
        font-family: IBM Plex Sans;
    }

    .box2 ul li {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
        max-width: 550px;
    }

    .box ul {
        margin-top: 37px;
        margin-left: 20px;
    }

    .symbol {
        font-style: italic;
        color: #7481f4;
        width: 100%;
        height: auto;
    }

    .box3 {
        flex: 1;
    }

    .box3 .gifWrapper {
        position: relative;
    }

    .box3 .gifWrapper img {
        width: 100%;
        height: auto;
    }

    .box3 .aGif {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.8);
    }

    .box3 .aMask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.821);
    }

    .box3 .upSphere {
        position: absolute;
        width: 100%;
        transform: scale(0.13);
        margin-top: -30%;
        right: 40%;
    }

    .box3 .soap {
        position: absolute;
        width: 100%;
        transform: scale(0.33);
        margin-left: 33%;
        margin-top: 33%;
    }
`

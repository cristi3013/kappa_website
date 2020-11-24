import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-left: 120px;
`

export const InternshipThirdSectionWrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
    margin-bottom: 200px;
`

export const InfoBlockCss = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 230px;
    }

    .box {
        flex-wrap: wrap;
    }

    /* BOX 1 */

    .box1 {
        flex: 1.3;
        margin-top: 50px;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }

    .box1 .title {
        color: white;
        margin-top: 30px;
    }

    .box1 .paragraph1 {
        color: #9694a7;
        max-width: 700px;
        line-height: 32px;
        margin-top: 40px;
    }

    .box1 .styledParagraph {
        font-style: italic;
        color: white;
    }

    /* BOX 2 */

    .box2 {
        flex: 1;
    }

    .box2 .img {
        height: 100%;
        width: 100%;
    }

    .box2 .gifContainer1 {
        position: relative;
        transform: scale(0.8);
    }

    .box2 .kGif {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.7);
    }

    .box2 .kMask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.71);
    }

    .box2 .vrGoogles {
        position: absolute;
        margin-top: -10%;
        margin-left: 20%;
        width: 100%;
        height: auto;
        transform: scale(0.3);
    }

    .box2 .vrController1 {
        position: absolute;
        margin-top: 20%;
        margin-left: -40%;
        width: 100%;
        height: auto;
        transform: scale(0.3);
    }

    .box2 .vrController2 {
        position: absolute;
        margin-top: 22%;
        margin-left: 40%;
        width: 100%;
        height: auto;
        transform: scale(0.3);
    }

    /* CONTAINER 2 */

    .container2 {
        display: flex;

        margin-top: 300px;
        margin-bottom: 140px;
    }
    /* BOX 3 */

    .box3 {
        flex: 0.48;
        margin-top: -50px;
        padding-right: 200px;
    }

    .box3 .img {
        height: 100%;
        width: 100%;
    }

    .box3 .gifContainer2 {
        position: relative;
        transform: scale(1.3);
    }

    .box3 .armyGif {
        position: absolute;
        margin-top: 0;
        margin-left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.5);
    }
    .box3 .aMask {
        position: absolute;
        margin-top: 0;
        margin-left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.51);
    }

    .box3 .book {
        position: absolute;
        margin-top: 17%;
        margin-left: 25%;
        width: 100%;
        height: auto;
        transform: scale(0.2);
    }

    .box3 .cap {
        position: absolute;
        margin-top: -34%;
        margin-left: -22%;
        width: 100%;
        height: auto;
        transform: scale(0.27);
    }

    /* BOX 4 */

    .box4 {
        flex: 1;
        max-width: 500px;
    }

    .box4 .title2 {
        color: white;
        margin-bottom: 35px;
    }

    .box4 p {
        color: #9694a7;
        line-height: 32px;
    }

    .box4 .paragraph2 {
        margin-bottom: 45px;
    }

    .box4 .styledParagraph2 {
        font-style: italic;
        color: white;
    }

    /* OUTSIDE CONTAINER */

    /* BOX 5 */

    .box5 {
        flex: 1 100%;
        height: 100%;
        width: 40%;
        margin-left: 5%;
    }

    .box5 .title3 {
        color: white;
        margin-bottom: 40px;
    }

    .box5 p {
        color: #9694a7;
        line-height: 32px;
    }

    .box5 .styledParagraph3 {
        font-style: italic;
        color: white;
    }
`

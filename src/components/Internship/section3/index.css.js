import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

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
        justify-content: space-around;

        margin-bottom: 230px;
    }

    .box {
        flex-wrap: wrap;
    }

    /* BOX 1 */

    .box1 {
        flex: 2;
        margin-top: 70px;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
        font-weight: lighter;
        font-family: IBM Plex Sans;
        margin-bottom: 40px;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }

    .box1 .title {
        font-family: IBM Plex Sans;
        color: white;
        font-weight: lighter;
        margin-bottom: 50px;
    }

    .box1 .paragraph1 {
        font-family: IBM Plex Sans;
        color: #9694a7;
        font-weight: lighter;
        width: 60%;
        line-height: 32px;
        font-size: 18px;
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
    }

    .box2 .kMask {
        position: absolute;
        top: 0;
        left: 0;
    }

    .box2 .vrGoogles {
        position: absolute;
        bottom: 70%;
        left: 25%;
    }

    .box2 .vrController1 {
        position: absolute;
        top: 55%;
        right: 90%;
    }

    .box2 .vrController2 {
        position: absolute;
        top: 55%;
        left: 45%;
    }

    /* CONTAINER 2 */

    /* BOX 3 */

    .container2 {
        display: flex;
        justify-content: space-around;
        margin-bottom: 140px;
    }

    .box3 {
        flex: 1;
        height: 100px;
        width: 100%;
        margin-top: 80px;
    }

    .box3 .img {
        height: 100%;
        width: 100%;
    }

    .box3 .gifContainer2 {
        position: relative;
    }

    .box3 .aMask {
        position: absolute;
        top: 0;
        left: 0;
    }

    .box3 .book {
        position: absolute;
        top: 85%;
        left: 40%;
    }

    .box3 .cap {
        position: absolute;
        bottom: 60%;
        right: 85%;
    }

    /* BOX 4 */

    .box4 {
        flex: 1;
    }

    .box4 .title2 {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: white;
        margin-bottom: 35px;
    }

    .box4 p {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: #9694a7;
        font-size: 18px;
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
        margin-left: 25%;
    }

    .box5 .title3 {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: white;
        margin-bottom: 40px;
    }

    .box5 p {
        font-family: IBM Plex Sans;
        font-weight: lighter;
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
    }

    .box5 .styledParagraph3 {
        font-style: italic;
        color: white;
    }
`

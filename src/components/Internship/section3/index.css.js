import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const InternshipThirdSectionWrapperCss = styled.div`
    position: relative;
    max-width: 1440px;
    margin: auto;
    bottom: 140px;

    h4 {
        width: 320px;
        margin-right: 160px;
        margin-top: 0;
        margin-bottom: 40px;
        @media (max-width: ${screens.lg}) {
            width: 100%;
            margin-right: 0px;
        }
    }

    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 50px 25px 25px;
    }
`
export const InfoBlockCss = styled.div`
    h1.title {
        margin-top: 0px;
    }
`

export const InfoBlockItemCss = styled.div`
    .section {
        display: flex;
        margin-bottom: 200px;
    }
    .box {
        width: 100%;
        height: 100%;
        margin: 5px;
        display: flex;
        justify-content: start;
        padding-left: 15px;
    }

    .box1 {
        flex: 1;
        width: 55%;
        padding-left: 0px;
    }

    .box1 p {
        color: gray;
        margin-top: 0;
    }

    .box .styledParagraph1 {
        font-style: italic;
        color: white;
    }
    .box2 {
        flex: 1;
        width: 45%;
    }

    .gifSection1 {
        position: relative;
        margin-top: -120px;
        margin-left: 100px;
    }

    .kGif {
        position: absolute;
    }
    .kMask {
        position: absolute;
        margin: 0;
        padding: 0;
    }

    .vrGoogles {
        position: absolute;
        bottom: 30px;
        left: 120px;
    }

    .vrController1 {
        position: absolute;
        top: 130px;
        left: -110px;
    }

    .vrController2 {
        position: absolute;
        top: 130px;
        left: 200px;
    }

    .section2 {
        display: flex;
        flex-direction: column;
    }
    .wrapper {
        display: flex;
        margin-bottom: 150px;
    }
    .box3 {
        max-width: 50%;
        margin-left: 50px;
    }

    .gifSection2 {
        position: relative;
        margin-top: 100px;
    }

    .armyGif {
        position: absolute;
    }

    .armyMask {
        position: absolute;
        margin: 0;
        padding: 0;
    }

    .book {
        position: absolute;
        top: 190px;
        left: 280px;
    }
    .cap {
        position: absolute;
        top: -100px;
        left: -60px;
    }

    .title2 {
        margin-bottom: 44px;
    }
    .paragraph2 {
        color: gray;
        line-height: 32px;
        margin-bottom: 50px;
    }

    .paragraph3 {
        color: gray;
        line-height: 32px;
    }

    .styledParagraph2 {
        font-style: italic;
        color: white;
    }

    .title3 {
        margin-bottom: 30px;
    }

    .paragraph4 {
        color: gray;
        line-height: 32px;
    }

    .styledParagraph3 {
        font-style: italic;
        color: white;
    }
`

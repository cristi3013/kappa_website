import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const InternshipThirdSectionWrapperCss = styled.div`
    position: relative;
    height: 1400px;
    max-width: 1440px;
    margin: auto;

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
export const ItemsCss = styled.div``
export const InfoBlockItemCss = styled.div`
    display: flex;
    p.paragraph1 {
        line-height: 30px;
        color: gray;
        font-style: normal;
        margin-top: 0;
        width: 650px;
    }

    .styledParagraph1 {
        font-style: italic;
        color: white;
    }

    .gifSection1 {
        position: relative;
        width: 500px;
    }

    .kGif {
        position: absolute;
        padding-left: 200px;
    }

    .kMask {
        position: absolute;
        padding-left: 200px;
    }

    .vrGoogles {
        position: absolute;
        padding-left: 300px;
    }

    .vrController1 {
        position: absolute;
        padding-top: 120px;
        padding-left: 90px;
    }
    .vrController2 {
        position: absolute;
        padding-top: 120px;
        padding-left: 400px;
    }
    .armyGif {
        position: absolute;
        margin-top: 200px;
    }

    .aMask1 {
        position: absolute;
        margin-top: 200px;
    }
`

export const InfoBlockItem2Css = styled.div`
    .armyGif {
        position: absolute;
        margin-top: 300px;
    }

    .aMask1 {
        position: absolute;
        margin-top: 300px;
    }

    .title2 {
        position: absolute;
        margin-top: 240px;
        margin-left: 560px;
    }

    .paragraph2 {
        position: absolute;
        margin-top: 320px;
        margin-left: 560px;
        width: 520px;
        color: gray;
        line-height: 30px;
    }

    .paragraph3 {
        position: absolute;
        margin-top: 440px;
        margin-left: 560px;
        width: 520px;
        line-height: 30px;
        color: gray;
    }

    .styledParagraph2 {
        color: white;
        font-style: italic;
    }
`

export const InfoBlockItem3Css = styled.div`
    .title3 {
        position: absolute;
        margin-top: 675px;
        margin-left: 112px;
    }

    .paragraph4 {
        position: absolute;
        margin-top: 737px;
        margin-left: 112px;
        width: 520px;
        line-height: 30px;
        color: gray;
    }
`

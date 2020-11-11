import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const InternshipSection5WrapperCss = styled.div`
    display: flex;
    max-width: 1440px;
    height: 800px;

    margin: auto;
    align-items: flex-start;

    h4 {
        width: 320px;
        margin-top: 0;
        margin-right: 160px;
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
    width: 648px;

    .firstParagraph {
        margin-top: 0;
        line-height: 32px;
        color: gray;
        margin-bottom: 137px;
    }

    .styledParagraph {
        font-style: italic;
        color: white;
    }

    .gifSection {
        position: relative;
        padding-left: 180px;
    }

    .portalGif {
        position: absolute;
    }

    .portalMask {
        position: absolute;
    }

    .documentHand {
        position: absolute;
        top: -40px;
        left: 30px;
    }

    .document {
        position: absolute;
        top: 65px;
        left: 155px;
    }

    .mugHand {
        top: 190px;
        left: 30px;
        position: absolute;
    }

    .mug {
        top: 130px;
        right: 270px;
        position: absolute;
    }

    .keyboardHand {
        position: absolute;
        bottom: -110px;
        right: 20px;
    }

    .keyboard {
        position: absolute;
        top: 20px;
        left: 300px;
    }
`

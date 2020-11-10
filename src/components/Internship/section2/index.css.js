import styled from 'styled-components'
import { screens, fonts, colors } from '../../../constants/theme'

export const InternshipSecondSectionWrapperCss = styled.div`
    display: flex;
    max-width: 1440px;
    margin: auto;
    margin-bottom: 200px;
    align-items: flex-start;

    h4 {
        width: 320px;
        margin-right: 160px;
        margin-top: 0;
        margin-bottom: 130px;
        @media (max-width: ${screens.lg}) {
            width: 100%;
            margin-right: 0px;
        }
    }

    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 50px 25px 25px;
    }

    .gif {
        margin-bottom: 200px;
    }
`
export const SecondSectionContainerCss = styled.div`
    h2 {
        color: ${colors.white};
    }

    @media (max-width: ${screens.lg}) {
        margin: 25px;
    }
`

export const InfoBlockCss = styled.div`
    display: inline;
    width: 960px;
    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-bottom: 100px;
    }

    p {
        span,
        a {
            border-bottom: 2px solid ${colors.blue};
            text-decoration: none;
        }
    }

    h2 {
        line-height: 40px;
    }

    h2.secondParagraph {
        line-height: 35px;
    }
    .text {
        position: relative;
    }

    h1.title {
        margin-top: -10px;
    }

    .info {
        position: absolute;
        top: 70px;
    }

    .firstParagraph {
        display: block;
        margin-top: 0;
        margin-bottom: 30px;
        margin-left: 0;
        margin-right: 0;
    }

    .numbers {
        display: flex;
        justify-content: space-between;
        margin-bottom: 105px;
    }

    .descLinesOfCode {
        color: #9694a7;
        font-style: italic;
        line-height: 10%;
    }

    .descTasks {
        color: #9694a7;
        font-style: italic;
        line-height: 10%;
    }

    .descDevs {
        color: #9694a7;
        font-style: italic;
        line-height: 10%;
    }
    .descDevs2 {
        color: #9694a7;
        font-style: italic;
        line-height: 10%;
    }

    .secondParagraph {
        display: block;
        color: white;
        font-size: 28px;
        margin-top: 0;
        margin-bottom: 0.83em;
        margin-left: 0;
        margin-right: 0;
        line-height: 100%;
    }

    .performanceStyled {
        color: #9694a7;
        font-style: italic;
    }
`
export const ItemsCss = styled.div`
    margin: 140px 0px;
`

export const InfoBlockItemCss = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    img {
        width: 100%;
        max-width: 500px;
        margin-bottom: 50px;
    }

    h1 {
        margin: 0px 0px 5px;
    }
`

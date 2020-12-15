import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    @media (max-width: ${screens.lg}) {
        margin-left: 120px;
    }
`

export const InternshipSection6WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;

    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 50px 25px 25px;
    }
`
export const TitleSectionCss = styled.h1`
    margin-left: 60px;
    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
    }

    .box1 {
        flex: 0.265;
        width: 100%;
        height: 100px;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
        padding-top: 10px;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }

    .box2 {
        flex: 1;
        max-width: 650px;
    }
`
export const CardSectionCss = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    padding: 75px 0;
    max-width: 1440px;
    margin: auto;
    margin-bottom: 130px;
`
export const CardWrapperCss = styled.div`
    margin: 13px;
    width: 15%;
    background: #1f1f25;
    transition: 0.3s;
    word-break: all;
    cursor: pointer;

    .image {
        visibility: hidden;
    }

    .wrapper {
        min-height: 220px;
        max-height: 225px;
        transition: all 1s ease-out;
    }

    :hover .image {
        visibility: visible;
        transition: all 1s ease-out;
    }

    :hover .wrapper {
        background-color: #737589;
    }

    :hover .title {
        color: white;
        transition: all 1s ease-out;
    }

    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-left: -30px;
    }
`
export const ImageWrapperCss = styled.div`
    padding-top: 30px;
    height: 60px;
    img {
        width: 50%;
        height: 100%;
    }
    text-align: center;
`

export const TextWrapperCss = styled.div`
    padding: 30px 30px 0px 30px;
`
export const TitleCss = styled.p`
    margin: 0 0 22px;
    font-style: italic !important;
    font-weight: normal;
    line-height: 30px;
    text-align: center;
    color: gray !important;
`

export const TextCss = styled.p``

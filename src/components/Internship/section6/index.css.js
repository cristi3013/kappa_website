import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-top: 185px;
    margin-left: 120px;
`

export const InternshipSection6WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
    h4 {
        width: 320px;
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
export const TitleSectionCss = styled.h1`
    position: relative;
    margin-top: -60px;
    margin-left: 480px;
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
    margin: 23px;
    width: 15%;
    background: #1f1f25;
    transition: 0.3s;
    word-break: all;

    .image {
        visibility: hidden;
    }

    .wrapper {
        height: 280px;
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
    line-height: 35px;
    text-align: center;
    color: gray !important;
`

export const TextCss = styled.p``

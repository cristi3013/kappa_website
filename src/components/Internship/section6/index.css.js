import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'
import { css } from 'styled-components'

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
    overflow-x: hidden;
    overflow-y: hidden;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 10000;
    padding: 75px 0;
    /* max-width: 1440px; */
    margin: auto;
    padding-bottom: 250px;
`
export const CardWrapperCss = styled.div`
    position: relative;
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

export const TextCss = styled.p`
    position: absolute;
    width: 100%;
    height: 250px;
    left: 5%;
    color: #9694a7 !important;
`

export const ExpandCss = styled.div`
    position: absolute;
    top: 0;
    resize: both;
    margin: 0 auto;

    background: #0e0e0e;
    border: 3px solid #9694a7;
    opacity: 0;

    pointer-events: none;
    transition: all 0.1s linear;
    width: 300px;
    height: 50px;
    left: 0;
    ${(props) =>
        props.isOpen &&
        css`
            opacity: 1;
            pointer-events: all;
            width: 440px;
            height: 460px;
            left: -100px;
            z-index: 1000;
        `}
`

export const PrimaryLinks = styled.style`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: normal;
    font-size: 28px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-decoration: none;
    width: fit-content;
    color: ${colors.white};
    display: inline-block;

    padding: 115px 7px 8px;
    margin: -7px 25px 20px 0px;
    margin-left: 35%;
    margin-top: 25%;

    text-align: center;

    position: relative;
    overflow: hidden;
    transition: all 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &:after {
        position: absolute;
        transition: all 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        content: '';
        width: 100%;
        right: auto;
        left: 0;
        bottom: 0;
        height: 2px;
        background: ${colors.blue};
    }

    &:hover {
        cursor: pointer;
        &:after {
            width: 0%;
            right: 0;
            left: auto;
        }
    }

    a {
        text-decoration: none;
    }

    p {
        margin: 0;
        font-style: italic;
    }
`

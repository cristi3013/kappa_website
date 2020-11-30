import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'
import eye from './images/eye.png'

export const SectionWrapper = styled.div`
    margin-left: 120px;
    margin-bottom: 350px;
`

export const InternshipSection8WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;

    .title {
        padding-left: 26%;
    }
    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 50px 25px 25px;
    }
`

export const CardSectionCss = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 150px;
    margin-left: 25%;
    max-width: 700px;
`
export const CardWrapperCss = styled.div`
    height: 400px;
    margin: 15px;
    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-left: -50px;
    }
`
export const ImageWrapperCss = styled.div`
    height: 320px;
    position: relative;
    background-color: #e5e5e5;
    img {
        width: 100%;
        height: auto;
    }
`

export const ButtonWrapperCss = styled.div`
    position: absolute;
    width: 99px;
    height: 27px;
    left: 32px;
    bottom: 17px;
    background-color: #616a76;
    border: none;
    border-radius: 2px;
    color: white;
    font-style: italic;
    font-size: 18px;
    text-align: left;
    background-image: url(${eye});
    background-position: right;
    background-repeat: no-repeat;
    outline: none;
    cursor: pointer;
    padding-left: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
`
export const TextWrapperCss = styled.div`
    background-color: #1f1f25;
    padding: 30px;
`
export const NameCss = styled.h2`
    margin: 0 0 22px;
    font-style: italic;
    font-weight: normal;
    line-height: 35px;
    color: white;
`
export const LanguagesCss = styled.p`
    word-spacing: 10px;
    margin-bottom: 20px;
    line-height: 26px;
    color: gray !important;
`
export const StatusWrapperCss = styled.div`
    position: relative;
    button {
        position: absolute;
        width: 38px;
        height: 27px;
        left: 0px;
        top: -10px;
        background-color: #616a76;
        border: none;
        border-radius: 2px;
        color: white;
        font-style: italic;
        font-size: 16px;
        text-align: left;
        outline: none;
    }
`

export const PrimaryLinks = styled.style`
    font-style: italic;
    font-weight: normal;

    text-decoration: none;
    width: fit-content;
    color: ${colors.white};
    display: inline-block;

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
`

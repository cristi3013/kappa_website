import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const BackgroundSection = styled.div`
    background: ${colors.dark_grey};
`

export const SectionWrapper = styled.div`
    margin-left: 0px;
    @media (max-width: ${screens.lg}) {
        margin-left: 120px;
    }
`

export const InternshipFourthSectionWrapperCss = styled.div`
    padding: 75px 0;
    max-width: 1440px;
    margin: auto;
    margin-bottom: 130px;
`

export const CardSectionCss = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const CardWrapperCss = styled.div`
    margin: 23px;
    width: 25%;
    background: #0e0e0e;

    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-left: -50px;
    }
`
export const ImageWrapperCss = styled.div`
    height: 300px;
    img {
        width: 100%;
        height: 100%;
    }
`

export const TextWrapperCss = styled.div`
    padding: 30px;
`
export const TitleCss = styled.h2`
    margin: 0 0 22px;
    margin-bottom: 0;
    font-style: italic;
    font-weight: normal;
    line-height: 35px;
    color: white;
`
export const TextCss = styled.div`
    margin-bottom: 0;
    line-height: 26px;
    color: #616a76;
    font-weight: lighter;
    font-size: 18px;
`

export const TextSectionCss = styled.div`
    margin-top: 70px;
    margin-left: 40%;
    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-left: -50px;
    }
`

export const PrimaryLinks = styled.style`
    font-style: italic;
    font-weight: normal;
    font-size: 28px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-decoration: none;
    width: fit-content;
    color: ${colors.white};
    display: inline-block;

    padding: 7px 7px 8px;
    margin: -7px 25px 20px 0px;

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

import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const BackgroundSection = styled.div`
    background: ${colors.dark_grey};
`

export const SectionWrapper = styled.div`
    margin-left: 120px;
`

export const InternshipFourthSectionWrapperCss = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 75px 0;
    max-width: 1440px;
    margin: auto;
    margin-bottom: 130px;
`

export const CardWrapperCss = styled.div`
    margin: 23px;
    width: 25%;
    background: black;
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
    font-style: italic;
    font-weight: normal;
    line-height: 35px;
    color: white;
`
export const TextCss = styled.div`
    margin-bottom: 0;
    line-height: 26px;
    color: gray;
`

export const TextSectionCss = styled.div`
    margin-top: 70px;
    margin-left: 40%;
`

export const PrimaryLinks = styled.style`
    font-style: italic;
    font-weight: normal;
    font-size: 18px;
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
    }
`

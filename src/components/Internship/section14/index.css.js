import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-left: 120px;
`

export const InternshipSection14WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
`
export const InfoBlockCss = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        display: flex;
    }

    .box {
        flex: wrap;
    }

    .box1 {
        flex: 0.8;
        height: 100px;
        width: 100%;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
        font-weight: lighter;
        font-family: IBM Plex Sans;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }
    .box2 {
        flex: 2.5;
        height: 100px;
        width: 100%;
    }

    .box2 .title {
        color: white;
        font-weight: lighter;
        font-family: IBM Plex Sans;
        max-width: 600px;
    }
    .box3 {
        height: 100px;
        width: 100%;
        margin-bottom: 150px;
        padding-left: 24%;
        margin-top: 30px;
    }
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

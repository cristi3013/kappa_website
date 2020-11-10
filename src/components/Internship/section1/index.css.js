import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const InternshipFirstSectionWrapperCss = styled.div`
    display: flex;
    max-width: 1440px;
    margin: auto;
    padding-top: 100px;
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
    h1 {
        margin-top: 0;
    }
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
`
export const PrimaryLinkCss = styled.div`
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
`
export const ItemsCss = styled.div`
    margin: 140px 0px;
`

export const InfoBlockItemCss = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    img {
        width: 100%;
        max-width: 500px;
        margin-bottom: 50px;
    }

    h1 {
        margin: 0px 0px 5px;
    }
    .container {
        position: relative;
        bottom: 100px;
    }
    .mask {
        position: absolute;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
    }
`

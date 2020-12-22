import styled, { css } from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-left: 120px;
    margin-top: 160px;
`

export const InternshipSection13WrapperCss = styled.div`
    display: flex;
    max-width: 1440px;
    margin: auto;
    align-items: flex-start;

    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 25px;
    }

    h4 {
        width: 222px;
        margin-right: 111px;

        @media (max-width: ${screens.lg}) {
            width: 100%;
            margin-right: 0px;
        }
    }
`

export const BlocksCss = styled.div`
    margin-left: 5%;
    line-height: 0px;
    .questionsTitle {
        margin-left: -60px;
        margin-bottom: 50px;
    }

    width: 960px;

    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-right: 0px;
    }
`

export const InfoBlockCss = styled.div`
    @media (max-width: ${screens.lg}) {
    }

    p {
        max-width: 700px;
    }
`

export const InfoBlockHeaderCss = styled.div`
    display: flex;

    @media (max-width: ${screens.lg}) {
    }
`

export const InfoBlockTitleCss = styled.div`
    h3 {
        margin-top: 15px;
        text-decoration: none;
        border-bottom: 2px solid ${colors.grey};
        padding: 0px 7px 7px;
        display: inline-block;
        margin-bottom: 5px;
        cursor: pointer;
        font-size: 24px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: normal;
    }

    p {
        color: ${colors.grey}!important;
        word-spacing: 14px;

        i {
            font-style: normal;
            word-spacing: 5px;
        }

        @media (max-width: ${screens.lg}) {
            margin-bottom: 0px;
        }
    }

    @media (max-width: ${screens.lg}) {
    }
`

export const InfoBlockContentCss = styled.div`
    overflow: hidden;
    height: 0px;

    & a {
        margin-top: 57px;
    }

    & p {
        padding-left: 20px;
    }

    height: ${(props) =>
        props.show ? props.childrenHeight + 50 + 'px' : '0px'};
    transition: all 0.3s;

    margin-bottom: 30px;

    ul {
        padding: 0px;
        list-style-position: inside;

        li {
            list-style: none;
            position: relative;
            padding-left: 20px;
            &:before {
                color: ${colors.grey};
                content: '■';
                position: absolute;
                left: 0px;
                top: 0px;
                font-size: 8px;
            }
        }
    }

    h4 {
        margin: 57px 0px 21px;
    }

    @media (max-width: ${screens.lg}) {
    }
`

export const IconCss = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid ${colors.white};
    cursor: pointer;
    margin-top: 15px;
    margin-right: 24px;
    margin-left: -65px;

    transition: transform 0.3s;
    transform: rotate(180deg);
    position: relative;

    &::before {
        content: '';

        display: block;
        width: 18px;
        height: 0px;
        border-bottom: solid 2px ${colors.white};
        position: absolute;
        bottom: 18px;
        left: 10px;
        transform: rotate(90deg);
        transition: width 0.3s;
    }

    &::after {
        content: '';
        display: block;
        width: 18px;
        height: 0px;
        left: 10px;
        border-bottom: solid 2px ${colors.white};
        position: absolute;
        bottom: 18px;
    }

    ${(props) =>
        props.show &&
        css`
            transform: rotate(0deg);

            &::before {
                content: '';
                display: block;
                width: 0px;
                height: 0px;
                border-bottom: solid 2px ${colors.white};
                position: absolute;
                left: 10px;
                bottom: 18px;
                transform: rotate(90deg);
            }
        `} @media (max-width: ${screens.lg}) {
        min-width: 38px;
        margin-left: 0px;
        margin-right: 20px;
    }
`

import styled, { createGlobalStyle } from 'styled-components'
import { screens, fonts, colors } from '../constants/theme'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital@1&display=swap');
  body {
    font-family: ${fonts.primary};
    background-color:${colors.black};
	margin:10px 0px 0px;
  }
`

export const LayoutsWrapperCss = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    li,
    nav,
    button {
        font-family: ${fonts.primary};
    }

    h1,
    h2,
    h3,
    h5,
    h6,
    p,
    a,
    li,
    nav {
        color: ${colors.white};
    }

    h1 {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
        line-height: 42px;

        @media (max-width: ${screens.lg}) {
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
            line-height: 34px;
        }
    }

    h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 36px;

        @media (max-width: ${screens.lg}) {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 31px;
        }
    }

    h3 {
        font-style: italic;
        font-weight: normal;
        font-size: 28px;
        line-height: 36px;
        @media (max-width: ${screens.lg}) {
            font-style: italic;
            font-weight: normal;
            font-size: 24px;
            line-height: 31px;
        }
    }

    h4 {
        white-space: nowrap;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: ${colors.white};

        &.grey {
            color: ${colors.grey};
        }

        span.symbol {
            color: ${colors.blue};
        }

        @media (max-width: ${screens.lg}) {
            font-style: italic;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
        }
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;

        @media (max-width: ${screens.lg}) {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 27px;
        }
    }

    li {
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.03em;
        @media (max-width: ${screens.lg}) {
            font-weight: normal;
            font-size: 16px;
        }
    }

    nav {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;

        ul {
            display: flex;
            li {
                margin: 0px 21px;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 23px;
            }
        }
        @media (max-width: ${screens.lg}) {
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
        }
    }

    .numbers {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 23px;
        @media (max-width: ${screens.lg}) {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 23px;
        }
    }
`

export const PrimaryLinkCss = styled(Link)`
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
`

export const SecondaryLinkCss = styled(PrimaryLinkCss)`
    &:after {
        background: ${colors.grey};
    }
`

export const PrimaryLinkBgCss = styled(PrimaryLinkCss)`
    &:after {
        width: 100%;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        height: 0px;
        background: ${colors.blue};
        z-index: -1;
    }

    &:before {
        content: '';
        width: 100%;
        right: 0;
        left: 0;
        bottom: 0;
        top: auto;
        height: 2px;
        background: ${colors.blue};
        position: absolute;

        transition: all 0.3s 0.5s linear;
    }

    &:hover {
        cursor: pointer;
        color: ${colors.black};
        &:after {
            width: 100%;
            height: 100%;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
        }

        &:before {
            height: 0px;
            opacity: 0.5;
            transition: all 0.1s 0.3s linear;
        }
    }
`

export const SecondaryLinkBgCss = styled(PrimaryLinkBgCss)`
    &:before,
    &:after {
        background: ${colors.grey};
    }
`

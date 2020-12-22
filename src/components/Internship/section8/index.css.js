import styled, { keyframes } from 'styled-components/macro'
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
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;
    grid-row-gap: 130px;

    margin-left: 25%;
    max-width: 700px;
`
export const CardWrapperCss = styled.div`
    height: 400px;
    margin: 25px;
    @media (max-width: ${screens.lg}) {
        width: 100%;
        margin-left: -50px;
    }
`
const imgAnimation = keyframes`
0%{
    opacity:1;
}
100%{
    opacity:0;
}`
export const ImageWrapperCss = styled.div`
    height: 312px;
    position: relative;
    background-color: #e5e5e5;

    max-width: 321px;
    max-height: 321px;

    .photo img {
        width: 100%;
    }
    img:hover {
        animation: ${imgAnimation} 0.1s forwards;
    }
`

export const GifWrapperCss = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    .gif img {
        width: 100%;
        min-height: 321px;
    }
`

const modalVideo = keyframes`
    from {
        opacity: 0;
        transform: translate(0, 100px);
    }

    to {
        opacity: 1;
        transform: translate(0, 0);
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

    animation: ${modalVideo} 0.3s ease-out rgba(0, 0, 0, 0.5);

    .modal-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $backdrop-color;
        z-index: 1000000;
        cursor: pointer;
        opacity: 1;
        animation-timing-function: $animation-function;
        animation-duration: $animation-speed;
        animation-name: modal-video;
        -webkit-transition: opacity $animation-speed $animation-function;
        -moz-transition: opacity $animation-speed $animation-function;
        -ms-transition: opacity $animation-speed $animation-function;
        -o-transition: opacity $animation-speed $animation-function;
        transition: opacity $animation-speed $animation-function;
    }

    .modal-video-effect-exit {
        opacity: 0;

        & .modal-video-movie-wrap {
            -webkit-transform: translate(0, 100px);
            -moz-transform: translate(0, 100px);
            -ms-transform: translate(0, 100px);
            -o-transform: translate(0, 100px);
            transform: translate(0, 100px);
        }
    }

    .modal-video-body {
        max-width: 940px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: table;
    }

    .modal-video-inner {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }

    .modal-video-movie-wrap {
        width: 100%;
        height: 0;
        position: relative;
        padding-bottom: 56.25%;
        background-color: #333;
        animation-timing-function: $animation-function;
        animation-duration: $animation-speed;
        animation-name: modal-video-inner;
        -webkit-transform: translate(0, 0);
        -moz-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        -o-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition: -webkit-transform $animation-speed
            $animation-function;
        -moz-transition: -moz-transform $animation-speed $animation-function;
        -ms-transition: -ms-transform $animation-speed $animation-function;
        -o-transition: -o-transform $animation-speed $animation-function;
        transition: transform $animation-speed $animation-function;

        & iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .modal-video-close-btn {
        position: absolute;
        z-index: 2;
        top: -35px;
        right: -35px;
        display: inline-block;
        width: 35px;
        height: 35px;
        overflow: hidden;
        border: none;
        background: transparent;

        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }

        &:before,
        &:after {
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            top: 50%;
            left: 0;
            margin-top: -1px;
            background: #fff;
            border-radius: 5px;
            margin-top: -6px;
        }
    }
`
export const TextWrapperCss = styled.div`
    position: relative;
    background-color: #1f1f25;
    padding: 30px;
    min-width: 260px;
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
    margin-bottom: 40px;
    button {
        position: absolute;
        width: 38px;
        height: 27px;
        left: 0px;
        top: -5px;
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

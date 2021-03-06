import styled, { keyframes } from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-top: 270px;
    margin-bottom: 250px;
    margin-left: 120px;
`

export const InternshipSection12WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
`
export const InfoBlockCss = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .firstContainer {
        margin-top: 50px;
    }

    .box1 {
        flex: 1;
        margin-left: 13%;
    }

    .box1 .title {
        color: white;
        margin-bottom: 35px;

        max-width: 600px;
    }

    .box1 .firstParagraph {
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
        max-width: 550px;
    }

    .secondContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .box2 {
        flex: 1;
        margin-left: 13%;
    }

    .box2 h4 {
        color: white;
        font-style: italic;
    }

    .box2 ul li {
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
        max-width: 550px;
    }

    .box ul {
        margin-top: 37px;
        margin-left: 20px;
    }

    .symbol {
        font-style: italic;
        color: #7481f4;
        width: 100%;
        height: auto;
    }

    .box3 {
        flex: 1;
    }

    .box3 .gifWrapper {
        position: relative;
    }

    .box3 .gifWrapper img {
        width: 100%;
        height: auto;
    }

    .box3 .aGif {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.6);
    }

    .box3 .aMask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(0.621);
    }

    .box3 .upSphere {
        position: absolute;
        width: 100%;
        transform: scale(0.13);
        margin-top: -50%;
        right: 28%;
    }

    .box3 .soap {
        position: absolute;
        width: 100%;
        transform: scale(0.3);
        margin-left: 28%;
        margin-top: 45%;
    }
`

const downAnimation = keyframes`
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(150px);
    }

`

export const DownAnimation = styled.div`
    animation: ${downAnimation} 2.5s forwards;
`

const upAnimation = keyframes`
from{
    transform: translateY(0px);
}

to{
    transform:translateY(-100px);
}`

export const UpAnimation = styled.div`
    animation: ${upAnimation} 2.5s forwards;
`

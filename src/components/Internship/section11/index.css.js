import styled, { keyframes } from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-top: 180px;
    margin-left: 120px;
`

export const InternshipSection11WrapperCss = styled.div`
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
        justify-content: space-between;
        margin-top: 100px;
    }

    .box {
        flex: wrap;
    }

    .box1 {
        flex: 1;
    }

    .box1 .gifWrapper {
        position: relative;
        transform: scale(0.5);
    }

    .box1 .gifWrapper img {
        width: 100%;
        height: auto;
    }

    .box1 .pGif {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
    }

    .box1 .pMask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        transform: scale(1.01);
    }

    .box1 .planets {
        position: absolute;
        width: 100%;
        transform: scale(0.3);
        margin-top: 45%;
        right: 51%;
    }

    .box1 .stars {
        position: absolute;
        width: 100%;
        transform: scale(0.2);
        margin-top: -100%;
        left: 40%;
    }

    .box2 {
        flex: 1;
    }

    .box2 .title {
        color: white;
        margin-bottom: 35px;

        max-width: 600px;
    }

    .box2 .firstParagraph {
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
        max-width: 550px;
    }

    .box2 .secondParagraph {
        color: #9694a7;
        font-size: 18px;
        line-height: 32px;
        max-width: 550px;
        margin-top: 30px;
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

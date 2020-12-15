import styled, { keyframes } from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-left: 120px;
    margin-bottom: 500px;
`

export const InternshipSection5WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;

    @media (max-width: ${screens.lg}) {
        flex-direction: column;
        padding: 50px 25px 25px;
    }
`

export const InfoBlockCss = styled.div`
    /* global styles */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
    }

    .box1 {
        flex: 0.239;
        width: 100%;
        height: 100px;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }

    .box2 {
        flex: 1;
        max-width: 650px;
    }

    .box2 .firstParagraph {
        color: #9694a7;
        line-height: 32px;
        font-weight: lighter;
    }

    .box2 .styledParagraph1 {
        font-style: italic;
        color: white;
    }

    .container2 {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .box3 {
        height: auto;
        width: 100%;
    }

    .box3 .img {
        height: 100%;
        width: 100%;
    }

    .box3 .gifContainer {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 10%;
        margin-left: 13.8%;
        transform: scale(0.57);
    }

    .box3 .gifPortal {
        position: absolute;
        top: 0px;
        width: 100%;
        height: auto;
        margin-top: -35%;
        margin-left: -39%;
        transform: scale(0.35);
    }

    .box3 .portalMask {
        position: absolute;
        width: 100%;
        height: auto;
        margin-top: -35%;
        margin-left: -39%;
        transform: scale(0.36);
    }

    .box3 .mugHand {
        position: absolute;
        margin-left: -60%;
        margin-top: 2%;
        width: 100%;
        height: auto;
        transform: scale(0.29);
    }
    .box3 .mug {
        position: absolute;
        margin-left: -50%;
        margin-top: -21%;
        width: 100%;
        height: auto;
        transform: scale(0.12);
    }

    .box3 .keyboard {
        position: absolute;
        margin-left: -23%;
        margin-top: -39%;
        width: 100%;
        height: auto;
        transform: scale(0.22);
    }

    .box3 .keyboardHand {
        position: absolute;
        margin-left: -15%;
        margin-top: -60%;
        width: 100%;
        height: auto;
        transform: scale(0.3);
    }

    .box3 .document {
        position: absolute;
        margin-left: -57%;
        margin-top: -49%;
        width: 100%;
        height: auto;
        transform: scale(0.12);
    }

    .box3 .documentHand {
        position: absolute;
        margin-left: -67%;
        margin-top: -38%;
        width: 100%;
        height: auto;
        transform: scale(0.27);
    }

    .box3 .yerz {
        position: absolute;
        margin-left: -65%;
        margin-top: -8%;
        width: 100%;
        height: auto;
        transform: scale(0.1);
    }

    .box3 .ralu {
        position: absolute;
        margin-left: -10%;
        margin-top: -15%;
        width: 100%;
        height: auto;
        transform: scale(0.1);
    }
`

const mugHandAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(30px, -30px)
}`
export const MugHandAnimationCss = styled.div`
    animation: ${mugHandAnimation} 1.5s forwards;
`

const mugAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(120px, -130px)
}`
export const MugAnimationCss = styled.div`
    animation: ${mugAnimation} 2.5s forwards;
`

const keyboardHandAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(-30px, 30px)
}`
export const KeyboardHandAnimationCss = styled.div`
    animation: ${keyboardHandAnimation} 1.5s forwards;
`

const keyboardAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(-130px, 80px)
}`
export const KeyboardAnimationCss = styled.div`
    animation: ${keyboardAnimation} 2.5s forwards;
`

const documentHandAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(40px, 50px )
}`

export const DocumentHandAnimationCss = styled.div`
    animation: ${documentHandAnimation} 2s forwards;
`

const documentAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(130px, 70px )
}`
export const DocumentAnimationCss = styled.div`
    animation: ${documentAnimation} 2.5s forwards;
`

const yerzAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(130px, -50px )
}`
export const YerzAnimationCss = styled.div`
    animation: ${yerzAnimation} 2.5s forwards;
`

const raluAnimation = keyframes`
from{
    transform: translate(0px, 0px)
}
to{
    transform: translate(-140px, 20px )
}`

export const RaluAnimationCss = styled.div`
    animation: ${raluAnimation} 2.5s forwards;
`

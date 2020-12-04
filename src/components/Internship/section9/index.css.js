import styled, { keyframes } from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const SectionWrapper = styled.div`
    margin-left: 120px;
`
export const InternshipSection9WrapperCss = styled.div`
    max-width: 1440px;
    margin: auto;
    margin-bottom: 200px;
`
export const InfoBlockCss = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: auto;
        margin-top: 100px;
    }

    /* HEADER CONTAINER */

    /* BOX 1 */

    .box1 {
        flex: 0.7;
        margin-top: 10px;
    }

    .box1 h4 {
        color: white;
        font-style: italic;
        width: 100%;
    }

    .box1 .symbol {
        font-style: italic;
        color: #7481f4;
    }

    /* BOX 2 */

    .box2 {
        flex: 2;
    }

    .box2 .title {
        color: white;
    }

    .box3 {
        margin-top: 40px;
        max-width: 700px;
        margin-left: 26%;
    }

    .box3 .firstParagraph {
        color: #9694a7;
        line-height: 32px;
    }
    .box4 {
        position: relative;
        max-width: 700px;
        margin-left: 31%;
        margin-top: 100px;
        height: 400px;
    }

    .box4 .gifContainer {
        position: relative;
        flex-wrap: wrap;
    }

    .box4 .gifContainer img {
        position: absolute;
        width: 100%;
        height: auto;
    }

    .box4 .covidGif {
        position: absolute;
        width: 100%;
        height: auto;
    }

    .box4 .toolbar {
        position: absolute;
        transform: translateY(-40px) translateX(-5px);
        width: 100%;
        height: auto;
    }

    .box4 .avatar {
        position: absolute;

        transform: scale(0.3) rotate(5deg) translateY(120px) translateX(770px);
        width: 100%;
    }

    .box4 .web {
        position: absolute;
        transform: scale(0.06) translateY(2800px) translateX(-4000px);
        width: 100%;
        height: auto;
    }

    .box4 .mic {
        position: absolute;
        transform: scale(0.09) translateY(-330px) translateX(-4000px)
            rotate(0deg);
        width: 100%;
    }

    .box4 {
        transform: scale(0.9);
        margin-left: 23.6%;
    }

    .box5 {
        max-width: 700px;
        margin-left: 26%;
        margin-top: 60px;
    }

    .box5 .secondParagraph {
        color: #9694a7;
        line-height: 32px;
    }
`
const toolbarAnimation = keyframes`
0%{
    transform: rotate(0deg);
}
100%{
    transform:rotate(2.15deg);
}`
export const ToolbarAnimationCss = styled.div`
    animation: ${toolbarAnimation} 1s forwards;
`

const avatarAnimation = keyframes`
0%{
    transform: rotate(0deg)
}
100%{
    transform: rotate(-5deg)
}`
export const AvatarAnimationCss = styled.div`
    animation: ${avatarAnimation} 1s forwards;
`

const micAnimation = keyframes`
0%{
    transform: translateX(0px);
}
100%{
    transform: translateX(60px) translateY(25px);
}`
export const MicAnimationCss = styled.div`
    animation: ${micAnimation} 2s forwards;
`

const webAnimation = keyframes`
0%{
    transform: translateY(0px);
}
100%{
    transform: translateY(-50px);
}`
export const WebAnimationCss = styled.div`
    animation: ${webAnimation} 2s forwards;
`

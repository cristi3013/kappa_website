import styled from 'styled-components/macro'
import { screens, fonts, colors } from '../../../constants/theme'

export const InternshipSection6WrapperCss = styled.div`
    display: flex;
    max-width: 1440px;
    margin: auto;
    align-items: flex-start;

    h4 {
        width: 320px;
        margin-top: 10px;
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

    h1 {
        margin: 0;
    }
`

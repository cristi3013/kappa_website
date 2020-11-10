import { ImageSearchSharp } from '@material-ui/icons'
import React from 'react'
import {
    CardWrapperCss,
    ImageWrapperCss,
    TitleCss,
    TextCss,
    TextWrapperCss,
    PrimaryLinks,
} from './index.css'

const Card = ({ cardInfo }) => {
    const { image, title, text } = cardInfo
    return (
        <CardWrapperCss>
            {image && (
                <ImageWrapperCss>
                    <img src={image} alt=""></img>
                </ImageWrapperCss>
            )}
            <TextWrapperCss>
                <TitleCss>
                    <PrimaryLinks>{title}</PrimaryLinks>
                </TitleCss>
                <TextCss>{text}</TextCss>
            </TextWrapperCss>
        </CardWrapperCss>
    )
}

export default Card

import React from 'react'

import {
    CardWrapperCss,
    ImageWrapperCss,
    TextWrapperCss,
    TitleCss,
    TextCss,
} from './index.css'

const Card = ({ cardInfo }) => {
    const { image, title, text } = cardInfo

    return (
        <CardWrapperCss>
            <div className="wrapper">
                {image && (
                    <ImageWrapperCss>
                        <img src={image} className="image" alt=""></img>
                    </ImageWrapperCss>
                )}
                <div className="textWrapper">
                    <TextWrapperCss>
                        <TitleCss>
                            <div className="title">{title}</div>
                        </TitleCss>
                        <TextCss>
                            <div className="text">{text}</div>
                        </TextCss>
                    </TextWrapperCss>
                </div>
            </div>
        </CardWrapperCss>
    )
}

export default Card

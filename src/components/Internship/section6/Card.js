import React from 'react'

import {
    CardWrapperCss,
    ImageWrapperCss,
    TextWrapperCss,
    TitleCss,
} from './index.css'

const Card = ({ cardInfo }) => {
    const { image, title } = cardInfo

    return (
        <CardWrapperCss>
            <div className="wrapper">
                {image && (
                    <ImageWrapperCss>
                        <img src={image} className="image" alt=""></img>
                    </ImageWrapperCss>
                )}
                <TextWrapperCss>
                    <TitleCss>
                        <div className="title">{title}</div>
                    </TitleCss>
                </TextWrapperCss>
            </div>
        </CardWrapperCss>
    )
}

export default Card

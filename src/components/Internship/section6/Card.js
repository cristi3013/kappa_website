import React, { useState } from 'react'

import {
    CardWrapperCss,
    ImageWrapperCss,
    TextWrapperCss,
    TitleCss,
    TextCss,
    ExpandCss,
} from './index.css'

const Card = ({ cardInfo }) => {
    const { image, title, text1, text2, text3, button } = cardInfo
    const [isOpen, setIsOpen] = useState(false)

    return (
        <CardWrapperCss>
            <div className="wrapper">
                <div
                    className="box main"
                    onClick={() => setIsOpen((el) => !el)}
                >
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
                        </TextWrapperCss>
                    </div>
                    <ExpandCss className="absolute" isOpen={isOpen}>
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
                            </TextWrapperCss>
                        </div>
                        <TextCss>
                            <div className="text">{text1}</div>
                            <div className="text">{text2}</div>
                            <div className="text">{text3}</div>
                        </TextCss>
                    </ExpandCss>
                </div>
            </div>
        </CardWrapperCss>
    )
}

export default Card

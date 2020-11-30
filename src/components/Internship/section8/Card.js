import React from 'react'
import {
    CardWrapperCss,
    ImageWrapperCss,
    ButtonWrapperCss,
    TextWrapperCss,
    NameCss,
    LanguagesCss,
    StatusWrapperCss,
    PrimaryLinks,
} from './index.css'
const Card = ({ cardInfo }) => {
    const { image, button, name, languages, status } = cardInfo

    return (
        <CardWrapperCss>
            {image && (
                <ImageWrapperCss>
                    <img src={image} className="photo" alt=""></img>
                    {button && (
                        <ButtonWrapperCss>
                            <span>{button}</span>
                        </ButtonWrapperCss>
                    )}
                </ImageWrapperCss>
            )}
            <TextWrapperCss>
                <NameCss>
                    <PrimaryLinks>{name}</PrimaryLinks>
                </NameCss>
                <LanguagesCss>{languages}</LanguagesCss>
                {status && (
                    <StatusWrapperCss>
                        <button>{status}</button>
                    </StatusWrapperCss>
                )}
            </TextWrapperCss>
        </CardWrapperCss>
    )
}

export default Card

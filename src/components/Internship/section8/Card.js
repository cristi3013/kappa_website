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
    GifWrapperCss,
} from './index.css'
const Card = ({ cardInfo }) => {
    const { image, gif, button, name, languages, status } = cardInfo

    return (
        <CardWrapperCss>
            {image && (
                <ImageWrapperCss>
                    <div className="avatarImage">
                        <img src={image} className="photo" alt=""></img>
                    </div>
                    {gif && (
                        <GifWrapperCss>
                            <img src={gif} className="gif" alt=""></img>
                        </GifWrapperCss>
                    )}
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

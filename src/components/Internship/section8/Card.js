import React, { useState } from 'react'
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

// @import 'node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'

const Card = ({ cardInfo }) => {
    const { image, gif, button, name, languages, status } = cardInfo
    const [isOpen, setOpen] = useState(false)
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
                            <ModalVideo
                                channel="custom"
                                autoplay
                                isOpen={isOpen}
                                videoId="./images/Albert_Luta.mp4"
                                onClose={() => setOpen(false)}
                            />
                            <span
                                className="btn-primary"
                                onClick={() => setOpen(true)}
                            >
                                {button}
                            </span>
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

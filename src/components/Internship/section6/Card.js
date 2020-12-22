import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import {
    CardWrapperCss,
    ImageWrapperCss,
    TextWrapperCss,
    TitleCss,
    TextCss,
    ExpandCss,
    PrimaryLinks,
} from './index.css'

function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
    )
    const ref = useRef(null)

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsComponentVisible(false)
        }
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true)
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true)
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return { ref, isComponentVisible, setIsComponentVisible }
}

const Card = ({ cardInfo }) => {
    const { image, title, text1, text2, text3, button } = cardInfo
    const [isOpen, setIsOpen] = useState(false)
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible,
    } = useComponentVisible(true)

    return (
        <CardWrapperCss>
            <div
                className="wrapper"
                ref={ref}
                onClick={() => setIsComponentVisible(true)}
            >
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
                    {isComponentVisible && (
                        <ExpandCss className="absolute" isOpen={isOpen}>
                            {image && (
                                <ImageWrapperCss>
                                    <img
                                        src={image}
                                        className="image"
                                        alt=""
                                    ></img>
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
                            <PrimaryLinks>
                                <p>Learn now</p>
                            </PrimaryLinks>
                        </ExpandCss>
                    )}
                </div>
            </div>
        </CardWrapperCss>
    )
}

export default Card

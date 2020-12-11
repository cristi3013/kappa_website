import React from 'react'
import {
    InternshipSection5WrapperCss,
    InfoBlockCss,
    SectionWrapper,
    MugHandAnimationCss,
    MugAnimationCss,
    KeyboardHandAnimationCss,
    KeyboardAnimationCss,
    DocumentHandAnimationCss,
    DocumentAnimationCss,
} from './index.css'

import portal from './images/portal.gif'
import portalMask from './images/portalMask.png'
import documentHand from './images/documentHand.png'
import document from './images/document.png'
import keyboardHand from './images/keyboardHand.png'
import keyboard from './images/keyboard.png'
import mugHand from './images/mugHand.png'
import mug from './images/mug.png'

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null)
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, options)

        if (ref) {
            observer.observe(ref)
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, options])

    return [setRef, visible]
}

const InternshipSection5 = () => {
    const [setRef, visible] = useOnScreen({ threshold: 0.4 })

    return (
        <SectionWrapper>
            <InternshipSection5WrapperCss>
                <InfoBlockCss>
                    <div className="container">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> Besides
                                <span className="symbol"> &lt;</span>
                            </h4>
                        </div>

                        <div className="boxTitle box">
                            <h1 className="title">More than just coding</h1>
                        </div>
                    </div>
                    <div className="container2">
                        <div className="box2 box">
                            <p className="firstParagraph">
                                Besides coding, you’ll gain knowledge from
                                adjacent areas (i.e.
                                <span className="styledParagraph1">
                                    {' '}
                                    design, marketing, agency and start-up life
                                    )
                                </span>{' '}
                                that will enable you to become a complete
                                professional developer. Our curriculum
                                activities will also help you better understand
                                digital products through interaction on
                                specialty makers platforms. You will establish
                                an online identity for an in-house project that
                                will have your name on it.
                            </p>
                        </div>
                        <div className="box3 box">
                            <div className="gifContainer">
                                <img
                                    src={portal}
                                    className="gifPortal"
                                    alt=""
                                />
                                <img
                                    src={portalMask}
                                    className="portalMask"
                                    alt=""
                                />

                                {visible ? (
                                    <MugHandAnimationCss>
                                        <img
                                            src={mugHand}
                                            className="mugHand"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </MugHandAnimationCss>
                                ) : (
                                    <img
                                        src={mugHand}
                                        className="mugHand"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}

                                {visible ? (
                                    <MugAnimationCss>
                                        <img
                                            src={mug}
                                            className="mug"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </MugAnimationCss>
                                ) : (
                                    <img
                                        src={mug}
                                        className="mug"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}

                                {visible ? (
                                    <KeyboardHandAnimationCss>
                                        <img
                                            src={keyboardHand}
                                            className="keyboardHand"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </KeyboardHandAnimationCss>
                                ) : (
                                    <img
                                        src={keyboardHand}
                                        className="keyboardHand"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}
                                {visible ? (
                                    <KeyboardAnimationCss>
                                        <img
                                            src={keyboard}
                                            className="keyboard"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </KeyboardAnimationCss>
                                ) : (
                                    <img
                                        src={keyboard}
                                        className="keyboard"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}

                                {visible ? (
                                    <DocumentAnimationCss>
                                        <img
                                            src={document}
                                            className="document"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </DocumentAnimationCss>
                                ) : (
                                    <img
                                        src={document}
                                        className="document"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}

                                {visible ? (
                                    <DocumentHandAnimationCss>
                                        <img
                                            src={documentHand}
                                            className="documentHand"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </DocumentHandAnimationCss>
                                ) : (
                                    <img
                                        src={documentHand}
                                        className="documentHand"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </InfoBlockCss>
            </InternshipSection5WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection5

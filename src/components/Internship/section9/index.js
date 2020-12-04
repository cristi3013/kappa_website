import React from 'react'

import {
    InternshipSection9WrapperCss,
    InfoBlockCss,
    SectionWrapper,
    ToolbarAnimationCss,
    AvatarAnimationCss,
    MicAnimationCss,
    WebAnimationCss,
} from './index.css'

import covidGif from './images/covid.gif'
import avatar from './images/avatar.png'
import mic from './images/mic.png'
import web from './images/web.png'
import toolbar from './images/toolbar.png'

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

const InternshipSection9 = () => {
    const [setRef, visible] = useOnScreen({ threshold: 1 })

    return (
        <SectionWrapper>
            <InternshipSection9WrapperCss>
                <InfoBlockCss>
                    <div className="header">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> COVID-proof
                                <span className="symbol"> &lt;</span>
                            </h4>
                        </div>

                        <div className="box2 box">
                            <h1 className="title">Remote from day 0</h1>
                        </div>
                    </div>

                    <div className="textContainer">
                        <div className="box3 box">
                            <p className="firstParagraph">
                                Our team has been working remotely for more than
                                six years. During these tough times, it feels
                                like the world is catching up with us. Pilots
                                are flying paper planes in their backyard and
                                firefighters are putting out candles over
                                dinner.
                            </p>
                        </div>

                        <div className="box4 box">
                            <img src={covidGif} className="covidGif" alt="" />

                            {visible ? (
                                <ToolbarAnimationCss>
                                    <img
                                        src={toolbar}
                                        className="toolbar"
                                        alt=""
                                        ref={setRef}
                                    />
                                </ToolbarAnimationCss>
                            ) : (
                                <img
                                    src={toolbar}
                                    className="toolbar"
                                    alt=""
                                    ref={setRef}
                                />
                            )}

                            {visible ? (
                                <AvatarAnimationCss>
                                    <img
                                        src={avatar}
                                        className="avatar"
                                        alt=""
                                        ref={setRef}
                                    />
                                </AvatarAnimationCss>
                            ) : (
                                <img
                                    src={avatar}
                                    className="avatar"
                                    alt=""
                                    ref={setRef}
                                />
                            )}

                            {visible ? (
                                <MicAnimationCss>
                                    <img
                                        src={mic}
                                        className="mic"
                                        alt=""
                                        ref={setRef}
                                    />
                                </MicAnimationCss>
                            ) : (
                                <img
                                    src={mic}
                                    className="mic"
                                    alt=""
                                    ref={setRef}
                                />
                            )}

                            {visible ? (
                                <WebAnimationCss>
                                    <img
                                        src={web}
                                        className="web"
                                        alt=""
                                        ref={setRef}
                                    />
                                </WebAnimationCss>
                            ) : (
                                <img
                                    src={web}
                                    className="web"
                                    alt=""
                                    ref={setRef}
                                />
                            )}
                        </div>
                        <div className="box5 box">
                            <p className="secondParagraph">
                                Kappa London is a fully COVID compliant company
                                because… well… we’re all pretty far apart from
                                each other.
                            </p>
                        </div>
                    </div>
                </InfoBlockCss>
            </InternshipSection9WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection9

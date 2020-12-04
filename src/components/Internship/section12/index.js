import React from 'react'

import {
    InternshipSection12WrapperCss,
    InfoBlockCss,
    SectionWrapper,
    DownAnimation,
    UpAnimation,
} from './index.css'

import aMask from './images/amask1.png'
import aGif from './images/a2.gif'
import upSphere from './images/upSphere.png'
import soap from './images/soap.png'

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

const InternshipSection12 = () => {
    const [setRef, visible] = useOnScreen({ threshold: 0.2 })

    return (
        <SectionWrapper>
            <InternshipSection12WrapperCss>
                <InfoBlockCss>
                    <div className="firstContainer">
                        <div className="box1 box">
                            <h2 className="title">But wait, there's more...</h2>
                            <p className="firstParagraph">
                                We’ll forge you into desirable and indispensable
                                professionals. Let us show you around our secret
                                stash of HR tips and tricks.
                            </p>
                        </div>
                    </div>

                    <div className="secondContainer">
                        <div className="box2 box">
                            <h4>
                                <span className="symbol">|</span> You may walk
                                away with:
                                <span className="symbol"> &lt;</span>
                            </h4>
                            <ul>
                                <li>Where to look for jobs;</li>
                                <li>
                                    How to build your professional online
                                    profile;
                                </li>
                                <li>Resume tips;</li>
                                <li>
                                    What employers look for in an ideal
                                    candidate;
                                </li>
                                <li>
                                    How to mention the right skills in the right
                                    manner;
                                </li>
                                <li>
                                    Structure your work into an online presence
                                    (we’re not talking about LinkedIn);
                                </li>
                                <li>Freelancing versus full-time job;</li>
                            </ul>
                        </div>
                        <div className="box3 box">
                            <div className="gifWrapper">
                                <img src={aGif} className="aGif" alt="" />
                                <img src={aMask} className="aMask" alt="" />

                                {visible ? (
                                    <DownAnimation>
                                        <img
                                            src={upSphere}
                                            className="upSphere"
                                            alt=""
                                            ref={setRef}
                                        />
                                    </DownAnimation>
                                ) : (
                                    <img
                                        src={upSphere}
                                        className="upSphere"
                                        alt=""
                                        ref={setRef}
                                    />
                                )}

                                {visible ? (
                                    <UpAnimation>
                                        <img
                                            src={soap}
                                            className="soap"
                                            alt=""
                                            ref={setRef}
                                            style={{}}
                                        />
                                    </UpAnimation>
                                ) : (
                                    <img
                                        src={soap}
                                        className="soap"
                                        alt=""
                                        ref={setRef}
                                        style={{}}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </InfoBlockCss>
            </InternshipSection12WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection12

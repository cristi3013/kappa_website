import React from 'react'
import {
    InternshipSection5WrapperCss,
    InfoBlockCss,
    SectionWrapper,
} from './index.css'

import portal from './images/portal.gif'
import portalMask from './images/portalMask.png'
import documentHand from './images/documentHand.png'
import document from './images/document.png'
import keyboardHand from './images/keyboardHand.png'
import keyboard from './images/keyboard.png'
import mugHand from './images/mugHand.png'
import mug from './images/mug.png'

const InternshipSection5 = () => {
    return (
        <SectionWrapper>
            <InternshipSection5WrapperCss>
                <InfoBlockCss>
                    <div className="container">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> Besides
                                <span className="symbol">&lt;</span>
                            </h4>
                        </div>

                        <div className="box2 box">
                            <p className="firstParagraph">
                                Besides coding, you’ll gain knowledge from
                                adjacent areas (i.e. design, marketing, agency
                                and start-up life) that will enable you to
                                become a complete professional developer. Our
                                curriculum activities will also help you better
                                understand digital products through interaction
                                on specialty makers platforms. You will
                                establish an online identity for an in-house
                                project that will have your name on it.
                            </p>
                        </div>
                    </div>

                    <div className="box3 box">
                        <div className="gifContainer">
                            <img src={portal} className="gifPortal" alt="" />
                            <img
                                src={portalMask}
                                className="portalMask"
                                alt=""
                            />
                            <img src={mug} className="mug" alt="" />
                            <img src={mugHand} className="mugHand" alt="" />
                            <img src={keyboard} className="keyboard" alt="" />
                            <img
                                src={keyboardHand}
                                className="keyboardHand"
                                alt=""
                            />
                            <img src={document} className="document" alt="" />
                            <img
                                src={documentHand}
                                className="documentHand"
                                alt=""
                            />
                        </div>
                    </div>
                </InfoBlockCss>
            </InternshipSection5WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection5

import React from 'react'
import { InternshipSection5WrapperCss, InfoBlockCss } from './index.css'

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
        <InternshipSection5WrapperCss>
            <h4>
                <span className="symbol">|</span> Besides{' '}
                <span className="symbol">&lt;</span>
            </h4>
            <InfoBlockCss>
                <div className="textSection">
                    <p className="firstParagraph">
                        Besides coding, you’ll gain knowledge from adjacent
                        areas (i.e.{' '}
                        <span className="styledParagraph">
                            design, marketing, agency and start-up life
                        </span>
                        ) that will enable you to become a complete professional
                        developer. Our curriculum activities will also help you
                        better understand digital products through interaction
                        on specialty makers platforms. You will establish an
                        online identity for an in-house project that will have
                        your name on it.
                    </p>
                </div>
                <div className="gifSection">
                    <img
                        src={portal}
                        className="portalGif"
                        alt="portalGif"
                    ></img>
                    <img
                        src={portalMask}
                        className="portalMask"
                        alt="portalMask"
                    ></img>
                    <img
                        src={documentHand}
                        className="documentHand"
                        alt="documentHand"
                    ></img>
                    <img
                        src={document}
                        className="document"
                        alt="document"
                    ></img>
                    <img src={mugHand} className="mugHand" alt="mugHand"></img>
                    <img src={mug} className="mug" alt="mug"></img>

                    <img
                        src={keyboardHand}
                        className="keyboardHand"
                        alt="keyboardHand"
                    ></img>
                    <img
                        src={keyboard}
                        className="keyboard"
                        alt="keyboard"
                    ></img>
                </div>
            </InfoBlockCss>
        </InternshipSection5WrapperCss>
    )
}

export default InternshipSection5

import React from 'react'

import {
    InternshipSection11WrapperCss,
    InfoBlockCss,
    SectionWrapper,
} from './index.css'

import pGif from './images/p2.gif'
import planets from './images/planets.png'
import stars from './images/stars.png'
import pMask from './images/pMask.png'

const InternshipSection11 = () => {
    return (
        <SectionWrapper>
            <InternshipSection11WrapperCss>
                <InfoBlockCss>
                    {' '}
                    <div className="container">
                        <div className="box1 box">
                            <div className="gifWrapper">
                                <img src={pGif} className="pGif" alt="" />
                                <img src={pMask} className="pMask" alt="" />
                                <img src={planets} className="planets" alt="" />
                                <img src={stars} className="stars" alt="" />
                            </div>
                        </div>
                        <div className="box2 box">
                            <h2 className="title">You had us when...</h2>
                            <p className="firstParagraph">
                                ... you changed your Tinder bio to “BSc/MSc
                                Computer Science, JS training, and some 10k
                                lines of code”.
                            </p>

                            <p className="secondParagraph">
                                If we’re a match made in heaven, who are we to
                                question the universe? The best interns stick
                                around: you have the possibility to continue
                                working with us after your internship ends.
                            </p>
                        </div>
                    </div>
                </InfoBlockCss>
            </InternshipSection11WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection11

import React from 'react'

import {
    InternshipSection10WrapperCss,
    InfoBlockCss,
    BackgroundSection,
    SectionWrapper,
} from './index.css'

import pGif from './images/p1.gif'
import pMask from './images/pMask3.png'
import svg1 from './images/svg1.png'
import svg2 from './images/svg2.png'

const InternshipSection10 = () => {
    // FUNCTIE JS PENTRU A MISCA TEXTUL, de implementat in REACT
    // var move = document.querySelector('#animatedBar')

    // var xPos = 0

    // function animate() {
    //     xPos += 3.5

    //     move.style.transform = `translate3d(${xPos}px, 0, 0)`

    //     if (Math.abs(xPos) >= 1500) {
    //         xPos = -1440
    //     }

    //     requestAnimationFrame(animate)
    // }
    // animate()

    return (
        <BackgroundSection>
            <SectionWrapper>
                <InternshipSection10WrapperCss>
                    <InfoBlockCss>
                        <div className="sectionWrapper">
                            <div className="firstContainer">
                                <div className="box1 box">
                                    <div className="gifWrapper">
                                        <img
                                            src={pGif}
                                            className="pGif"
                                            alt=""
                                        />
                                        <img
                                            src={pMask}
                                            className="pMask"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                <div className="box2 box">
                                    <h2 className="title">
                                        Working remotely has its perks but…
                                    </h2>
                                    <p className="firstParagraph">
                                        … it also has its challenges. We’ll
                                        teach you the best practices so you can
                                        be as efficient and productive as
                                        possible.
                                    </p>
                                </div>
                            </div>

                            <div className="textBar">
                                <div className="box3 box">
                                    <img src={svg1} className="svg1" alt="" />
                                </div>
                                <div className="box4 box">
                                    <h1>
                                        <span className="symbol">|</span>{' '}
                                        team_work
                                        <span className="symbol">&lt;</span>
                                    </h1>
                                </div>
                                <div className="box5 box">
                                    <h1>
                                        <span className="symbol">|</span>{' '}
                                        efficient_communication
                                        <span className="symbol">&lt;</span>
                                    </h1>
                                </div>
                                <div className="box6 box">
                                    <h1>
                                        <span className="symbol">|</span>{' '}
                                        fast_learning_techniques
                                        <span className="symbol">&lt;</span>
                                    </h1>
                                </div>
                                <div className="box7 box">
                                    <img src={svg2} className="svg2" alt="" />
                                </div>
                            </div>
                        </div>
                    </InfoBlockCss>
                </InternshipSection10WrapperCss>
            </SectionWrapper>
        </BackgroundSection>
    )
}

export default InternshipSection10

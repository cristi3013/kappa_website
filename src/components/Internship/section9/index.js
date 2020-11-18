import React from 'react'

import {
    InternshipSection9WrapperCss,
    InfoBlockCss,
    SectionWrapper,
} from './index.css'

import covidGif from './images/covid.gif'
import avatar from './images/avatar.png'
import mic from './images/mic.png'
import web from './images/web.png'
import toolbar from './images/toolbar.png'

const InternshipSection9 = () => {
    return (
        <SectionWrapper>
            <InternshipSection9WrapperCss>
                <InfoBlockCss>
                    <div className="header">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> COVID-proof
                                <span className="symbol">&lt;</span>
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
                            <img src={toolbar} className="toolbar" alt="" />
                            <img src={avatar} className="avatar" alt="" />
                            <img src={mic} className="mic" alt="" />
                            <img src={web} className="web" alt="" />
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

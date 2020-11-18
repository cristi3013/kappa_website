import React from 'react'
import {
    InternshipThirdSectionWrapperCss,
    InfoBlockCss,
    SectionWrapper,
} from './index.css'
import kGif from './images/k.gif'
import kMask from './images/kmask.png'
import vrGoogles from './images/vrGoogles.png'
import vrController1 from './images/vrController1.png'
import vrController2 from './images/vrController2.png'
import armyGif from './images/army.gif'
import aMask1 from './images/amask1.png'
import book from './images/book.png'
import cap from './images/cap.png'

// TODO:Fix the svg icons for the gifs and animate them -> toate elementele intr-un div si dupa mutat div-ul

const InternshipThirdSection = () => {
    return (
        <SectionWrapper>
            <InternshipThirdSectionWrapperCss>
                <InfoBlockCss>
                    <div className="container1">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> This is the
                                Kappa bootcamp
                                <span className="symbol">&lt;</span>
                            </h4>

                            <h1 className="title">You are the future</h1>

                            <p className="paragraph1">
                                We know how crucial the
                                <span className="styledParagraph">
                                    <span>&nbsp; </span> next generation of
                                    developers<span>&nbsp; </span>
                                </span>{' '}
                                is for our own future. That’s why we invest in
                                tomorrow’s engineers to nurture capable and
                                indispensable professionals.
                            </p>
                        </div>

                        <div className="box2 box">
                            {/* <div className="gifContainer1">
                                <img src={kGif} className="kGif" alt="" />
                                <img src={kMask} className="kMask" alt="" />
                                <img
                                    src={vrGoogles}
                                    className="vrGoogles"
                                    alt=""
                                />
                                <img
                                    src={vrController1}
                                    className="vrController1"
                                    alt=""
                                />
                                <img
                                    src={vrController2}
                                    className="vrController2"
                                    alt=""
                                />
                            </div> */}
                        </div>
                    </div>

                    <div className="container2">
                        <div className="box3 box">
                            <div className="gifContainer2">
                                <img src={armyGif} className="armyGif" alt="" />
                                <img src={aMask1} className="aMask" alt="" />
                                <img src={book} className="book" alt="" />
                                <img src={cap} className="cap" alt="" />
                            </div>
                        </div>

                        <div className="box4 box">
                            <h1 className="title2">A bootcamp for the best</h1>
                            <p className="paragraph2">
                                Performance doesn’t come about lightly, but with
                                ownership over your own work and motivation to
                                be the best. We have a system put in place to
                                facilitate your growth like nowhere else.
                            </p>
                            <p className="paragraph3">
                                Our internship program has been refined over the
                                years and became
                                <span className="styledParagraph2">
                                    <span>&nbsp; </span>a fulfilling experience{' '}
                                    <span>&nbsp; </span>
                                </span>{' '}
                                for students or graduates. From training to
                                project tasks - everything’s cherrypicked and
                                revised by our senior developers to ensure
                                you’re getting the most out of it.
                            </p>
                        </div>
                    </div>
                    <div className="box5 box">
                        <h1 className="title3">Intense and diverse training</h1>
                        <p className="paragraph4">
                            We believe in diversity as a catalyst for rapid
                            personal and professional growth. A young developer
                            should experience as many different challenges as
                            possible in order to acquire multiple skills during
                            a shorter period of time. You’ll be working on
                            various real-life projects that will intensely
                            <span className="styledParagraph3">
                                <span>&nbsp; </span>test your limits.
                            </span>
                        </p>
                    </div>
                </InfoBlockCss>
            </InternshipThirdSectionWrapperCss>
        </SectionWrapper>
    )
}

export default InternshipThirdSection

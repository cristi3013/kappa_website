import React from 'react'
import {
    InternshipThirdSectionWrapperCss,
    InfoBlockCss,
    InfoBlockItemCss,
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
        <InternshipThirdSectionWrapperCss>
            <h4>
                <span className="symbol">|</span> This is the Kappa bootcamp{' '}
                <span className="symbol">&lt;</span>
            </h4>
            <InfoBlockCss>
                <h1 className="title">You are the future</h1>
            </InfoBlockCss>
            <InfoBlockItemCss>
                {' '}
                <div className="section">
                    <div className="box box1">
                        <p>
                            We know how crucial the{' '}
                            <span className="styledParagraph1">
                                {' '}
                                next generation of developers{' '}
                            </span>
                            is for our own future. That’s why we invest in
                            tomorrow’s engineers to nurture capable and
                            indispensable professionals.
                        </p>
                    </div>
                    <div className="box box2">
                        <div className="gifSection1">
                            <img src={kGif} className="kGif" alt="kGif"></img>
                            <img
                                src={kMask}
                                className="kMask"
                                alt="kMask"
                            ></img>
                            <img
                                src={vrGoogles}
                                className="vrGoogles"
                                alt="vrGoogles"
                            ></img>
                            <img
                                src={vrController1}
                                className="vrController1"
                                alt="vrController1"
                            ></img>
                            <img
                                src={vrController2}
                                className="vrController2"
                                alt="vrController2"
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="wrapper">
                        <div className="box box1">
                            <div className="gifSection2">
                                <img
                                    src={armyGif}
                                    className="armyGif"
                                    alt="armyGif"
                                ></img>

                                <img
                                    src={aMask1}
                                    className="armyMask"
                                    alt="armyMask"
                                ></img>

                                <img
                                    src={book}
                                    className="book"
                                    alt="book"
                                ></img>
                                <img src={cap} className="cap" alt="cap"></img>
                            </div>
                        </div>
                        <div className="box box2">
                            <div className="textSection2">
                                {' '}
                                <h1 className="title2">
                                    A bootcamp for the best
                                </h1>
                                <p className="paragraph2">
                                    Performance doesn’t come about lightly, but
                                    with ownership over your own work and
                                    motivation to be the best. We have a system
                                    put in place to facilitate your growth like
                                    nowhere else.{' '}
                                </p>
                                <p className="paragraph3">
                                    Our internship program has been refined over
                                    the years and became{' '}
                                    <span className="styledParagraph2">
                                        a fulfilling experience
                                    </span>{' '}
                                    for students or graduates. From training to
                                    project tasks - everything’s cherrypicked
                                    and revised by our senior developers to
                                    ensure you’re getting the most out of it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box box3">
                        <div className="textSection3">
                            <h1 className="title3">
                                Intense and diverse training
                            </h1>

                            <p className="paragraph4">
                                We believe in diversity as a catalyst for rapid
                                personal and professional growth. A young
                                developer should experience as many different
                                challenges as possible in order to acquire
                                multiple skills during a shorter period of time.
                                You’ll be working on various real-life projects
                                that will intensely{' '}
                                <span className="styledParagraph3">
                                    test your limits.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </InfoBlockItemCss>
        </InternshipThirdSectionWrapperCss>
    )
}

export default InternshipThirdSection

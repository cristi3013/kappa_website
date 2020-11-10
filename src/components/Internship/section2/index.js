import React from 'react'
import {
    InternshipSecondSectionWrapperCss,
    InfoBlockCss,
    InfoBlockItemCss,
    ItemsCss,
} from './index.css'

import gif1 from './images/1.gif'

const InternshipSecondSection = () => {
    return (
        <InternshipSecondSectionWrapperCss>
            <div className="gifContainer">
                <div className="secondTitle">
                    <h4>
                        <span className="symbol">|</span> Who are we{' '}
                        <span className="symbol">&lt;</span>
                    </h4>
                </div>

                <div className="gif">
                    <img src={gif1} />
                </div>
            </div>
            <InfoBlockCss>
                <h1 className="title">We honour engineering.</h1>

                <div className="text">
                    <div className="info">
                        <h2 className="firstParagraph">
                            Our developers are our heroes: resourceful, highly
                            <br></br>
                            skilled, energetic, and full of validated potential.
                        </h2>

                        {/* se suprapuun pe partea de mobil cand e prea ingust, de rezolvat */}

                        <div className="numbers">
                            <div className="linesOfCode">
                                <h1 className="nrLinesOfCode">53,421</h1>
                                <p className="descLinesOfCode">lines of code</p>
                            </div>

                            <div className="tasksDone">
                                <h1 className="nrTasksDone">228</h1>
                                <p className="descTasks">tasks done</p>
                            </div>

                            <div className="developers">
                                <h1 className="nrDevs">0</h1>
                                <p className="descDevs">developers were hurt</p>
                                <p className="descDevs2">in the process</p>
                            </div>
                        </div>

                        <h2 className="secondParagraph">
                            Our team dynamics are similar to a sports team: a
                            <br></br>{' '}
                            <span className="performanceStyled">
                                performance-oriented collective
                            </span>{' '}
                            built on trust and<br></br> skill. We’re the coach,
                            you’re the player, and ahead<br></br> is the goal.
                        </h2>
                    </div>
                </div>
            </InfoBlockCss>

            <ItemsCss>
                <InfoBlockItemCss></InfoBlockItemCss>
            </ItemsCss>
        </InternshipSecondSectionWrapperCss>
    )
}

export default InternshipSecondSection

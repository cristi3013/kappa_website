import React from 'react'

import {
    InternshipSection14WrapperCss,
    InfoBlockCss,
    SectionWrapper,
    PrimaryLinks,
} from './index.css'

const InternshipSection14 = () => {
    return (
        <SectionWrapper>
            <InternshipSection14WrapperCss>
                <InfoBlockCss>
                    <div className="container">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> Intern with us
                                <span className="symbol"> &lt;</span>
                            </h4>
                        </div>

                        <div className="box2 box">
                            <h1 className="title">
                                Want to pursue a programming career? Tell us
                                your story, we’re great listeners:
                            </h1>
                        </div>
                    </div>
                    <div className="box3 box">
                        <PrimaryLinks>
                            <a href="mailto:captain@kappa.london?subject=Application for Front-End Internship at Kappa London">
                                captain@kappa.london
                            </a>
                        </PrimaryLinks>
                    </div>
                </InfoBlockCss>
            </InternshipSection14WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection14

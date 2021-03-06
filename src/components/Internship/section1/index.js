import React from 'react'
import {
    InternshipFirstSectionWrapperCss,
    InfoBlockCss,
    InfoBlockItemCss,
    ItemsCss,
    PrimaryLinkCss,
    SectionWrapper,
} from './index.css'

import gif1 from './images/1.gif'
import mask from './images/mask.png'

const InternshipFirstSection = () => {
    return (
        <SectionWrapper>
            <InternshipFirstSectionWrapperCss>
                <h4>
                    <span className="symbol">|</span> Intern with us{' '}
                    <span className="symbol">&lt;</span>
                </h4>
                <InfoBlockCss>
                    <h1>You are the CSS to our HTML</h1>

                    <PrimaryLinkCss>
                        <a href="mailto:captain@kappa.london?subject=Application for Front-End Internship at Kappa London">
                            Let's markup together
                        </a>
                    </PrimaryLinkCss>
                    <ItemsCss>
                        <InfoBlockItemCss>
                            <div className="container">
                                <img src={gif1} alt="gif1" />
                                <img src={mask} className="mask" alt="mask" />
                            </div>
                        </InfoBlockItemCss>
                    </ItemsCss>
                </InfoBlockCss>
            </InternshipFirstSectionWrapperCss>
        </SectionWrapper>
    )
}

export default InternshipFirstSection

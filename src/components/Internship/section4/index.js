import React from 'react'
import {
    InternshipFourthSectionWrapperCss,
    TextSectionCss,
    PrimaryLinks,
    BackgroundSection,
    SectionWrapper,
    CardSectionCss,
} from './index.css'
import Card from './Card'
import bryant from './images/1.png'
import aura from './images/2.png'
import bloomd from './images/3.png'
const InternshipFourthSection = () => {
    const cards = [
        {
            image: bryant,
            title: 'Bryant Dental',
            text:
                'A UK-based dentistry equipment manufacturer and distributor. Our interns implemented eye-candy animations within an award-winning website design.',
        },
        {
            image: aura,
            title: 'Aura',
            text:
                'Reshaping the UK dentistry industry through software innovation. Our biggest project yet that helps dentists do their job a lot more efficiently.',
        },
        {
            image: bloomd,
            title: 'Bloomd',
            text:
                'Connecting senior citizens with the youth through positive life experience discussions. Multiple functionalities (i.e. chat, login, forum, replies) were coded by our interns.',
        },
        {
            image: null,
            title: 'CV Labs',
            text:
                'A dynamic resume builder. A personal project that was aimed towards freelancers and young professionals who were job searching. ',
        },
        {
            image: null,
            title: 'Honor Cycles',
            text:
                'We built multiple systems for them to carry out their business more efficiently, such as an online service reservation widget and an online payment system.',
        },
        {
            image: null,
            title: 'Create Live',
            text:
                'Personal project that tackled the Social Media Marketing industry. Create Live is a Facebook Live tool that offers users the opportunity to heavily customise their Live sessions.',
        },
    ]

    return (
        <BackgroundSection>
            <SectionWrapper>
                <InternshipFourthSectionWrapperCss>
                    <CardSectionCss>
                        {cards.map((card) => {
                            return <Card cardInfo={card} />
                        })}
                    </CardSectionCss>

                    <TextSectionCss>
                        <h1>Put your name on it</h1>
                        <PrimaryLinks>
                            <p>Participate in incoming projects</p>
                        </PrimaryLinks>
                    </TextSectionCss>
                </InternshipFourthSectionWrapperCss>
            </SectionWrapper>
        </BackgroundSection>
    )
}

export default InternshipFourthSection

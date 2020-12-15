import React from 'react'
import {
    InternshipSection6WrapperCss,
    CardSectionCss,
    TitleSectionCss,
    SectionWrapper,
} from './index.css'
import Card from './Card'
import advancedMarkup from './images/advancedMarkup.svg'
import components from './images/components.svg'
import designTools from './images/designTools.svg'
import elections from './images/elections.svg'
import environments from './images/environments.svg'
import htmlCss from './images/htmlCss.svg'
import javascript from './images/javascript.svg'
import react from './images/react.svg'
import redux from './images/redux.svg'

const InternshipSection6 = () => {
    const cards = [
        {
            image: htmlCss,
            title: 'HTML & CSS',
        },
        {
            image: designTools,
            title: 'Design Tools ',
        },
        {
            image: javascript,
            title: 'Javascript Basics & Javascript Algorithms ',
        },
        {
            image: advancedMarkup,
            title: 'Advanced Markup',
        },
        {
            image: components,
            title: 'Components Pt 1.',
        },
        {
            image: environments,
            title: 'Browser Tools, APIs & Chrome Extensions',
        },
        {
            image: react,
            title: 'Beginner & Advanced React',
        },
        {
            image: redux,
            title: 'Redux & Mobx State Management ',
        },
        {
            image: elections,
            title: 'Electron ',
        },
    ]

    return (
        <SectionWrapper>
            <InternshipSection6WrapperCss>
                <TitleSectionCss>
                    <div className="container">
                        <div className="box1 box">
                            <h4>
                                <span className="symbol">|</span> Curriculum{' '}
                                <span className="symbol">&lt;</span>
                            </h4>
                        </div>

                        <div className="box2 box">
                            <h1 className="title1">Things you will learn</h1>
                        </div>
                    </div>
                </TitleSectionCss>
                <CardSectionCss>
                    {cards.map((card) => {
                        return <Card cardInfo={card} />
                    })}
                </CardSectionCss>
            </InternshipSection6WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection6

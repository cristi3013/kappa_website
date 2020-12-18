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
            text1: '• Most Up-To-Date HTML & CSS practices',
            text2: '• Flexbox, Tailwind, Bootstrap',
            text3: '• CSS Animations',
        },
        {
            image: designTools,
            title: 'Design Tools',
            text1: '• Figma, Webflow & Related Tools, WP Themes Builders',
            text2: '• Prototyping, Mock and Information Architecture',
            text3: '• Notion, Self-Documenting, WIP, PH, MKLOG',
        },
        {
            image: javascript,
            title: 'Javascript Basics & Javascript Algorithms ',
            text1: '• ES5, ES6, Data Structures and the nitty-gritty ',
            text2: '• Document, Events, Interfaces',
        },
        {
            image: advancedMarkup,
            title: 'Advanced Markup',
            text1: '• Dom Manipulation, Traverse, Events',
            text2: '• Pop-ups, Methods, Cross-Window, Click-Jacking',
            text3: '• Compilers, Pre-Processors',
        },
        {
            image: components,
            title: 'Components Pt 1.',
            text1: '• Native Web Components & tricks ',
            text2: '• lit-html, lit-element & tricks',
        },
        {
            image: environments,
            title: 'Browser Tools, APIs & Chrome Extensions',
            text1: '• Node, NPM, Yarn, Webpack & Brunch',
            text2: '• Chrome Browser Tools a la carté ',
            text3: '• Chrome Extensions & Chrome APIs',
        },
        {
            image: react,
            title: 'Beginner & Advanced React',
            text1: '• Tooling, JSX, State, Router ',
            text2: '• Sockets, Modules, Netlify',
        },
        {
            image: redux,
            title: 'Redux & Mobx State Management ',
            text1: '• Patterns, GraphQL, Appollo',
            text2: '• Next, Gatsby, Styled',
            text3: '• Testing',
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

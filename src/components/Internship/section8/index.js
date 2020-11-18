import React from 'react'
import {
    InternshipSection8WrapperCss,
    CardSectionCss,
    SectionWrapper,
} from './index.css'
import Card from './Card'
import photo from './images/1.png'
import photo2 from './images/2.png'
import watchButton from './images/watchButton.png'

const InternshipSection8 = () => {
    const cards = [
        {
            image: photo,
            button: 'Watch',
            name: 'Ilona Panych',
            languages: 'Typescript   ReactJs   PHP   Laravel   MySQL   ',
            status: null,
        },

        {
            image: photo2,
            button: 'Watch',
            name: 'Phillip Martin',
            languages: 'Typescript   ReactJs   PHP   Laravel   MySQL   ',
            status: null,
        },

        {
            image: null,
            button: null,
            name: 'Tiko Giorgadze',
            languages: 'Typescript   ReactJs   PHP   Laravel   MySQL   ',
            status: 'live',
        },

        {
            image: null,
            button: null,
            name: 'Micheile Henderson',
            languages: 'Typescript   ReactJs   PHP   Laravel   MySQL   ',
            status: 'live',
        },
    ]

    return (
        <SectionWrapper>
            <InternshipSection8WrapperCss>
                <h1 className="title">Meet our interns</h1>
                <CardSectionCss>
                    {cards.map((card) => {
                        return <Card cardInfo={card} />
                    })}
                </CardSectionCss>
            </InternshipSection8WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection8

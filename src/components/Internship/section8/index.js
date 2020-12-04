import React from 'react'
import {
    InternshipSection8WrapperCss,
    CardSectionCss,
    SectionWrapper,
} from './index.css'
import Card from './Card'
import photo from './images/cristi.png'
import photo2 from './images/andrei.png'
import photo3 from './images/albert.png'
import gif1 from './images/gif1.gif'

const InternshipSection8 = () => {
    const cards = [
        {
            image: photo,
            button: null,
            gif: null,
            name: 'Cristi Vasile',
            languages: 'HTML   CSS   JavaScript   ReactJS   ',
            status: 'live',
        },

        {
            image: photo2,
            button: null,
            gif: null,
            name: 'Andrei Chihalau',
            languages: 'HTML   CSS   JavaScript   ReactJS    ',
            status: 'live',
        },

        {
            image: gif1,
            gif: photo3,
            button: 'Watch',
            name: 'Albert Luta',
            languages: 'Typescript   HTML   CSS   JavaScript   ReactJS    ',
            status: null,
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

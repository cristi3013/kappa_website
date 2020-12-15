import React from 'react'
import {
    InternshipSection8WrapperCss,
    CardSectionCss,
    SectionWrapper,
} from './index.css'
import Card from './Card'
import cristiPreview from './images/cristiPreview.png'
import andreiPreview from './images/andreiPreview.png'
import albertPreview from './images/albertPreview.png'
import albertGif from './images/albertGif.gif'
import andreiGif from './images/andreiGif.gif'
import cristiGif from './images/cristiGif.gif'

const InternshipSection8 = () => {
    const cards = [
        {
            image: cristiGif,
            button: null,
            gif: cristiPreview,
            name: 'Cristi Vasile',
            languages: 'HTML   CSS   JavaScript   ReactJS   ',
            status: 'live',
        },

        {
            image: andreiGif,
            button: null,
            gif: andreiPreview,
            name: 'Andrei Chihalau',
            languages: 'HTML   CSS   JavaScript   ReactJS    ',
            status: 'live',
        },

        {
            image: albertGif,
            gif: albertPreview,
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

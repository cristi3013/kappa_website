import React, { useState, useRef, useEffect } from 'react'

import {
    SectionWrapper,
    InternshipSection13WrapperCss,
    InfoBlockCss,
    BlocksCss,
    InfoBlockHeaderCss,
    InfoBlockTitleCss,
    InfoBlockContentCss,
    IconCss,
} from './index.css'

const InfoBlock = (props) => {
    const [show, setShow] = useState(false)
    const childElement = useRef(null)
    const headerElement = useRef(null)
    useEffect(() => {
        if (props.opened !== props.id && show) {
            setShow(false)
        }
    })

    const clickHandle = () => {
        if (props.opened === props.id) {
            setShow(!show)
        } else {
            props.setOpened(props.id)
            setShow(true)
            console.log(headerElement.current.offsetHeight)
        }
    }

    return (
        <InfoBlockCss>
            <InfoBlockHeaderCss ref={headerElement}>
                <IconCss show={show} onClick={clickHandle} />
                <InfoBlockTitleCss>
                    <h3 onClick={clickHandle}>{props.title}</h3>
                    <p>{props.subtitle}</p>
                </InfoBlockTitleCss>
            </InfoBlockHeaderCss>
            <InfoBlockContentCss
                show={show}
                childrenHeight={
                    childElement.current && childElement.current.scrollHeight
                }
            >
                <div ref={childElement}>{props.children}</div>
            </InfoBlockContentCss>
        </InfoBlockCss>
    )
}

const InternshipSection13 = () => {
    const [opened, setOpened] = useState(0)

    return (
        <SectionWrapper>
            <InternshipSection13WrapperCss>
                <h4>
                    <span className="symbol">|</span> FAQs{' '}
                    <span className="symbol">&lt;</span>
                </h4>

                <BlocksCss>
                    <h1 className="questionsTitle">Got Questions?</h1>
                    <InfoBlock
                        title="How long does the partnership last"
                        setOpened={setOpened}
                        opened={opened}
                        id="1"
                    >
                        <p>
                            The internship program spans over the course of six
                            months. It starts with a few weeks of training after
                            which you’ll start working on real life projects
                            straight away.
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="Will I work on one single project or multiple areas?"
                        setOpened={setOpened}
                        opened={opened}
                        id="2"
                    >
                        <p>
                            You will get the chance to experience multiple areas
                            and projects throughout your internship.
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="Is the schedule flexible?"
                        id="3"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>
                            You are encouraged to work 9-6-8 in order to
                            efficiently interact with the other team members,
                            but we are flexible with regards to your schedule
                            only at a daily level (e.g. rescheduling missed days
                            to the weekend).
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="How do I apply?"
                        id="4"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>
                            Send us an email at captain@kappa.london containing
                            your resume and cover letter and we’ll get back to
                            you. If we don't reply straight away, please don't
                            take it personally as the amount of applicants is
                            overwhelming sometimes.
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="When should I apply?"
                        id="5"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>
                            Our internship periods are October - March and April
                            - September. Please submit your applications during
                            the months of September (for the winter semester) or
                            March (for the summer semester). For the rest of the
                            year, feel free to get in touch - we love getting
                            coffee with interesting people.
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="Will I be hired after my internship?"
                        id="6"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>
                            If things run smooth and the future’s bright, we’ll
                            definitely want you to join our team on a full-time
                            junior developer position. Alternatively, we could
                            speak with our partner agencies and startups if you
                            really enjoyed working with them.
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="Who can apply?"
                        id="7"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>
                            If you’re a recent graduate holding a Computer
                            Science (or other strictly engineering-related
                            subjects) degree, you’re eligible to apply.{' '}
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="I need more help"
                        id="8"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>
                            Any unanswered questions or lifelong dilemmas? Shoot
                            us an email at captain@kappa.london and let’s talk
                            about it :)
                        </p>
                    </InfoBlock>

                    <InfoBlock
                        title="What the hell?"
                        id="9"
                        setOpened={setOpened}
                        opened={opened}
                    >
                        <p>I know...</p>
                    </InfoBlock>
                </BlocksCss>
            </InternshipSection13WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection13

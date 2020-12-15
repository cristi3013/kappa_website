import React, { useState } from 'react'
import { useIntersectionObserver } from '@researchgate/react-intersection-observer'
import Typist from 'react-typist'
import {
    InternshipSection7WrapperCss,
    InfoBlockCss,
    SectionWrapper,
} from './index.css'

const InternshipSection7 = () => {
    const [visibility, setVisibility] = useState('invisible')

    const handleChange = (entry) => {
        setVisibility(entry.isIntersecting ? 'visible' : 'invisible')
    }

    const [ref] = useIntersectionObserver(handleChange, { threshold: 0.4 })
    return (
        <SectionWrapper>
            <InternshipSection7WrapperCss>
                <InfoBlockCss>
                    <div className="titleWrapper">
                        <h4>
                            <span className="symbol">|</span> Your schedule{' '}
                            <span className="symbol">&lt;</span>
                        </h4>
                    </div>

                    <div className="codeWrapper">
                        <h1 className="title">The typical day at Kappa</h1>
                        <div ref={ref} className={`text ${visibility}`}>
                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w1">init </span>
                                    <span className="w2">
                                        ( NEW_DAY_AT_KAPPA )
                                    </span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={1800} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w3">start </span>
                                    <span className="w4">( DISCORD )</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={3000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w5">
                                        ask_for_resources
                                    </span>
                                    <span className="w6"> = call </span>{' '}
                                    <span className="w7">( MENTOR )</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={4500} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w8">if </span> ({' '}
                                    <span className="w9">
                                        ask_for_resources
                                    </span>{' '}
                                    <span className="w10"> ==</span>{' '}
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={6000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w11">no_answer </span>)
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={7000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w12">then </span>{' '}
                                    <span>&nbsp;</span> <span> &#123;</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={8000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w13">laugh_at</span> (
                                    <span className="w14"> DANK_MEMES</span> )
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={9200} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span>&#125;</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={10000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w15">resources </span>{' '}
                                    <span className="w16"> = get</span>{' '}
                                    <span className="w17">( FIGMA )</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={12000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w18">ALERT</span>:{' '}
                                    <span className="w19">
                                        {' '}
                                        deadline is today
                                    </span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={13000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w20">initiate</span>
                                    <span className="w21">_</span>
                                    <span className="w22">anxiety()</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={14500} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w23">skip</span>_
                                    <span className="w24">lunch()</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={15500} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w25">start</span>
                                    <span className="w26">( CODING )</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={16500} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w27">start</span>
                                    <span className="w28">( TESTING )</span>
                                    <span>&nbsp;&nbsp;</span>{' '}
                                    <span className="w29">x3</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={18000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w30">start</span>{' '}
                                    <span className="w31">( NOTION )</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={19000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w32">document</span>
                                    <span className="w33">_progress()</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={20000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w34">push</span>{' '}
                                    <span className="w35">_changes()</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={21500} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w36">ask_for_review</span>{' '}
                                    = <span className="w37">ask</span>{' '}
                                    <span className="w38">( MENTOR )</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={23000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w39">if </span> (
                                    <span className="w40">
                                        {' '}
                                        ask_for_review{' '}
                                    </span>{' '}
                                    == <span className="w41">FAIL </span>)
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={24000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w42">then </span>{' '}
                                    <span>&nbsp;&nbsp;</span>{' '}
                                    <span>&#123;</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={26000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w43">start</span>_
                                    <span className="w44">over()</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={28000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span>&#125;</span>{' '}
                                    <span className="w45">else if</span> ({' '}
                                    <span className="w46">ask_for_review </span>
                                    ==
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={29500} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w47">SUCCESS </span>){' '}
                                    <span>&#123;</span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={31000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w48">
                                        DELIVERED TASK SUCCESSFULLY
                                    </span>
                                </p>
                            </Typist>

                            <Typist
                                cursor={{ show: false }}
                                avgTypingDelay={30}
                            >
                                <Typist.Delay ms={32000} />
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span>&#125;</span>
                                </p>
                            </Typist>
                        </div>
                    </div>
                </InfoBlockCss>
            </InternshipSection7WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection7

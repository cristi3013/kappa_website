import React from 'react'
import Typist from 'react-typist'
import {
    InternshipSection7WrapperCss,
    InfoBlockCss,
    SectionWrapper,
} from './index.css'
import Typing from 'react-typing-animation'

function useOnScreen(options) {
    const [ref, setRef] = React.useState(null)
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, options)

        if (ref) {
            observer.observe(ref)
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, options])

    return [setRef, visible]
}

const InternshipSection7 = () => {
    const [setRef, visible] = useOnScreen({ threshold: 0.4 })

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

                        {visible ? (
                            <div className="text" ref={setRef}>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        $
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>{' '}
                                        <span className="w1">init </span>
                                        <span className="w2">
                                            ( NEW_DAY_AT_KAPPA )
                                        </span>
                                    </Typist>
                                </p>

                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={1800} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>{' '}
                                        <span className="w3">start </span>
                                        <span className="w4">( DISCORD )</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={3000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>{' '}
                                        <span className="w5">
                                            ask_for_resources
                                        </span>
                                        <span className="w6"> = call </span>{' '}
                                        <span className="w7">( MENTOR )</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={4500} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>{' '}
                                        <span className="w8">if </span> ({' '}
                                        <span className="w9">
                                            ask_for_resources
                                        </span>{' '}
                                        <span className="w10"> ==</span>{' '}
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={6000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>{' '}
                                        <span className="w11">no_answer </span>)
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={7000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>{' '}
                                        <span className="w12">then </span>{' '}
                                        <span>&nbsp;</span> <span> &#123;</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={8000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w13">laugh_at</span> (
                                        <span className="w14"> DANK_MEMES</span>{' '}
                                        )
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={9200} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span>&#125;</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={10000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w15">resources </span>{' '}
                                        <span className="w16"> = get</span>{' '}
                                        <span className="w17">( FIGMA )</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={12000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w18">ALERT</span>:{' '}
                                        <span className="w19">
                                            {' '}
                                            deadline is today
                                        </span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={13000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w20">initiate</span>
                                        <span className="w21">_</span>
                                        <span className="w22">anxiety()</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={14500} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w23">skip</span>_
                                        <span className="w24">lunch()</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={15500} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w25">start</span>
                                        <span className="w26">( CODING )</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={16500} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w27">start</span>
                                        <span className="w28">( TESTING )</span>
                                        <span>&nbsp;&nbsp;</span>{' '}
                                        <span className="w29">x3</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={18000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w30">start</span>{' '}
                                        <span className="w31">( NOTION )</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={19000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w32">document</span>
                                        <span className="w33">_progress()</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={20000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w34">push</span>{' '}
                                        <span className="w35">_changes()</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={21500} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w36">
                                            ask_for_review
                                        </span>{' '}
                                        = <span className="w37">ask</span>{' '}
                                        <span className="w38">( MENTOR )</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={23000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w39">if </span> (
                                        <span className="w40">
                                            {' '}
                                            ask_for_review{' '}
                                        </span>{' '}
                                        == <span className="w41">FAIL </span>)
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={24000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w42">then </span>{' '}
                                        <span>&nbsp;&nbsp;</span>{' '}
                                        <span>&#123;</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={26000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w43">start</span>_
                                        <span className="w44">over()</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={28000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span>&#125;</span>{' '}
                                        <span className="w45">else if</span> ({' '}
                                        <span className="w46">
                                            ask_for_review{' '}
                                        </span>
                                        ==
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={29500} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w47">SUCCESS </span>){' '}
                                        <span>&#123;</span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={31000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span className="w48">
                                            DELIVERED TASK SUCCESSFULLY
                                        </span>
                                    </Typist>
                                </p>
                                <p>
                                    <Typist
                                        cursor={{ show: false }}
                                        avgTypingDelay={30}
                                    >
                                        <Typist.Delay ms={32000} />$
                                        <span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                        </span>
                                        <span>&#125;</span>
                                    </Typist>
                                </p>
                            </div>
                        ) : (
                            <div className="text" ref={setRef} style={{}}>
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
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w3">start </span>
                                    <span className="w4">( DISCORD )</span>
                                </p>
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
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w11">no_answer </span>)
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>{' '}
                                    <span className="w12">then </span>{' '}
                                    <span>&nbsp;</span> <span> &#123;</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w13">laugh_at</span> (
                                    <span className="w14"> DANK_MEMES</span> )
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span>&#125;</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w15">resources </span>{' '}
                                    <span className="w16"> = get</span>{' '}
                                    <span className="w17">( FIGMA )</span>
                                </p>
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
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w20">initiate</span>
                                    <span className="w21">_</span>
                                    <span className="w22">anxiety()</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w23">skip</span>_
                                    <span className="w24">lunch()</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w25">start</span>
                                    <span className="w26">( CODING )</span>
                                </p>
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
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w30">start</span>{' '}
                                    <span className="w31">( NOTION )</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w32">document</span>
                                    <span className="w33">_progress()</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w34">push</span>{' '}
                                    <span className="w35">_changes()</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w36">ask_for_review</span>{' '}
                                    = <span className="w37">ask</span>{' '}
                                    <span className="w38">( MENTOR )</span>
                                </p>
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
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w42">then </span>{' '}
                                    <span>&nbsp;&nbsp;</span>{' '}
                                    <span>&#123;</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w43">start</span>_
                                    <span className="w44">over()</span>
                                </p>
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
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w47">SUCCESS </span>){' '}
                                    <span>&#123;</span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span className="w48">
                                        DELIVERED TASK SUCCESSFULLY
                                    </span>
                                </p>
                                <p>
                                    $
                                    <span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
                                    </span>
                                    <span>&#125;</span>
                                </p>
                            </div>
                        )}
                    </div>
                </InfoBlockCss>
            </InternshipSection7WrapperCss>
        </SectionWrapper>
    )
}

export default InternshipSection7

import React, { useEffect, useRef } from 'react';
import SvgBlock from '../../components/SvgBlock';
import TextBlock from '../../components/TextBlock';
import Cone from '../../assets/3dtriangle.png';
import Browser_S from '../../assets/Browser_s.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ServiceSection, Background, Title, Line, Triangle, Content, OBJ } from './ServiceElements';

const Service = () => {
    const ref = useRef(null);
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    useEffect(() => {
        const element = ref.current;
        const line = document.getElementById('line');
        const mq = window.matchMedia('(max-width: 60em)');
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: document.getElementById('services'),
                start: 'top top+=180',
                end: 'bottom bottom',
                pin: element,
                pinReparent: true,
                makers: true,
            },
        });

        tl.fromTo(
            document.getElementById('line'),
            {
                height: '15rem',
            },
            {
                height: '3rem',
                duration: 2,
                scrollTrigger: {
                    trigger: line,
                    start: 'top top+=200',
                    ens: 'bottom top+=220',
                    scrub: true,
                    snap: true,
                },
            }
        );

        revealRefs.current.forEach((el, index) => {
            if (mq.matches) {
                tl.from(el.childNodes[1], {
                    x: -300,
                    opacity: 0,
                    duration: 2,
                    ease: 'power2',

                    scrollTrigger: {
                        trigger: el,
                        id: `section-${index + 1}`,
                        start: 'top center+=200',
                        end: 'bottom bottom-=100',
                        scrub: true,
                        snap: true,
                    },
                })
                    .to(el.childNodes[2], {
                        transform: 'scale(0)',
                        duration: 2,
                        ease: 'power2.inOut',

                        scrollTrigger: {
                            trigger: el.childNodes[1],
                            id: `section-${index + 1}`,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: true,
                            snap: true,
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: 'power2',

                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top center+=100',
                            end: 'bottom center-=200',
                            scrub: true,
                            snap: true,
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: 'power2.inOut',

                        scrollTrigger: {
                            trigger: el.childNodes[1],
                            id: `section-${index + 1}`,
                            start: 'top top+=300',
                            end: 'enter top+=300',
                            scrub: true,
                            makers: true,
                        },
                    });
            } else {
                tl.from(el.childNodes[0], {
                    x: -300,
                    opacity: 0,
                    duration: 2,
                    ease: 'power2',

                    scrollTrigger: {
                        trigger: el,
                        id: `section-${index + 1}`,
                        start: 'top center+=100',
                        end: 'bottom bottom-=200',
                        scrub: true,
                        snap: true,
                    },
                })
                    .to(el.childNodes[1], {
                        transform: 'scale(0)',
                        duration: 2,
                        ease: 'power2.inOut',

                        scrollTrigger: {
                            trigger: el.childNodes[1],
                            id: `section-${index + 1}`,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: true,
                            snap: true,
                        },
                    })
                    .from(el.childNodes[2], {
                        y: 400,
                        duration: 2,
                        ease: 'power2',

                        scrollTrigger: {
                            trigger: el,
                            id: `section-${index + 1}`,
                            start: 'top center+=100',
                            end: 'bottom center-=200',
                            scrub: true,
                            snap: true,
                        },
                    })
                    .to(el, {
                        opacity: 0,
                        ease: 'power2.inOut',

                        scrollTrigger: {
                            trigger: el.childNodes[1],
                            id: `section-${index + 1}`,
                            start: 'top top+=200',
                            end: 'enter top+=300',
                            scrub: true,
                            makers: true,
                        },
                    });
            }
        });
    }, []);

    return (
        <ServiceSection id="services">
            <Background ref={ref}>
                <Title>Services</Title>
                <Line id="line" />
                <Triangle id="triangle" />
            </Background>
            <Content ref={addToRefs}>
                <TextBlock
                    topic="Design"
                    title="Je construis des designs primés "
                    subText="J'aide les clients à créer un excellent design pour attirer plus de clients"
                />
                <OBJ>
                    <img src={Browser_S} alt="Tube" height="400" width="400" />;
                </OBJ>
                <SvgBlock svg="experience.svg" />
            </Content>
            <Content ref={addToRefs}>
                <TextBlock
                    topic="Développer"
                    title="Je développe des Site Web & App de haute qualité"
                    subText="Je construis une solution appropriée pour développer votre site Web et votre application avec les meilleurs outils disponibles"
                />
                <OBJ>
                    <img src={Cone} alt="Tube" height="400" width="400" />;
                </OBJ>
                <SvgBlock svg="heatmap.svg" />
            </Content>
        </ServiceSection>
    );
};

export default Service;

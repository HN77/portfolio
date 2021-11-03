import { useEffect, useRef, useState } from 'react';
import Code_s from '../../assets/Code_s.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Headers, Logo, Nav, Button, HumburgerBtn, MobileMenu } from './HeaderElements';

const Header = () => {
    const [click, setClick] = useState(false);

    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const ScrollUp = (id, e) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    const handleClick = (id, e) => {
        setClick(!click);
        ScrollUp(id, e);
    };

    useEffect(() => {
        const element = ref.current;
        const md = window.matchMedia('(max-width: 60em)');

        if (md.matches) {
            gsap.to(element, {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                padding: '1rem 2.5rem',
                borderRadius: '0 0 4rem 4rem',
                border: '2px solid var(--white)',

                duration: 1,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: 'element',
                    start: 'bootom+=200 top',
                    end: '+=100',
                    scrub: true,
                    snap: true,
                },
            });
        } else {
            gsap.to(element, {
                position: 'fixed',
                top: '0.2rem',
                left: '3rem',
                right: '3rem',
                padding: '1.5rem 2rem',
                borderRadius: '4rem',
                border: '3px solid var(--white)',

                duration: 1,
                ease: 'power1.out',

                scrollTrigger: {
                    trigger: 'element',
                    start: 'bootom+=300 top',
                    end: '+=250',
                    scrub: true,
                    snap: true,
                },
            });
        }
    }, []);
    return (
        <Headers ref={ref}>
            <Logo>
                <a href="#home" onClick={(e) => handleClick('home', e)}>
                    <div>
                        <img src={Code_s} alt="Logo" />
                        <span>HN</span>Code
                    </div>
                </a>
            </Logo>
            <Nav>
                <a href="#home" onClick={(e) => handleClick('home', e)}>
                    Accueil
                </a>
                <a href="#about" onClick={(e) => handleClick('about', e)}>
                    À propos
                </a>
                <a href="#skills" onClick={(e) => handleClick('skills', e)}>
                    Compétences
                </a>
                <a href="#project" onClick={(e) => handleClick('project', e)}>
                    Portefeuille
                </a>
                <a href="#services" onClick={(e) => handleClick('services', e)}>
                    Services
                </a>
                <a href="#contact" onClick={(e) => handleClick('contact', e)}>
                    <Button>Contactez-moi</Button>
                </a>
            </Nav>
            <HumburgerBtn onClick={() => setClick(!click)} clicked={click}>
                <span />
            </HumburgerBtn>
            <MobileMenu clicked={click}>
                <a href="#home" onClick={(e) => handleClick('home', e)}>
                    Accueil
                </a>
                <a href="#about" onClick={(e) => handleClick('home', e)}>
                    À propos
                </a>
                <a href="#skills" onClick={(e) => handleClick('skills', e)}>
                    Compétences
                </a>
                <a href="#project" onClick={(e) => handleClick('project', e)}>
                    Portefeuille
                </a>
                <a href="#services" onClick={(e) => handleClick('services', e)}>
                    Services
                </a>
                <a href="#contact" onClick={(e) => handleClick('contact', e)}>
                    <Button>Contactez-moi</Button>
                </a>
            </MobileMenu>
        </Headers>
    );
};

export default Header;

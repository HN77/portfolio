import { AiOutlineCloudDownload } from 'react-icons/ai';
import Typical from 'react-typical';
import Dev from '../../assets/dev.svg';
import {
    HeroSection,
    Blobs,
    MainContent,
    LeftBlock,
    Topic,
    Title,
    SubText,
    Circle,
    CTA,
    DevSvg,
} from '../Hero/HeroElements';

const index = () => {
    return (
        <HeroSection id="home">
            <Blobs></Blobs>
            <MainContent>
                <LeftBlock>
                    <Topic>
                        <Circle />
                        <span>
                            <h1>
                                <Typical
                                    steps={[
                                        'Ethousiaste Développeur 🔴',
                                        1000,
                                        'Full Stack Développeur 💻',
                                        1000,
                                        'Mern Stack Développeur 😎',
                                        1000,
                                        'Multiplateforme Développeur 🌐',
                                        1000,
                                        'React/React Native Développeur 📱',
                                        1000,
                                    ]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h1>
                        </span>
                    </Topic>
                    <Title>Bonjour, Je suis Hamid</Title>
                    <SubText>Bienvenue dans mon univers</SubText>
                    <a href="HN-CV.pdf" download="Hamid HN-CV.pdf">
                        <CTA>
                            Télécharger le CV &nbsp;
                            <AiOutlineCloudDownload style={{ height: '3rem', width: '2rem' }} />
                        </CTA>
                    </a>
                </LeftBlock>
                <DevSvg src={Dev} alt="Dev SVG" width="400" height="400" />
            </MainContent>
        </HeroSection>
    );
};

export default index;

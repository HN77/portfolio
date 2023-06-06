import waves from '../../assets/waves.svg';
import hand from '../../assets/hand.svg';
import rocket from '../../assets/rocket.png';
import about from '../../assets/about.svg';
import {
  AboutSection,
  Waves,
  Hand,
  Main,
  Title,
  CurvedLine,
  Content,
  Rocket,
  AboutText,
  About,
  Text,
  Circle,
} from '../About/AboutElements';

const index = () => {
  return (
    <AboutSection id='about'>
      <Waves src={waves} alt='Waves' width='400' height='400' />
      <Hand>
        <img src={hand} alt='Hand' width='400' height='400' />
      </Hand>
      <Main>
        <div>
          <Title>À propos moi</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket src={rocket} alt='Rocket' width='400' height='400' />
          <AboutText>
            <About>
              <img src={about} alt='About' width='400' height='400' />
            </About>
            <Text>
              Je suis un développeur full stack, passionné de développement et
              design qui peut fournir un code propre et une conception parfaite
              au pixel près, je rends également le site web de plus en plus
              interactif avec une animation web. Aujourd'hui, je suis disponible
              pour des nouvelles opportunités et j'aime des challenges.
            </Text>
            <div>
              <Circle style={{ backgroundColor: 'var(--purple)' }} />
              <Circle style={{ backgroundColor: 'var(--pink)' }} />
              <Circle style={{ backgroundColor: 'var(--black)' }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default index;

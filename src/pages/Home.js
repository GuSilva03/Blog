import React from 'react'
import {PaddingContainer, FlexContainer, Heading, ParaText, IconContainer} from '../Styles/GlobalStyles';
import {BsGithub, BsInstagram, BsLinkedin,BsTwitterX} from 'react-icons/bs';
import { ShowCaseParticle, CaseImage, HeroContent, HeroContainer, ImgCard, MyIcon, Particle } from './HomeStyles';
import PersoIcon from '../imagens/PersoIcon.png';
import stars from '../imagens/stars.png';
function Home() {
  return (
   <PaddingContainer id='Home' left='3%' right='10%' top='15%' bottom='10%'>
    <FlexContainer align='center' fullWidthChild>
        <HeroContainer>
        <HeroContent>
            <Heading size='h2' as='h1' top='0.5rem' bottom='0.4rem'>Hello World! Me Chamo Gustavo!</Heading>
            <Heading size='h4' as='h2'> Frontend Developer | Transformando ideias em realidade</Heading>
            <ParaText as='p' top='1.3rem' bottom='2rem'> Comecei estudando programção pelo IFAL e hoje estou em busca de oportunidades profissionais!</ParaText>
            <FlexContainer gap='20px' >
                <IconContainer size='2rem' href='https://www.linkedin.com/in/andgustavosilva/' target='_blank' color='white'><BsLinkedin/></IconContainer>
                <IconContainer size='2rem' href='https://github.com/GuSilva03' target='_blank' color='white'><BsGithub/></IconContainer>
                <IconContainer size='2rem' href='https://www.instagram.com/imgustavosilva_/' target='_blank' color='white'><BsInstagram/></IconContainer>
                <IconContainer size='2rem' href="https://x.com/ImmGustavoSilva" target='_blank' color='white'><BsTwitterX /></IconContainer>
            </FlexContainer>
        </HeroContent>
        <ShowCaseParticle justify='flex-end'>
            <ImgCard>
                <CaseImage>
                    <MyIcon src={PersoIcon} alt='me'/>
                </CaseImage>
            </ImgCard>
            <Particle src={stars} alt='stars' top='-7.2rem' left='9rem' right='' rotate='60deg'/>
            <Particle src={stars} alt='stars' top='7rem' left='' right='-10rem' rotate='10deg'/>
        </ShowCaseParticle>
        </HeroContainer>
    </FlexContainer>
   </PaddingContainer>
  )
}

export default Home

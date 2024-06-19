import React from 'react'
import { Container, Content, LeftPerson, RightPerson, Links, Slot } from './FooterStyles'
import PersoIcon from '../../imagens/PersoIcon.png';
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram } from 'react-icons/bs';
function Footer() {
  return (
    <Container id='Footer'>
        <LeftPerson src={PersoIcon}/>
        <Content justify='center' align='center'>OBRIGADO POR VISITAR!
            <Links>
            <Slot href='https://www.linkedin.com/in/andgustavosilva/

' target='_blank'><BsLinkedin/></Slot>
            <Slot href='https://github.com/GuSilva03' target='_blank'><BsGithub /></Slot>    
            <Slot><BsInstagram/></Slot>  
            <Slot href="https://x.com/ImmGustavoSilva" target='_blank'><BsTwitterX/></Slot>  
                
            </Links>
        </Content>
                
        <RightPerson src={PersoIcon}/>
    </Container>
  )
}

export default Footer;

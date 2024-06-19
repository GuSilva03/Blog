import React from 'react'
import {Container, MobileMenu, MobLinks, MobMenu, MobileButton, MobLogo, CloseIcon, Header} from './MobStyles';
import { IoClose } from 'react-icons/io5';
import Logo from '../../imagens/Logo.png';
import { NavLinks } from '../Data/ProjectData';
function MobNav({menuVisible, setMenuIsVisible}) {
  return (
    <MobileMenu menuVisible={menuVisible}>
        <Container>
            <Header>
                <MobLogo src={Logo}/>
                <CloseIcon onClick={() => setMenuIsVisible(false)}><IoClose/></CloseIcon>
            </Header>
            <MobMenu>
                {NavLinks.map((link) => (
                  <MobLinks key={link.id} href={`#{link.href}`} onClick={() => setMenuIsVisible(false)}>{link.name}</MobLinks>
                ))}
                <MobileButton>CLIQUE AQUI!</MobileButton>
            </MobMenu>
        </Container>
    </MobileMenu>
  )
}

export default MobNav;

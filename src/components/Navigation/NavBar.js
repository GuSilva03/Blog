import React from "react";
import { NavWrapper, NavButton, NavContent, NavItem, NavLogo, NavMenu, NavMenuButton, } from "./NavElements";
import Logo from '../../imagens/Logo.png';

import {FaBars} from "react-icons/fa";
const NavBar = () => {
    return(
        <>
            <NavWrapper>
                <NavContent>
                    <NavLogo src={Logo}/>
                        <NavMenu>
                            <NavItem>
                                HOME
                            </NavItem>
                            <NavItem>
                                CONTATOS
                            </NavItem>
                            <NavItem>
                                PROJETOS
                            </NavItem>
                            <NavItem>
                                SKILLS
                            </NavItem>
                            <NavButton onClick={() => {}}>
                                CLIQUE AQUI!
                            </NavButton>
                        </NavMenu>
                        <NavMenuButton onClick={()=>{}}><FaBars/></NavMenuButton>
                    </NavContent>
                </NavWrapper>
        </>
    )
}
export default NavBar;
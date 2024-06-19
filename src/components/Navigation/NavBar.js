import React, { useEffect, useState } from "react";
import { NavWrapper, NavContent, NavLinks, NavLogo, NavMenu, MobIcon} from "./NavElements";
import Logo from '../../imagens/Logo.png';
import {FaBars} from "react-icons/fa";
const NavBar = ({setMenuIsVisible}) => {
/*const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const onScroll = () => {
       window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
    })*/
    return(
        <>
            <NavWrapper>
                <NavContent >
                    <NavLogo id='#Home' src={Logo}/>
                    <MobIcon  onClick={() => setMenuIsVisible(true)}><FaBars/></MobIcon>
                        <NavMenu>
                            <NavLinks href="#Home">
                                HOME
                            </NavLinks>
                            <NavLinks href='#Skills'>
                                 Skills
                            </NavLinks>
                            <NavLinks href='#Projects'>
                                 Projects
                            </NavLinks>
                            <NavLinks href='#Contacts'>
                                 Contacts
                            </NavLinks>
                        </NavMenu>
                    </NavContent>
                </NavWrapper>
        </>
    )
}
export default NavBar;

import styled from "styled-components";

export const NavWrapper = styled.div`
    background: rgba(0,0,0, 0.1);
    padding:0.4rem 0;
    
    top: 0;
    z-index: 5 !important;
    backdrop-filter: blur(50px);
    @media screen and (max-width: 1325px){
        padding: 0 2rem;
    }
    
`
export const NavLogo = styled.img`
    width: 12rem;
    height: auto;
    cursor: pointer;
    @media screen and (max-width: 425px){
        width: 10rem;
        height: auto;
    }
`
export const NavContent = styled.div`
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin: auto;

`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    @media screen and (max-width: 769px){
        display: block;
    }
`
export const NavLinks = styled.a`
    margin: 0 2rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff;
    position: relative;
    cursor: pointer;
    &::before{
        content: "";
        width: 2rem;
        height: 0.2rem;
        background: linear-gradient(90deg,#a993fe 0%, #7e61e7 100%);
        border-radius: 0.5rem;
        position: absolute;
        bottom: -0.6rem;
        opacity: 0;
        transform: translateX(-1.5rem);
        transition: all 0.3s ease;
    }
    &:hover::before{
        width: 100%;
        transform: translateX(0);
        opacity: 1;
    }
    @media screen and (max-width: 769px){
        display: none;
    }
`
export const NavButton = styled.button`
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(90deg, #a993fe 0%, #7e61e7 100%);
    padding: 0.6rem 3rem;
    border: none;
    outline: 1.5px solid transparent;
    border-radius: 0.2rem;
    cursor: pointer;
    transition: all 0.3 ease;
    &:hover{
        color: #a993fe;
        background: #000;
        outline: 1.5px solid #a993fe;
    }
    @media screen and (max-width: 769px){
        display: none;
    }
`
export const MobIcon = styled.nav`
    font-size: 1.8rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 0.4rem;
    background: linear-gradient(90deg, #a993fe -0.13%, #7e61e7 99%.87);
    line-height: 0;
    transition: all 0.4s ease;
    display: none;
    &:hover{
        color: #a993fe;
        background: #000;
        border: 1px solid #a993fe; 
    }
    @media screen and (max-width: 769px){
        display: block;
    }
`
export const NavMenuButton = styled.button`
    font-size: 1.1rem;
`
export const Men = styled.div`
    background-color: white;
    width: 30px;
`
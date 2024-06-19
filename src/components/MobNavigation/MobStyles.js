import styled, {css} from "styled-components";
import { IoClose } from "react-icons/io5";
export const MobileMenu = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1 !important;
    box-shadow: 0px 29px 80px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    transform: translateX(-100vw);
    pointer-events: none;
    ${({menuVisible}) => menuVisible && css`
        pointer-events: auto;
        transform: translateX(0vw);
        `
    }
`
export const Container = styled.section`
    width: 100vw;
    height: 125vw;
    background-color: #342864;
    padding: 2rem;
`
export const MobLogo = styled.img`
    width: 12rem;
    height: auto;
    cursor: pointer;
    margin-bottom: 3rem;

`
export const MobLinks = styled.a`
    color:#fff;
    margin: 0 1.5rem;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: #fff;
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
`
export const MobMenu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    margin-left: -2rem;
`
export const MobileButton = styled.button`
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content:center;
    color: #fff;
    background: linear-gradient(99deg, #a993fe 0%, #7e617e 100%);
    padding: 0.6rem 0.2rem;
    border: none;
    outline: 1.5px solid transparent;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover{
        color: #a993fe;
        background: #000;
        outline: 2px solid #a993fe;
    }
`
export const CloseIcon = styled(IoClose)`
    width: 3rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
import styled from "styled-components";

export const TechStackCard = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.color.secondary};
    color: #fff;
    padding: 1.5rem 2.3rem;
    border-radius: 5px; 
    width: 6rem;
    height: 2rem;
    font-size: 2rem;
    justify-content: center;
    margin-bottom: 1rem;
    align-items:center;
    cursor: pointer;
    &:hover{
        background-color: #658421;
        transition: 0.3s ease-in-out;
    }
    
`
export const ProjectImageContainer = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
`
export const ProjectImage = styled.img`
    border: 1px solid #fff;
    width: 80%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 2rem;
    margin-top: 2.5rem;
`
export const Card = styled.div`
    display: flex;
    flex-direction:column;
    flex-wrap: nowrap;
    background: linear-gradient(135.9deg, rgb(109, 25, 252) 16.4%, rgb(125, 31, 165) 56.1%);
    padding-bottom: 2rem;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
   
`
export const Button = styled.a`
    display: flex;  
    width: max-content;
    padding: 1rem 2rem;
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.purple};
    border: 1px solid ${({theme}) => theme.color.gay};
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    &:hover{
        color: ${({theme})=> theme.color.purple};
        background-color: ${({theme}) => theme.color.black};
        outline: 1.5px solid #a993fe;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #4B0082;
    align-items: center;
    justify-content: center;
    padding-top: 2em;
    border-radius: 4px;
    margin-top: 2em;
`
export const LeftPerson = styled.img`
    width: 16.5em;
    margin-top: 7px;
    margin-bottom: 20px;
`
export const RightPerson = styled.img`
    width: 16.5em;
    margin-top: 7px;
    margin-bottom: 20px;
    margin-left: 2em;
`
export const Content = styled.h1`
    text-decoration: underline;
    padding: 2em;
    padding-left: 5em;
    padding-right: 5em;
    padding-bottom: 2em;
`
export const Links = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
export const Slot = styled.a`
    color: #fff;
    cursor: pointer;
    padding: 5px;
    &:hover{
        background: #a993fe;
        color: #060417;
        border-radius: 5px;
    }
`
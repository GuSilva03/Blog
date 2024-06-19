import styled from "styled-components";
export const ContactForm = styled.form`
    width: 60%;

`
export const FormLabel = styled.p`
    color: ${({theme}) => theme.color.para_text_color};
    padding-bottom: 20px;
    
`
export const FormInput = styled.input`
    width: 100%;
    background-color: ${({theme}) => theme.color.purple};
    border: 3px solid ${({theme}) => theme.color.para_text_color};
    color: ${({theme}) => theme.color.black};
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 2em;
    font-size: 1em;
    &::placeholder{
        color: ${({theme}) => theme.color.white};
    }
`

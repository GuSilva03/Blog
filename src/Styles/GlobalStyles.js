import styled from "styled-components";

export const MainBody = styled.div`
    background-color: ${({theme}) => theme.color.primary};
    height: 50px;
    width: 100%;
`
export const theme = {
    color: {
        primary: '#060417',
        light: '#fffafa',
        secondary: '#4B0082',
        white: '#fff',
        black: '#000',
        purple: '#a993fe',
        para_text: '#dcdcdc',
    },
    fonts: {
        family: 'Bebas Neue',
        weight: {
            regular: 400,
            medium: 500,
            bold: 700,
        }
    },
    breakpoint: {
        mobile: '720px',
    }
}
export const Container = styled.div`
    width: 90%;
    max-width: 1480px;
    margin: auto;
`
export const PaddingContainer = styled.div`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left}) => left};
    padding-right: ${({right}) => right};

`
export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    gap: ${({gap}) => gap};
    flex-direction: ${({direction}) => direction};
    & > div {
        flex: ${({fullWidthChild}) => fullWidthChild && 1}
    }
    @media(max-width:  ${({theme}) => theme.breakpoint.mobile}){
        display: ${({responsiveFlex}) => responsiveFlex ? 'flex' : 'block'}
    }
`
export const Heading = styled(PaddingContainer)`
    color: ${({theme}) => theme.color.white};
    text-align: ${({align}) => align};
    font-size: ${({size}) => {
        switch(size){
            case 'h1':
                return '3.5rem';
            case 'h2':
                return '3rem';
            case 'h3':
                return '2rem';
            case 'h4':
                return '1.2rem';
            case 'h5':
                return '0.7rem';
            default:
                return;
        }
    }};

`
export const ParaText = styled(PaddingContainer)`
    color: ${({theme}) => theme.color.para_text_color};
    line-height: 2rem;
    font-size: 1.5rem;
`
export const Button = styled.button`
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
export const IconContainer = styled.a`
    font-size: ${({size}) => size};
    cursor: pointer;
    padding: 5px;
    &:hover{
        background: #a993fe;
        color: #060417;
        border-radius: 5px;
    }
    color: ${({color, theme}) => {
        switch(color){
            case "white":
                return theme.color.white;
            case 'blue':
                return theme.color.secondary;
            default:
                return;
        }
    }}
`


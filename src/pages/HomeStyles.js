import styled from "styled-components"

export const ShowCaseParticle = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 5rem;
    margin-right: 4rem;
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50%{
            transform: translate(0, 10px);
        }
        100%{
            transform: translate(0, -0px);
        }
    }

`
export const CaseImage = styled.div`
    margin-left: 4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    animation-name: floating;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @keyframes floating {
        0% {
            transform: translate(0, 0px);
        }
        50%{
            transform: translate(0, 10px);
        }
        100%{
            transform: translate(0, -0px);
        }
    }
`
export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    &::after, &::before{
        content:"";
        width: 32.125rem;
        height: 32.125rem;
        border-radius: 28.125rem;
        background: #7c66e3;
        position: absolute;
        z-index: -1;
        filter: blur(220px);
    };
    &::after{
        top: 4rem;
        left: 12rem;
    }
    &::before{
        bottom: 3rem;
        right: 8rem;
    }
    @media screen and(max-width: 768px){
        flex-direction: column;
        &::before, &::after{
            content: "";
            width: 14rem;
        }
        &::after{
            top: 2rem;
            left: -3rem;
        }
        &::before{
            bottom: 2rem;
            right: 0rem;
        }
    }
`;
export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;

`
export const ImgCard = styled.div`
    width: 7rem;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover{
        transform: translateY(-0.5rem);
    }
`
export const MyIcon = styled.img`
    margin-left: 8rem;
    width: 35rem;
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover{
        transform: translateY(-0.5rem);
    }
`
export const Particle = styled.img`
    position: absolute;
    width: 6rem;
    top: ${({top}) => top};
    left: ${({left}) => left};
    right: ${({right}) => right};
    bottom: ${({bottom}) => bottom};
    transform: rotate(${({rotate}) => rotate})
`
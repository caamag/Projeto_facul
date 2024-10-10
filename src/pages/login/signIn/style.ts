import styled, { keyframes } from "styled-components";

export const SignInContainer = styled.div`
    width: 50%;
    height: 400px;

    background-color: white;

    h1{
        font-size: 32px;
        font-weight: 400;
    }

    p{
        font-size: 14px;
        color: rgb(150,150,150);
    }
`

export const CreateAccount = styled.p`
    span{
        color: #3e77b6;
        margin-left: 10px;
        cursor: pointer;
    }
`

const loadingAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const SignIn = styled.p`
    span{
        color: #3e77b6;
        margin-left: 10px;
        cursor: pointer;
    }
`

export const LoaderContainer = styled.div`
    width: 400px;
    text-align: center;
`

export const Loader = styled.img`
    width: 30px;
    height: auto;
    margin: 0 auto;
    animation: ${loadingAnimation} 400ms linear infinite;
`
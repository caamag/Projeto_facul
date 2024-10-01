
import styled from "styled-components";

export const Logincontainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
`

export const LoginDesign = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-color: rgb(240,240,240);
    display: flex;
    align-items: end;
`

export const DesignBlock = styled.div`
    width: 100%;
    height: 50%;
    background-color: rgb(240,240,240, 0.8);
    z-index: 3;
`

export const DesignCircle = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;

    width: 250px;
    height: 250px;
    border-radius: 100%;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    background-color: #3e77b6;
    z-index: 2;
`

export const Login = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    label{
        font-size: 14px;
    }

    input {
        width: 400px;
        height: 30px;
        padding: 10px;
        border-radius: 5px;
        border: solid 1px rgb(200,200,200, 0.5);
        margin: 10px 0px;
        font-size: 18px;
        color: rgb(150,150,150);
    }

    input:focus{
        outline: none;
    }

    input::placeholder{
        color: rgb(200,200,200);
    }

    button{
        width: 422px;
        background-color: #3e77b6;
        color: white;
        padding: 10px;
        font-size: 18px;
        font-weight: 400;
        border-radius: 5px;
        margin: 20px 0px;
    }
`;
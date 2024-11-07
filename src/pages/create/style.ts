import styled from "styled-components";

export const CreateContainer = styled.div`
    width: 100%;

    h1{
        text-align: center;
        font-weight: 400;
        font-size: 30px;
        margin-top: 40px;
        color: #3e77b6;
    }

    h2{
        text-align: center;
        font-weight: 400;
        color: #3e77b6;
    }
`

export const createForm = styled.form`
    width: 60%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 100%;
        padding: 15px;
        border: solid 1px gray;
        font-size: 16px;
        margin-bottom: 20px;
    }

    textarea {
        width: 100%;
        padding: 15px;
        border: 1px solid gray;
        font-size: 16px;
        min-height: 100px;
        resize: none;
        margin-bottom: 20px;
    }

    button{
        width: 100%;
        padding: 15px 20px;
        background-color: white;
        font-size: 16px;
        transition: 150ms;
        border: 1px solid rgb(40,40,40);
        color: rgb(40,40,40);

        &:hover{
            background-color: rgb(40,40,40);
            color: white;
        }
    }
`

import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid rgb(40,40,40);

    a{
        font-size: 18px;
        color: black;
        text-decoration: none;
        padding: 10px;
        transition: 250ms;
    }

    .active {
        background-color: rgb(40,40,40);
        color: white;
    }

    button{
        background-color: white;
        padding: 10px 25px;
        font-size: 18px;
        border: solid 1px rgb(40,40,40);
        transition: 150ms;

        &:hover{
            background-color: rgb(40,40,40);
            color: white;
        }
    }
`;
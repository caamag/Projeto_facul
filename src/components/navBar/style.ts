
import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
        font-size: 18px;
        color: #3e77b6;
        text-decoration: none;
        padding: 10px;
        transition: 250ms;
    }

    .active {
        background-color: #3e77b6;
        color: white;
    }

    button{
        background-color: white;
        padding: 10px 25px;
        font-size: 18px;
        border: solid 1px #3e77b6;
        transition: 150ms;
        color: #3e77b6;

        &:hover{
            background-color: #3e77b6;
            color: white;
        }
    }
`;

import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100vh;
`

export const SearchContainer = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;

    h1 {
        text-align: center;
        font-weight: 400;
        font-size: 30px;
        margin-top: 40px;
    }

    p {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
    }
`

export const Search = styled.div`
    width: 50%;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-items: center;

    border: solid 1px rgb(230, 230, 230);
    border-radius: 5px;

    img {
        width: 20px;
        height: auto;
        margin: 0px 15px;
        filter: invert(70%);
    }

    input {
        color: #bebebe;
        border: none;
        font-size: 16px;
        height: 100%;
        width: 90%;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #bebebe;
        }
    }
`

export const RevenuesContainer = styled.div`
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
`

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
        color: #3e77b6;
    }

    p {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        color: #3e77b6;
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
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const Revenue = styled.div<{ isSearched: boolean }>`
    width: 300px;
    height: 350px;
    border: solid 1.5px gray;
    border-radius: 15px;
    margin-bottom: 30px;
    display: ${(p) => p.isSearched ? 'block' : 'none'};

    button {
        width: 280px;
        height: 50px;
        margin-top: 10px;
        background: none;
        margin-left: 10px;
        border: 1px solid rgb(40,40,40);
        border-radius: 10px;
        font-size: 16px;
        transition: 150ms;

        &:hover {
            background: rgb(40,40,40);
            color: white;
        }
    }
`

export const RevenueContent = styled.div`
    position: relative;

    width: 270px;
    height: 250px;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 15px;
    background-color: #3e77b6;
    padding: 10px;

    img {
        width: 38px;
        height: auto;
        position: absolute;
        top: 10px;
        right: 10px;
        filter: invert(100%);
    }

    h2 {
        margin-top: 50px;
        color: white;
        font-size: 30px;
        font-weight: 400;
        text-align: center;
    }
`

export const RevenueDate = styled.div`
    width: 60%;
    height: 30px;
    background-color: white;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`
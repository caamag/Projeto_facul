import styled from "styled-components";

export const RevenueDataContainer = styled.div`
    width: 50%;
    height: auto;
    margin: 0 auto;
    margin-top: 100px 0px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 30px;
    position: relative;
    overflow-y: auto;
    text-align: center;

    h2 {
        font-size: 30px;
        font-weight: 350;
        margin-top: 20px;
    }

    h3 {
        font-size: 20px;
        font-weight: 350;
        margin-top: 20px;
        text-align: left;
    }

    p {
        text-align: left;
        font-size: 16px;
    }

    img {
        border-radius: 10px;
        margin-top: 30px;
        max-width: 50%;
        height: auto;
    }
`

export const CloseBtn = styled.button`
    position: absolute;
    background: black;
    border: none;
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    right: 30px;
    top: 20px;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
`
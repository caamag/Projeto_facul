import styled from "styled-components";

export const CommunityContainer = styled.div`
  width: 100%;

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
`;

export const PresentationSection = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const PresentationText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 20px;
    color: #3e77b6;
    font-weight: 400;
    text-align: left;
  }

  p {
    color: black;
    margin-top: 10px;
    text-align: justify;
    text-indent: 15px;
    max-width: 90%;
  }
`;

export const PresentationImage = styled.div`
  width: 45%;

  img {
    width: 90%;
    height: auto;
    border-radius: 10px;
  }
`;

export const InviteContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 50%;
    padding: 10px 40px;
    border: 1px solid black;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
  }

  button {
    background-color: #3e77b6;
    color: white;
    padding: 10px 40px;
    font-size: 16px;
    margin: 10px 0px;
  }
`;

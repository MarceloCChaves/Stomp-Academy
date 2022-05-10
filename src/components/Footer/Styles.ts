import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #6164ff;
  text-align: center;
  width: 100%;

  .social-medias {
    display: flex;
    flex-direction: initial;
    justify-content: space-around;
  }

  div {
    display: flex;
    flex-direction: column;
    strong {
      color: #fff;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: 400;
      margin-top: 70px;
    }

    hr {
      width: 50px;
      margin-top: 30px;
    }

    div {
      padding: 40px;
      @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
      }
    }

    p,
    a {
      font-weight: 200;
      font-size: 12;
      font-family: "archivo black", sans-serif;
      color: #fff;
    }

    span {
      text-align: center;
      color: #fff;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 20px;
    }
  }
`;

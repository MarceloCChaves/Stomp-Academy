import styled from "styled-components";

export const Container = styled.div`
  strong {
    color: #f7f7f7;
    font-family: "archivo black", sans-serif;
    font-size: 42px;
    font-weight: 400;
    margin-top: 70px;
    text-align: center;
  }

  hr {
    width: 50px;
    margin: 50px;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: #f7f7f7;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 24px;
  }

  span {
    color: #a4a4a4;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
`;
export const Landing = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 20px;
    margin-bottom: 30px;
  }
  p {
    color: #f7f7f7;
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    font-weight: 400;
    margin-top: 30px;
  }
  span {
    color: #a4a4a4;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
  }
  input[type="text"],
  input[type="tel"],
  input[type="email"],
  .choose-file,
  textarea {
    display: flex;
    justify-content: space-between;
    border: 2px solid #f1f1f1;
    background: #6164ff;
    color: #fff;
    margin: 20px;
    padding: 20px;
    outline: none;
    width: 100%;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;

    ::placeholder {
      color: #fff;
      font-family: "Montserrat", sans-serif;
    }
  }
  button {
    width: 95%;
    padding: 20px;
    border-radius: 8px;
    background: #41B883;
    color: #fff;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    transition: 0.5s linear;

    :hover {
      filter: brightness(90%);
    }

    :disabled {
      cursor: not-allowed;
      filter: brightness(70%);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #6164ff;

  strong {
    color: #fff;
    font-family: 'archivo black', sans-serif;
    font-size: 42px;
    font-weight: 400;
    margin-top: 70px;
  }

  hr {
    width: 50px;
    margin-top: 30px;
  }

  p{
    padding: 40px;
    text-align: center;
    width: 1350px;
    max-width: 100%;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 26px;
  }
`
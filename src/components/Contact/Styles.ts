import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  strong {
    color: #f7f7f7;
    font-family: 'archivo black', sans-serif;
    font-size: 42px;
    font-weight: 400;
    margin-top: 70px;
    text-align: center;
  }

  hr {
    width: 50px;
    margin-top: 30px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  p {
    color: #f7f7f7;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
  }

  span {
    color: #a4a4a4;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding-top: 10px;
  }

  .openDate {
    color: #fff;
  }

  a {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 24px;
    text-decoration: none;
    background: #6164ff;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    cursor: pointer;
    transition: 0.5s linear;

    :hover {
      filter: brightness(90%);
    }
  }
`
export const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 780px;
  max-width: 100%;
  margin: 0 auto;
`
import styled from "styled-components";

export const Container = styled.div`
  strong {
    color: #6164ff;
    font-family: 'archivo black', sans-serif;
    font-size: 42px;
    font-weight: 400;
    margin-top: 70px;
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
`
export const Landing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const Owner = styled.div`

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    margin: 30px;
  }
  .character {
    img {
      width: 50%;
      border-radius: 50%;
    }
  }
  p{
    color: #f7f7f7;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 400;
    margin-top: 30px;
  }
  span{
    color: #a4a4a4;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
  }
`
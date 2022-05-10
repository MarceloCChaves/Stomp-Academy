import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url('https://s2.glbimg.com/qACG8EK4Pg2ZwXdWokpwUEIuyEE=/0x0:640x360/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/S/1/19P1v9TBigoQ13EeIvJw/lol.com-.banner.article.f2protation.11june2018.en-.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;
  margin-top: 70px;

  div {
    text-align: center;
    background: #161616;
    width: 700px;
    max-width: 100%;
  }

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
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 26px;
  }
`
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;  
  height: 600px;
  max-height: 100%;
  display: flex;
  justify-content: space-around;
  background: url("https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8979808f7798ecf5/6216ee875fe07272a8a2447a/2021_Key_art.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;

  @media (max-width: 767px){
    height: 100px;
  }
  .Logo {
    padding: 15px 0;
  }
  @media (max-width: 767px){
    background: #222222;
    opacity: 0.6;
    .Logo {
      position: absolute;
      right: 25%;
      top: 0;
      padding: 0;
    }
  }
`
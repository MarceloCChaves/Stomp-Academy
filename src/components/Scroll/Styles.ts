import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  height: 50px;
  width: 50px;
  font-size: 50px;
  background: #41B883;
  cursor: pointer;
  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s linear;

  :hover{
    filter: brightness(90%);
  }
`
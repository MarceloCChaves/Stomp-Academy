import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Custom = {
  open?: Boolean
}

const Ul = styled.ul<Custom>`
  display: flex;
  font-family: 'Montserrat', sans-serif;

  strong, hr{
    display: none;
  }
  
  @media(max-width: 768px){
    flex-flow: column nowrap;
    background-color: #161616;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    padding: 5rem 1rem;
    gap: 10px;
    transition: transform 0.3s ease-in-out;

    strong, a, hr {
      display: flex;
      color: #fff;
      text-decoration: none;
    }
  }
`

export default function RightNav({ open }: any) {
  return (
    <Ul open={open}>
      <strong><Link to="/">PÁGINA INICIAL</Link></strong>
      <hr/>
      <strong><Link to="/Contato">CONTATO</Link></strong>
    </Ul>
  )
}

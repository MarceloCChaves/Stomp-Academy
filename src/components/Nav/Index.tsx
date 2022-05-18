import { Nav } from "./Styles";
import Logo from "../../assets/Logo.webp";
import Burguer from "../Burguer/Index";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  const Title = styled.strong`
  display: flex;
  padding: 40px;
  font-family: 'Montserrat', sans-serif;

  a{
    color: #fff;
    text-decoration: none;
  }
  
  @media(max-width: 768px){
    display: none;
    color: #fff;
  }
`
  const NavItems = styled.nav`
    display: flex;
  `

  return (
    <div>
      <Nav>
        <div className="Logo">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>
        <Burguer />
        <NavItems>
          <Title><Link to="/">PÁGINA INICIAL</Link></Title>
          <Title><Link to="/Contato">CONTATO</Link></Title>
          <Title><Link to="/Time">LINEUPS</Link></Title>
        </NavItems>
      </Nav>
    </div>
  );
}

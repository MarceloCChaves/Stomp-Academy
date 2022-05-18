import { Container } from "./Styles";
import Lineup from "../../assets/Lineup.png";

export default function LineUp() {
  return (
    <Container>
      <strong>Nossas Lineups</strong>
      <hr />
      <img src={Lineup} alt="line-up" loading="lazy" />
    </Container>
  );
}

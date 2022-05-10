import { Container } from "./Styles";

export default function Streams() {
  return (
    <Container>
      <strong>Lives</strong>
      <hr />
      <p>
        Acompanhe nosso manager e time durante o processo de treinamento e em
        campeonatos!
      </p>
      <iframe
        src="https://player.twitch.tv/?channel=omanager1&parent=https://stomp-academy.vercel.app/Contato"
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        height="600"
        width="1200"
      ></iframe>
    </Container>
  );
}

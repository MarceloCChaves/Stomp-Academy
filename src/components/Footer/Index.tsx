import { Container } from "./Styles";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export default function Countdown() {
  return (
    <Container>
      <div>
        <strong>CONTATO</strong>
        <div className="social-medias">
          <a
            href="https://www.instagram.com/stomp_academy/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram color="#fff" size={20} />
          </a>
          <a
            href="https://twitter.com/DanElManager"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaTwitter color="#fff" size={20} />
          </a>
        </div>
        <span>Stomp Academy - Stomp e-Sports</span>
        <div>
          <span>Copyright © 2022 Stomp Academy</span>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/MarceloCChaves"
              target={"_blank"}
              rel="noreferrer"
            >
              Marcelo Chaves
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

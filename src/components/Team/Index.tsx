import { Container, Owner, Title, Landing } from "./Styles";
import Dan from "../../assets/Profile/Dan.webp";
import Flex from "../../assets/Profile/Flex.webp";
import Lucas from "../../assets/Profile/Lucas.webp";
import Luidy from "../../assets/Profile/Luidy.webp";
import Henrique from "../../assets/Profile/Henrique.png";
import Maiara from "../../assets/Profile/Maiara.png";
import Beatriz from "../../assets/Profile/Beatriz.png";
import Phabio from "../../assets/Profile/Phabio.png";
import Marcelo from "../../assets/Profile/Marcelo.webp";

export default function Team() {
  return (
    <Container>
      <Title>
        <strong>Nossa Equipe</strong>
        <hr />
      </Title>
      <Landing>
        <Owner>
          <section>
            <div className="character">
              <img src={Dan} alt="Dan" loading="lazy" />
            </div>
            <div>
              <p>Dan</p>
              <span>CEO - Manager</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Flex} alt="Flex" loading="lazy" />
            </div>
            <div className="info">
              <p>Gabriel</p>
              <span>Administração e contabilidade</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Lucas} alt="Lucas" loading="lazy" />
            </div>
            <div className="info">
              <p>Lucas</p>
              <span>Diretor de comunicações e Designer de marca</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Henrique} alt="Henrique" loading="lazy" />
            </div>
            <div className="info">
              <p>Henrique</p>
              <span>Positional e Strategy Coach</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Luidy} alt="Luidy" loading="lazy" />
            </div>
            <div className="info">
              <p>Luidy</p>
              <span>Recursos Humanos</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Maiara} alt="Maiara" loading="lazy" />
            </div>
            <div className="info">
              <p>Maiara</p>
              <span>Diretora de Marketing e Mídias sociais</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Beatriz} alt="Beatriz" loading="lazy" />
            </div>
            <div className="info">
              <p>Beatriz</p>
              <span>Apoio nutricional</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Phabio} alt="Phabio" loading="lazy" />
            </div>
            <div className="info">
              <p>Phabio</p>
              <span>Consultor de e-Sports</span>
            </div>
          </section>
        </Owner>
        <Owner>
          <section>
            <div className="character">
              <img src={Marcelo} alt="Marcelo" loading="lazy" />
            </div>
            <div className="info">
              <p>Marcelo</p>
              <span>Desenvolvedor Web</span>
            </div>
          </section>
        </Owner>
      </Landing>
    </Container>
  );
}

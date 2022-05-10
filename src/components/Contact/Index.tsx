import { Container, Landing, Title } from "./Styles";

export default function Contact() {
  const date = new Date()
  const dateNow = date.getDay()
  return (
    <Container>
      <Title>
        <strong>Contato</strong>
        <hr />
      </Title>
      <Landing>
        <Title>
          <p>
            Entre em contato conosco em caso de dúvidas
          </p>
          <span>Nossos possíveis parceiros são importantes para nós. Ficaríamos contentes em receber seu contato durante nosso horário comercial.</span>
          <p style={{'marginTop': '50px'}}>
            Stomp Academy - Stomp e-Sports
          </p>
            <a style={{'marginTop': '30px'}} href="mailto:contato.stompa@gmail.com">
              Entrar em contato via email
            </a>
          <span>Ou se preferir, pelo discord</span>
          <span>DDan#2017, Maia#4404</span>
          <p style={{'margin': '30px'}}>Horário de funcionamento</p>
          <span className={dateNow === 1 ? 'openDate' : ''}>seg. 09:00 – 17:00</span>
          <span className={dateNow === 2 ? 'openDate' : ''}>ter. 09:00 – 17:00</span>
          <span className={dateNow === 3 ? 'openDate' : ''}>qua. 09:00 – 17:00</span>
          <span className={dateNow === 4 ? 'openDate' : ''}>qui. 09:00 – 17:00</span>
          <span className={dateNow === 5 ? 'openDate' : ''}>sex. 09:00 – 17:00</span>
          <span className={dateNow === 6 ? 'openDate' : ''}>sáb. Fechado</span>
          <span className={dateNow === 0 ? 'openDate' : ''}>dom. Fechado</span>
        </Title>
      </Landing>
    </Container>
  );
}

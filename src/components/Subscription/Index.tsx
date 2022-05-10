import { useState } from "react";
import { Container, Landing, Title } from "./Styles";
import { FaPaperclip } from "react-icons/fa";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Subscription() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleToast() {
    toast.info("Redirecionando para verificação em captcha", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Container>
      <Title>
        <strong>Estamos à procura de novos talentos!</strong>
        <hr />
      </Title>
      <Landing
        action="https://formsubmit.co/contato.stompa@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <p>Faça parte da nossa equipe</p>
          <span>
            Se você tiver interesse em nossas oportunidades de carreira,
            candidate-se aqui e anexe seu currículo.
          </span>
        </div>
        <div>
          <p>Candidatar-se agora</p>
          <input
            type={"text"}
            placeholder="Nome"
            name="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type={"tel"}
            placeholder="Telefone"
            name="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type={"email"}
            placeholder="Email"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="Mensagem"
            id=""
            cols={30}
            rows={10}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mensagem"
          ></textarea>
          <div className="choose-file">
            <label>
              <FaPaperclip />
              Anexar Arquivo(Opcional)
            </label>
            <input type="file" name="Currículo" accept=".pdf,.doc" />
          </div>
          <button
            type="submit"
            disabled={!name || !email || !phone || !message}
            onClick={handleToast}
          >
            Enviar candidatura
          </button>
        </div>
      </Landing>
    </Container>
  );
}

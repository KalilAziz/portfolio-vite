import { Container } from '../Container';
import { Footer } from './styles';
export const FooterComponent = () => {
  return (
    <>
      <Footer>
        <Container className="container">
          <div className="conteudo">
            <h1 className="gradientText">
              Sempre em <br /> busca do próximo passo.
            </h1>
            <p>
              Melhorar de forma contínua é o que busco a cada dia. Juntando o
              foco e a prática posso trazer as melhores experiências para meus
              clientes.
            </p>
            <div className="redesSociais">
              <a href="" target="_blank" className="">
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+5564984562437&text=Olá Kalil! te achei através de seu portfólio."
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <i className="uil uil-whatsapp"></i>
              </a>
              <a
                href="https://github.com/KalilAziz"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a href="">
                <i className="uil uil-envelope-share"></i>
              </a>
            </div>
          </div>
          <div className="contato">
            <div className="paginas">
              <h3>Páginas</h3>
              <ul>
                <li>Projetos</li>
                <li>Sobre mim</li>
                <li>Suporte</li>
              </ul>
            </div>
            <div className="contatos">
              <h3>Contato</h3>
              <ul>
                <li>Linkedin</li>
                <li>WhatsApp</li>
                <li>Github</li>
                <li>E-mail</li>
              </ul>
            </div>
            <div className="servico">
              <h3>Serviços</h3>
              <ul>
                <li>Sites em geral</li>
              </ul>
            </div>
          </div>
        </Container>
      </Footer>

      <div
        className="botton"
        style={{
          backgroundColor: '#080808',
          textAlign: 'center',
          padding: '20px',
          color: '#FFF',
        }}
      >
        <Container>
          <span>
            © Copyright 2021 por Kalil Aziz. Todos os direitos reservados.
          </span>
        </Container>
      </div>
    </>
  );
};

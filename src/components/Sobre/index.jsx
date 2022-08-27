import { Section } from './styles';
import { Link } from 'react-router-dom';
import { Container } from '../Container';
export const Sobre = () => {
  return (
    <Section>
      <Container className="container">
        <h1 className="gradientText">Sobre</h1>
        <div className="sobre">
          <div className="perfil">
            <img className="imageModelo" src="./image/modelo.jpeg" alt="" />
            <div className="redesSociais">
              <Link to="" target="_blank" className="">
                <i className="uil uil-linkedin-alt"></i>
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=+5564984562437&text=Olá Kalil! te achei através de seu portfólio."
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <i className="uil uil-whatsapp"></i>
              </Link>
              <Link
                to="https://github.com/KalilAziz"
                target="_blank"
                className=""
                rel="noreferrer"
              >
                <i className="uil uil-github-alt"></i>
              </Link>
              <Link to="">
                <i className="uil uil-envelope-share"></i>
              </Link>
            </div>
          </div>
          <div className="conteudo">
            <p>
              Meu nome é Kalil Aziz, tenho 20 anos e moro em Catalão - GO. Sou
              Desenvolvedor Front End, Cursando Ciências da Computação.
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo projetos web mais
              precisamente no Front-end, de modo a ampliar meus conhecimentos e
              assim aprimorar ainda mais as habilidades que possuo.
            </p>
            <Link className="link" to="/">
              Ver portfolio
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { Section } from './style';
export const ConteudoInicial = () => {
  return (
    <Section>
      <Container className="container">
        <img className="imageTop" src="./image/celular4.png" alt="" />

        <div className="conteudo">
          <h1 className="gradientText">
            DESENVOLVIMENTO DE APLICAÇÕES WEB E MOBILE
          </h1>
          <p>
            Aplicações completas, elegantes, com qualidade de código e
            otimizadas para o SEO.
          </p>

          <div className="contato">
            <Link className="link" to="/">
              Ver portfolio
            </Link>
            <Link className="link" to="/">
              Conhecer o dev
            </Link>
          </div>
        </div>

        <img className="imageBotton" src="./image/celular4.png" alt="" />
      </Container>
    </Section>
  );
};

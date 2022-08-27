import { Section } from './style';
import { Container } from '../Container';
import { Link } from 'react-router-dom';
export const ProjetoIndex = () => {
  return (
    <Section>
      <Container className="container">
        <h1 className="gradientText">Meu aprendizado em prática</h1>
        <Link className="link" to="/">
          Ver todos os projetos
        </Link>
      </Container>
    </Section>
  );
};

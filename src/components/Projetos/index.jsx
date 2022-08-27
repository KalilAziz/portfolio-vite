import Projeto from './Projeto';
import { Section } from './styles';
import { DataProjetos } from '../../Data/projetos';
import { Container } from '../Container';
/* eslint-disable */

export const Projetos = () => {
  return (
    <Section>
      <h1 className="gradientText">Meu aprendizado em prática</h1>
      <Container className="container">
        {DataProjetos.map((projeto) => {
          return (
            <Projeto
              key={projeto.id}
              id={projeto.id}
              nome={projeto.nome}
              imagem={projeto.imagem}
              descricao={projeto.descricacao}
              tecnologias={projeto.tecnologias}
              gitHub={projeto.gitHub}
              demo={projeto.demo}
            />
          );
        })}
      </Container>
    </Section>
  );
};

import Projeto from './Projeto';
import { Section } from './styles';
import { DataProjetos } from '../../Data/projetos';
import { Container } from '../Container';
import { useState } from 'react';
import { useEffect } from 'react';
/* eslint-disable */

export const Projetos = () => {
  const [post, setPost] = useState([]);
  const [postPerClick, setPostPerClick] = useState(3);

  const handleClick = () => {
    const post = DataProjetos.filter((value) => {
      if (value.id < postPerClick) return value;
    });
    console.log(post);
    setPost(post);
  };

  useEffect(() => {
    handleClick();
  },[postPerClick]);

  return (
    <Section>
      <h1 className="gradientText">Meu aprendizado em prática</h1>
      <Container className="container">
        {post.map((projeto) => {
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
      <Container>
        <button
          onClick={() => setPostPerClick((s) => s + 3)}
          className="MaisPost gradientText"
        >
          Mais projetos
        </button>
      </Container>
    </Section>
  );
};

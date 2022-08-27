import { useState } from 'react';
import Progresso from '../Progresso/Progresso';
import { Section } from './style';
import * as Data from '../../Data/qualificacao';
import { Container } from '../Container';

const stateInitialState = {
  graduacao: true,
  cursos: false,
  experiencia: false,
};

export const Qualificacoes = () => {
  // eslint-disable-next-line
  const [qualificIsVisible, setQualificIsVisible] = useState({
    ...stateInitialState,
  });

  return (
    <Section active={qualificIsVisible}>
      <Container>
        <h1 className="gradientText">Qualificações</h1>
        <Container className="container">
          <div className="buttons">
            <div>
              <div className="traco"></div>
              <button
                className="buttonGraduacao"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    graduacao: true,
                    cursos: false,
                    experiencia: false,
                  })
                }
              >
                Graduação
              </button>
            </div>
            <div>
              <div className="traco"></div>
              <button
                className="buttonCursos"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    graduacao: false,
                    cursos: true,
                    experiencia: false,
                  })
                }
              >
                Cursos
              </button>
            </div>
            <div>
              <div className="traco"></div>
              <button
                className="buttonExperiencia"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    graduacao: false,
                    cursos: false,
                    experiencia: true,
                  })
                }
              >
                Experiências
              </button>
            </div>
          </div>

          <div className="conteudo">
            {qualificIsVisible.graduacao && (
              <>
                {Data.Graduacao.map((curso) => {
                  return (
                    <Progresso
                      key={curso.id}
                      nome={curso.nome}
                      local={curso.local}
                      periodo={curso.periodo}
                      porcentagem={curso.porcentagem}
                    />
                  );
                })}
              </>
            )}

            {qualificIsVisible.cursos && (
              <>
                {Data.Cursos.map((curso) => {
                  return (
                    <Progresso
                      key={curso.id}
                      nome={curso.nome}
                      local={curso.local}
                      periodo={curso.periodo}
                      porcentagem={curso.porcentagem}
                    />
                  );
                })}
              </>
            )}

            {qualificIsVisible.experiencia && (
              <>
                {Data.Experiencia.map((curso) => {
                  return (
                    <Progresso
                      key={curso.id}
                      nome={curso.nome}
                      local={curso.local}
                      periodo={curso.periodo}
                      porcentagem={curso.porcentagem}
                    />
                  );
                })}
              </>
            )}
          </div>
        </Container>
      </Container>
    </Section>
  );
};

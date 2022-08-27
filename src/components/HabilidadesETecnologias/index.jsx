import { useState } from 'react';
import Progresso from '../Progresso/Progresso';
import { Section } from './style';
import * as Data from '../../Data/habilidadeETecnologia';
import { Container } from '../Container';
const stateInitialState = {
  frontEnd: true,
  cursos: false,
};

export const HabilidadesETecnologias = () => {
  // eslint-disable-next-line
  const [qualificIsVisible, setQualificIsVisible] = useState({
    ...stateInitialState,
  });

  return (
    <Section active={qualificIsVisible}>
      <Container>
        <h1 className="gradientText">Habilidades e Tecnologias</h1>
        <Container className="container">
          <div className="buttons">
            <div>
              <div className="traco"></div>
              <button
                className="buttonGraduacao"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    frontEnd: true,
                    backEnd: false,
                  })
                }
              >
                Front-end
              </button>
            </div>
            <div>
              <div className="traco"></div>
              <button
                className="buttonCursos"
                onClick={() =>
                  setQualificIsVisible({
                    ...qualificIsVisible,
                    frontEnd: false,
                    backEnd: true,
                  })
                }
              >
                Back-end
              </button>
            </div>
          </div>
          <div className="conteudo">
            {qualificIsVisible.frontEnd && (
              <>
                <Container>
                  {Data.FrontEnd.map((curso) => {
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
                </Container>
              </>
            )}

            {qualificIsVisible.backEnd && (
              <>
                <Container>
                  {Data.BackEnd.map((curso) => {
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
                </Container>
              </>
            )}
          </div>
        </Container>
      </Container>
    </Section>
  );
};

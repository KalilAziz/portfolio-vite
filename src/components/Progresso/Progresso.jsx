import { Section } from './styles';
// eslint-disable-next-line
const Progresso = ({ nome='', local='', periodo='', porcentagem=0 }) => {
  return (
    <Section porcent={porcentagem} periodo={periodo}>
      <div className="curso">
        <h2>{nome}</h2>

        {local && <p>{local}</p>}

        <div className="periodo">
          {periodo && <span> {periodo} </span>}
          {porcentagem && <span className="porcentagem">{porcentagem}%</span>}
        </div>

        {porcentagem && (
          <div className="progresso">
            <div className="porcentConclusao"></div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Progresso;

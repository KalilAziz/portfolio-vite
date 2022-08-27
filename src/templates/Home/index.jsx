import { ConteudoInicial } from '../../components/ConteudoInicial';
import { HabilidadesETecnologias } from '../../components/HabilidadesETecnologias';
import { Projetos } from '../../components/Projetos';
import { Qualificacoes } from '../../components/Qualificacoes';
import { Sobre } from '../../components/Sobre';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Section>
      <ConteudoInicial />
      <Sobre />
      <HabilidadesETecnologias />
      <Qualificacoes />
      <Projetos />
    </Styled.Section>
  );
};

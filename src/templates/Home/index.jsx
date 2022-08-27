import { ConteudoInicial } from '../../components/ConteudoInicial';
import { Qualificacoes } from '../../components/Qualificacoes';
import { Sobre } from '../../components/Sobre';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Section>
      <ConteudoInicial />
      <Sobre />
      <Qualificacoes />
    </Styled.Section>
  );
};

import { ConteudoInicial } from '../../components/ConteudoInicial';
import { ProjetoIndex } from '../../components/ProjetoIndex';
import { Qualificacoes } from '../../components/Qualificacoes';
import { Sobre } from '../../components/Sobre';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Section>
      <ConteudoInicial />
      <Sobre />
      <Qualificacoes />
      <ProjetoIndex />
    </Styled.Section>
  );
};

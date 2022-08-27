import { ConteudoInicial } from '../../components/ConteudoInicial';
import { Sobre } from '../../components/Sobre';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Section>
      <ConteudoInicial />
      <Sobre />
    </Styled.Section>
  );
};

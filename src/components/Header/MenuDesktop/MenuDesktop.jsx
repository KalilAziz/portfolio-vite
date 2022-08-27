import { useReducer } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Container } from '../../Container';
import { Header } from './style';
import { reducer } from '../reducer';
import { dirInicial } from '../data';

// eslint-disable-next-line
const MenuDesktop = ({ menuIsVisible, setMenuIsVisible }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, dirInicial);

  const { inicio, projeto, sobre, suporte } = state;
  return (
    <Header state={{ inicio, projeto, sobre, suporte }}>
      <Container
        inicio={inicio}
        projeto={projeto}
        sobre={sobre}
        suporte={suporte}
        className="container"
      >
        <Link className="link" to="/">
          <img src="./image/icon.png" alt="" />
        </Link>
        <nav>
          <ul>
            <li className="activeInicio">
              <Link
                className="link"
                to="/"
                onClick={() => dispatch({ ...state, type: 'inicio' })}
              >
                Início
              </Link>
            </li>
            <li className="activeProjetos">
              <Link
                className="link"
                to="/projetos"
                onClick={() => dispatch({ ...state, type: 'projetos' })}
              >
                Projetos
              </Link>
            </li>
            <li className="activeSobre">
              <Link
                className="link"
                to="/sobrenos"
                onClick={() => dispatch({ ...state, type: 'sobre' })}
              >
                Sobre
              </Link>
            </li>
            <li className="activeSuporte">
              <Link
                className="link"
                to="/suporte"
                onClick={() => dispatch({ ...state, type: 'suporte' })}
              >
                Suporte
              </Link>
            </li>
          </ul>
        </nav>
        <div className="button">
          <Link className="linkButton" to="/">
            Entrar em contato
          </Link>
        </div>
        {!menuIsVisible && (
          <div className="sgvMenu">
            <RiMenu3Fill
              size={45}
              onClick={() => setMenuIsVisible((v) => !v)}
            />
          </div>
        )}
      </Container>
    </Header>
  );
};

export default MenuDesktop;

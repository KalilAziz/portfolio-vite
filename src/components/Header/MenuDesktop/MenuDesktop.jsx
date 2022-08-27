import { RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { Container } from '../../Container';
import { Header } from './style';

// eslint-disable-next-line
const MenuDesktop = ({ menuIsVisible, setMenuIsVisible }) => {
  const diretorio = window.location.pathname;

  return (
    <Header diretorio={diretorio}>
      <Container className="container">
        <Link className="link" to="/">
          <img src="./image/icon.png" alt="" />
        </Link>
        <nav>
          <ul>
            <li className="activeInicio">
              <Link className="link" to="/">
                Início
              </Link>
            </li>
            <li className="activeProjetos">
              <Link className="link" to="/projetos">
                Projetos
              </Link>
            </li>
            <li className="activeSobre">
              <Link className="link" to="/sobrenos">
                Sobre
              </Link>
            </li>
            <li className="activeSuporte">
              <Link className="link" to="/suporte">
                Suporte
              </Link>
            </li>
          </ul>
        </nav>
        <Button>Entre em contato</Button>
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

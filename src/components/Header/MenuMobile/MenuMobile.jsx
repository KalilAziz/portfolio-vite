import { Header } from './style';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);
  return (
    <Header isVisible={menuIsVisible}>
      <IoClose
        className="sgv"
        size={45}
        onClick={() => setMenuIsVisible((v) => !v)}
      />
      <nav>
        <ul>
          <li className="activeInicio">
            <Link to="/">Início</Link>
          </li>
          <li className="activeProjetos">
            <Link to="/projetos">Projetos</Link>
          </li>
          <li className="activeSobre">
            <Link to="/sobrenos">Sobre</Link>
          </li>
          <li className="activeSuporte">
            <Link to="/suporte">Suporte</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MenuMobile;

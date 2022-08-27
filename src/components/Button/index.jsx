import P from 'prop-types';
import * as Styled from './styles.js';

const Button = ({ children, onClick }) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};

export default Button;

Button.propTypes = {
  children: P.string.isRequired,
  onClick: P.func,
};

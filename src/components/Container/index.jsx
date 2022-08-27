import P from 'prop-types';
import Scroling from './Scroling';
import * as Styled from './styles';

export const Container = ({ children, className }) => {
  return (
    <Scroling>
      <Styled.Div className={className}>{children}</Styled.Div>
    </Scroling>
  );
};
Container.propTypes = {
  children: P.node.isRequired,
  className: P.string,
};

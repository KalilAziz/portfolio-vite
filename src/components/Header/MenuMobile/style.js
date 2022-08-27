import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
  144deg,
  rgba(255, 98, 0, 0.8) 7%,
  rgba(55, 70, 227, 0.8) 100%
);
  backdrop-filter: blur(3px);
  padding: 0px 10px;
  color: white;

  opacity: 0;
  pointer-events: none;
  transform: translateY(40px);
  transition: 0.5s;


  ${({ isVisible }) =>
    isVisible &&
    css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    .sgv{
      transform: rotate(45deg);
    }
    nav ul{
      transform: scale(1.3)
  }
  `}

  .sgv{
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: 0.7s;
  }

  nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transition: 0.7s
  }

  nav ul li{
    display: inline-block;
  }
`;

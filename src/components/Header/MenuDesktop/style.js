import styled, { css } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(128, 128, 128, 0.5);

  .container {
    display: flex;
    justify-content: space-between;

    .link{
      display: block;
      display: flex;
      justify-content: space-between;

        img {
        width: 65px;
        height: 65px;
        display: block;
        margin: auto 0;
      }
    }

    nav ul {
      height: 100%;
      display: flex;
      align-items: center;
      height: 100px;

      li {
        display: inline-block;
        line-height: 80px;
        margin: 5px;
        padding: 10px;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 600;
        border-bottom: 5px solid rgba(0, 0, 0, 0);
        height: 100px;

        &:hover {
          color: white;
          border-bottom: 5px solid rgba(255, 98, 0, 1);
        }
      }
    }

    ${({ diretorio }) =>
      diretorio === '/'
        ? css`
            .activeInicio{
              color: white;
              border-bottom: 5px solid rgba(255, 98, 0, 1);
            }
        `
        : diretorio === '/projetos'
        ? css`
              .activeProjetos{
                color: white;
                border-bottom: 5px solid rgba(255, 98, 0, 1);
              }
            }
        `
        : diretorio === '/sobrenos'
        ? css`
              .activeSobre{
                color: white;
                border-bottom: 5px solid rgba(255, 98, 0, 1);
              }
            }
        `
        : diretorio === '/suporte'
        ? css`
              .activeSuporte{
                color: white;
                border-bottom: 5px solid rgba(255, 98, 0, 1);
              }
            }
        `
        : null}

    .sgvMenu{
      color: white;
      display: none;
    }

    @media (max-width: 720px) {
          nav, button{
            display: none;
          }
          .sgvMenu{
          display: flex;
          align-items: center;
        }
      }
}


  }
}
`;

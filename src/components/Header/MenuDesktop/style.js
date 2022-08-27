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
          border-bottom: 5px solid ${({ theme }) => theme.colors.ColorLaranja};
        }
      }
    }

    .button{
      display: flex;
      align-items: center;

      .linkButton {
          background: ${({ theme }) => theme.colors.BackgroundColorPrimary};
          height: 65px;
          border: 1px solid #000;
          border-radius: 10px;
          padding: 20px;
          color: ${({ theme }) => theme.colors.ColorLaranja};
          transition: 0.7s;
          font-size: 1.1rem;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

          &:hover {
            border: 1px solid white;
            color: white;
            background: ${({ theme }) => theme.colors.Gradient};
          }
        }
    }

    ${({ state }) =>
      state.inicio &&
      css`
            .activeInicio{
              color: white;
              border-bottom: 5px solid ${({ theme }) =>
                theme.colors.ColorLaranja};
            }
        `}

        ${({ state }) =>
          state.projeto &&
          css`
            .activeProjetos{
              color: white;
              border-bottom: 5px solid ${({ theme }) =>
                theme.colors.ColorLaranja};
            }
        `}

        ${({ state }) =>
          state.sobre &&
          css`
            .activeSobre{
              color: white;
              border-bottom: 5px solid ${({ theme }) =>
                theme.colors.ColorLaranja};
            }
        `}

        ${({ state }) =>
          state.suporte &&
          css`
            .activeSuporte{
              color: white;
              border-bottom: 5px solid ${({ theme }) =>
                theme.colors.ColorLaranja};
            }
        `}

    .sgvMenu{
      color: white;
      display: none;
    }

    @media (max-width: 720px) {
          nav, .button{
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

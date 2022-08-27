import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.BackgroundColorSecundary};

  .container {
    padding: 30px 0;
  }

  h1 {
    text-align: center;
    color: white;
    font-size: 40px;
  }

  .sobre {
    color: white;
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .perfil {
      max-width: 400px;

      .imageModelo {
        max-width: 350px;
        height: auto;
        border-radius: 20px;
        display: block;
      }
      .redesSociais {
        margin-top: 10px;
        font-size: 40px;
        display: flex;
        justify-content: space-evenly;

        i{
          color: ${({ theme }) => theme.colors.ColorLaranja};
          &:hover{
            transition: 0.7s;
            color: white;
          }
        }
      }
    }

    .conteudo {
      max-width: 400px;
      min-width: 300px;
      padding: 20px;

      p {
        margin-bottom: 45px;
      }
      .link {
          margin-right: 10px;
          border: 1px solid #000;
          border-radius: 10px;
          padding: 20px;
          color: ${({ theme }) => theme.colors.ColorLaranja};
          transition: 0.7s;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

          &:hover {
            border: 1px solid white;
            color: white;
            background: ${({ theme }) => theme.colors.Gradient};
          }
        }
    }
    @media (max-width: 720px) {
      .perfil {
        .imageModelo {
          max-width: 250px;
        }
        .redesSociais {
          margin-top: 10px;
          font-size: 20px;
        }
    }
        .conteudo {
          text-align: center;
        }
      }
  }

}


`;

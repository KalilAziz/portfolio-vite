import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.BackgroundColorPrimary};
  padding: 80px 0;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .conteudo {
      flex: 1;
      color: white;
      min-width: 350px;

      h1 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 10px;
      }
      p {
        color: #b7b7b7;
        margin-bottom: 40px;
      }

      .contato {
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
    }

    .imageBotton {
      flex: 1;
      width: 20vw;
      min-width: 350px;
      height: auto;
      object-fit: cover;
    }

    .imageTop {
      display: none;
      width: 50%;
    }

    @media (max-width: 720px) {
      .conteudo{
        h1{
          text-align: center;
          font-size: 30px;
        }
        p {
          text-align: center;
        }
      }

      .contato {
        text-align: center;
      }

      .imageTop {
        display: block;
      }
      .imageBotton {
        display: none;
      }
    }
  }
}
`;

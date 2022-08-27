import styled from 'styled-components';

export const Section = styled.section`
  background: #080808;

  .container {
    max-width: 1120px;
    margin: 0px auto;
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
      }
    }

    .conteudo {
      max-width: 400px;
      min-width: 300px;
      padding: 20px;

      p {
        margin-bottom: 25px;
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

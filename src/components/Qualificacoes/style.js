import styled, { css } from 'styled-components';

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.BackgroundColorPrimary};
    padding: 50px 0;
    h1{
      text-align: center;
      font-size: 40px;
      color: white;
      margin-bottom: 20px;
    }

    .container{
      color: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;

      .buttons{
        display: flex;
        flex-direction: column;
        margin-right: 30px;

         div{
          display: flex;

          .traco{
            background: rgba(255, 98, 0, 1);
            width: 4px;
            margin-right: 3px;
          }
          button{
            background: linear-gradient(144deg,rgba(255, 98, 0, 0.5) 7%,rgba(55, 70, 227, 0.5) 100%);
            width: 200px;
            height: 40px;
            color: white;
            border-radius: 8px;
          }

          ${({ active }) =>
            active.graduacao &&
            css`
          .buttonGraduacao{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}

          ${({ active }) =>
            active.cursos &&
            css`
          .buttonCursos{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}

          ${({ active }) =>
            active.experiencia &&
            css`
          .buttonExperiencia{
            background: linear-gradient(144deg,rgba(255, 98, 0, 1) 7%,rgba(55, 70, 227, 1) 100%);
          }`}
        }
      }


      .conteudo{
        flex: 1;
        min-width: 300px;
        padding: 0px 30px;

    }
    @media (max-width: 600px) {
        .buttons{
            margin: 0 auto;
          }
        .buttons div button{
            width: 350px;
          }
        .conteudo{
          margin: 30px 0;
        }
        }



`;

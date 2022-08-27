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
      padding: 20px;

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
            background: ${({ theme }) => theme.colors.GradientBorrado};
            width: 200px;
            height: 40px;
            color: white;
            border-radius: 8px;
          }

          ${({ active }) =>
            active.frontEnd &&
            css`
          .buttonGraduacao{
            background: ${({ theme }) => theme.colors.Gradient};
          }`}

          ${({ active }) =>
            active.backEnd &&
            css`
          .buttonCursos{
            background: ${({ theme }) => theme.colors.Gradient};
          }`}

          ${({ active }) =>
            active.experiencia &&
            css`
          .buttonExperiencia{
            background: ${({ theme }) => theme.colors.Gradient};
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

    }

`;

import styled from 'styled-components';
export const Section = styled.section`
  margin-bottom: 20px;
    .curso{
          p{
            margin-top: 10px;
            color: ${({ theme }) => theme.colors.FontColorSecundary};
          }
          .periodo{
            font-size: 0.8rem;
            color: ${({ theme }) => theme.colors.FontColorSecundary};
            display: flex;
            justify-content: ${({ porcent, periodo }) =>
              porcent && !periodo ? 'flex-end' : 'space-between'};

            .porcentagem{
              color: ${({ theme }) => theme.colors.FontColorPrimary};
              font-size: 1.5rem;
            }

          }

          .progresso{
            height: 13px;
            border-radius: 5px;
            background: ${({ theme }) => theme.colors.GradientBorrado};

              .porcentConclusao{
                  height: 100%;
                  width: ${({ porcent }) => porcent}%;
                  border-radius: 5px;
                  background: ${({ theme }) => theme.colors.Gradient};
                  }
            }
      }



`;

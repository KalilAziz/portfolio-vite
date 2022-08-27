import styled from 'styled-components';
export const Div = styled.div`

  background-color: #081B37;
  flex: 1;
  min-width: 300px;
  margin: 20px;
  box-shadow: 0px 4px 10px 5px #000000, inset 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
  color: white;

  img{
    width: 100%;
    border-radius: 10px;
    display: block;
    margin: 0 auto;

  }
  .conteudo{
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
      margin: 50px 0 ;
    }

    button{
      width: 80%;
      border-radius: 5px;
    }

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

`;

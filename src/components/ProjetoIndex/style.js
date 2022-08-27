import styled from 'styled-components';

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.BackgroundColorSecundary};
    padding: 50px 0 75px 0;

    .container{
      text-align: center;
      h1{
        font-size: 40px;
        color: white;
        margin-bottom: 50px;
      }
      .link {
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
`;

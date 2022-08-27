import styled from 'styled-components';
export const Section = styled.section`
  background: ${({ theme }) => theme.colors.BackgroundColorSecundary};
  padding: 50px 0 75px 0;
  text-align: center;
    h1{
        text-align: center;
        font-size: 40px;
        margin-bottom: 50px;
      }

    .container{
      display: flex;
      flex-wrap: wrap;
    }

    .MaisPost{
     border: none;
     font-size: 1.5rem;
    }





`;

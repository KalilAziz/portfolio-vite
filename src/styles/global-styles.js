import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    -webkt-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  body, input, textarea, select, button{
    font: 400 1em 'Roboto', sans-serif;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  .gradientText {
    background: ${({ theme }) => theme.colors.GradientText};
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${({ theme }) => theme.colors.FontColorPrimary};
}

body::-webkit-scrollbar {
  width: 7px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #080E1C;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #ccc;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .Modal {
    flex: 1;
    max-width: 800px;
    background: #080E1C;
    border-radius: 15px;
    position: relative;
    color: white;
    }

  .modal-box{
    padding: 30px;

    h2{
      margin-bottom: 20px;
    }

    .icon-close{
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
    }

    .container{


      .projeto{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 50px;

        .image{
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;


          img{
            max-width: 350px;
            display: block;
            margin: 0 auto;
            margin-bottom: 20px;
            border-radius: 10px;
          }

        }
        .conteudo{
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .desc{
            flex: 1;
            margin: 0 auto;
            margin-bottom: 10px;
            max-width: 350px;
            min-width: 250px;


            h3{
              color: #CCC;
              margin-bottom: 10px;
            }

            div{
              background-color: #0C1E2B;
              padding: 10px;
              border-radius: 10px;
              min-height: 100px;
            }
          }

          .tecnos{
            margin: 0 auto;
            flex: 1;
            max-width: 350px;
            min-width: 250px;

            h3{
              color: #CCC;
              margin-bottom: 7px;
            }

            .tecno{
              display: flex;
              flex-wrap: wrap;
              button{
                color: white;
                flex: 1;
                min-width: 100px;
                padding: 10px;
                margin: 3px;
                border: 1px solid black;
                border-radius: 5px;
                background-color: #0C1E2B;
              }
            }

          }
        }
      }
      .divugacacao{
        display: flex;
        justify-content: space-between;
        margin: 0px 20px;

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
  }


`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f8f2f5;
        --red: #e25e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f8f2f5;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font size: 16pc (Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // = 14px
        }
    }

    // 1rem = ao tamanho do font-size da pagina
    // utilizando REM na aplicação é a melhor forma do conteudo se adaptar na tela, caso seja aumentado ou diminuido

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed; 
    }
`;
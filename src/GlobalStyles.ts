import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ root?: boolean }>`
  html {
    font-family: system-ui;
    height: 100%;
    background-color: ${(props) => (props.root ? undefined : '#61dafb')};

    * {
      box-sizing: border-box;
    }
  }

  body {
    height: 100%;
    margin: 0;
  }

  .App {
    padding: 1rem 3rem;
  }

  #root {
    height: 100%;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent; // https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
  }

  button {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-family: system-ui;
  }
`;

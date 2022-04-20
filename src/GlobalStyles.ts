import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: system-ui;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
  }

  body {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor.BODY};
    height: 100%;
    overflow: hidden;
    margin: 0;
  }

  .App {
    max-width: 516px;
    margin: auto;
  }

  #root, .App {
    height: 100%;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent; // https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
  }
`;

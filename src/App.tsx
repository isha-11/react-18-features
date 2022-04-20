import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <main className='App'>React 18</main>
    </ThemeProvider>
  );
};

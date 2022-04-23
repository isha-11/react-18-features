import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Box } from 'react-styled-flex';
import { FeatureList } from './main/FeatureList';
import { Demo } from './main/Demo';
import { theme } from './theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Box as={'main'} height={'100%'}>
          <Routes>
            <Route path='/' element={<FeatureList />}></Route>
            <Route path='/:demoPath' element={<Demo />}></Route>
          </Routes>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
};

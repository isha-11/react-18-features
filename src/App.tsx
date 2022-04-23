import { GlobalStyle } from './GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Box } from 'react-styled-flex';
import { Index } from './main/Index';
import { Demo } from './main/Demo';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Box as={'main'} height={'100%'}>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/:path' element={<Demo />}></Route>
          </Routes>
        </Box>
      </HashRouter>
    </>
  );
};

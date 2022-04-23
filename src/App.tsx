import { GlobalStyle } from './GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Box } from 'react-styled-flex';
import { FeatureList } from './main/FeatureList';
import { Demo } from './main/Demo';

export const App = () => {
  return (
    <>
      <GlobalStyle root />
      <HashRouter>
        <Box as={'main'} height={'100%'}>
          <Routes>
            <Route path='/' element={<FeatureList />}></Route>
            <Route path='/:demoPath' element={<Demo />}></Route>
          </Routes>
        </Box>
      </HashRouter>
    </>
  );
};

import { Transition } from './transition';
import { GlobalStyle } from '../GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { routes } from '../constants';

export const App = () => {
  console.log('react18 app');
  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <HashRouter>
          <Routes>
            <Route path={'/transition'} element={<Transition />} />
            <Route path={'/new'} element={<div>new</div>} />
          </Routes>
        </HashRouter>
      </main>
    </>
  );
};

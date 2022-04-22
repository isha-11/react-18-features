import { GlobalStyle } from '../GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { routes } from '../constants';
import { Transition } from './transition';
import { Batching } from './batching';
import { DeferredValue } from './DeferredValue';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <HashRouter>
          <Routes>
            <Route path={routes.transition} element={<Transition />} />
            <Route path={routes.batching} element={<Batching />} />
            <Route path={routes.deferredValue} element={<DeferredValue />} />
          </Routes>
        </HashRouter>
      </main>
    </>
  );
};

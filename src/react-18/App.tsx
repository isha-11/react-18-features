import { GlobalStyle } from '../GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { routes } from '../constants';
import { Transition } from './Transition';
import { Batching } from './Batching';
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

import { GlobalStyle } from '../GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { getRoute } from '../constants';
import { Transition } from './Transition';
import { Batching } from './Batching';
import { DeferredValue } from './DeferredValue';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <h2>React 17</h2>
        <HashRouter>
          <Routes>
            <Route path={getRoute('transition')} element={<Transition />} />
            <Route path={getRoute('batching')} element={<Batching />} />
            <Route
              path={getRoute('deferredValue')}
              element={<DeferredValue />}
            />
          </Routes>
        </HashRouter>
      </main>
    </>
  );
};

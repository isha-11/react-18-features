import { ThemeProvider } from 'styled-components';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Transition } from './Transition';
import { Batching } from './Batching';
import { DeferredValue } from './DeferredValue';
import { getRoute } from '../routes';
import { GlobalStyle } from '../GlobalStyles';
import { theme } from '../theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main className='App'>
        <h2>React 18</h2>
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
    </ThemeProvider>
  );
};

import { Transition } from './transition';
import { GlobalStyle } from '../GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <Transition />
      </main>
    </>
  );
};

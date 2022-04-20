import { Transition } from './features/react-18/transition';
import { GlobalStyle } from './GlobalStyles';

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

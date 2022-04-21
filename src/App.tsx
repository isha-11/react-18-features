import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <main className='App'>
        <a href='#'>Transition</a>
        <a href='#'>Batching</a>
        <a href='#'>Deferred Values</a>
      </main>
    </>
  );
};

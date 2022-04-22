import { GlobalStyle } from './GlobalStyles';
import { routes } from './constants';
import { HashRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import { Box, FlexBox } from 'react-styled-flex';

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

const Index = () => (
  <>
    <Link to={routes.transition}>Transition</Link>
    <Link to={routes.batching}>Automatic Batching</Link>
    <Link to={routes.deferredValue}>Deferred Value</Link>
  </>
);

const Demo = () => {
  const { path } = useParams();

  return (
    <FlexBox center gap={'3rem'} height={'100%'}>
      <iframe
        title={'React 17'}
        src={`/react-18-features/pages/react-17.html#/${path}`}
        height={'80%'}
      ></iframe>
      <iframe
        title={'React 18'}
        src={`/react-18-features/pages/react-18.html#/${path}`}
        height={'80%'}
      ></iframe>
    </FlexBox>
  );
};

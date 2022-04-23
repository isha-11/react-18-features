import { GlobalStyle } from './GlobalStyles';
import { routes } from './constants';
import { HashRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import { Box, FlexBox } from 'react-styled-flex';
import styled from 'styled-components';

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
  <div className={'App'}>
    <h1>React 18 features</h1>
    <FlexBox gap={'1rem'} column>
      <Concept to={routes.transition}>Transition</Concept>
      <Concept to={routes.batching}>Automatic Batching</Concept>
      <Concept to={routes.deferredValue}>Deferred Value</Concept>
    </FlexBox>
  </div>
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

const Concept = styled(Link)`
  display: block;
  background-color: #61dafb;
  color: #20232a;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    background-color: #35b6d9;
  }
`;

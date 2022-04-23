import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { getRoute } from '../constants';

export const Index = () => (
  <div className={'App'}>
    <h1>React 18 features</h1>
    <FlexBox gap={'1rem'} column>
      <Feature to={getRoute('transition')}>Transition</Feature>
      <Feature to={getRoute('batching')}>Automatic Batching</Feature>
      <Feature to={getRoute('deferredValue')}>Deferred Value</Feature>
    </FlexBox>
  </div>
);

const Feature = styled(Link)`
  display: block;
  background-color: #61dafb;
  color: #20232a;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    background-color: #35b6d9;
  }
`;

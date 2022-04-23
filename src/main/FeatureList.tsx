import { Link } from 'react-router-dom';
import { Box, FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { mapRoutes } from '../constants';

export const FeatureList = () => (
  <Box className={'App'} maxWidth={'60rem'} margin={'auto'}>
    <h1>React 18 features</h1>
    <FlexBox gap={'1rem'} column>
      {mapRoutes(({ route, title }) => (
        <Feature to={route}>{title}</Feature>
      ))}
    </FlexBox>
  </Box>
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

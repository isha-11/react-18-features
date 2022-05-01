import { Link } from 'react-router-dom';
import { Box, FlexBox } from 'react-styled-flex';
import styled from 'styled-components';
import { mapRoutes } from '../routes';

export const FeatureList = () => (
  <Box className={'App'} maxWidth={'60rem'} margin={'auto'} padding={'0 1rem'}>
    <h1>React 18 features</h1>
    <FlexBox gap={'1rem'} column>
      {mapRoutes(({ route, title }) => (
        <Feature key={route} to={route}>
          {title}
        </Feature>
      ))}
    </FlexBox>
  </Box>
);

const Feature = styled(Link)`
  display: block;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.color.primary15};
  }
`;

import styled from 'styled-components';
import { FlexBox } from 'react-styled-flex';
import { Icon } from './icon';
import { Link } from 'react-router-dom';

export const DemoApp = styled.main`
  padding: ${(props) => props.theme.padding.app.desktop};
  padding-top: 0.005rem;
  ${(props) => props.theme.media.mobile} {
    padding: ${(props) => props.theme.padding.app.mobile};
    padding-top: 0.005rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.border};
  border-right: 1px solid ${(props) => props.theme.color.border};

  td,
  th {
    text-align: left;
    padding: 0.25rem;
    border-bottom: 1px solid ${(props) => props.theme.color.border};
    border-left: 1px solid ${(props) => props.theme.color.border};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
  border: none;
  outline: none;
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.color.secondary15};
  }
  @media (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.color.secondary15};
    }
  }
`;

export const Fab = styled(Button)`
  position: fixed;

  bottom: 1rem;
  right: 1rem;

  height: 3rem;
  width: 3rem;
  padding: 0.6rem;
  border-radius: 100%;

  box-shadow: 1px 1px 1rem 1px #000;
`;

export const FloatingHomeButton = () => {
  return (
    <Fab as={Link} to={'/'}>
      <Icon type='home' color={'primary'} />
    </Fab>
  );
};

export const ButtonContainer = styled(FlexBox)`
  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
`;

export const Card = styled(FlexBox).attrs({
  center: true,
  column: true,
  padding: '1rem',
  width: '100%',
  gap: '1rem',
})`
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
`;

export const StyledQuery = styled.div`
  font-weight: bold;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ReactLogo = styled(Icon).attrs({ type: 'logo', color: 'primary' })`
  height: 8rem;
`;

/* suspense + transition components */

export const List = styled(FlexBox).attrs({
  as: 'ul',
  column: true,
  gap: '0.25rem',
  padding: '0',
  margin: '0',
})``;

export const Item = styled(FlexBox).attrs({
  as: 'li',
  gap: '1rem',
  alignItems: 'center',
  padding: '0.5rem',
})`
  list-style-type: none;
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  background-color: ${(props) => props.theme.color.primary20};
`;

export const Flag = styled.img.attrs({
  loading: 'lazy',
  alt: 'country flag',
})`
  height: 1.25rem;
  width: 2rem;
`;

export const Spinner = () => (
  <FlexBox gap={'0.5rem'} alignItems={'center'}>
    <SpinningLogo height={'3rem'} />
    <h3>Loading ...</h3>
  </FlexBox>
);

const SpinningLogo = styled(Icon).attrs({ type: 'logo', color: 'secondary' })`
  animation: rotate 4s linear infinite;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

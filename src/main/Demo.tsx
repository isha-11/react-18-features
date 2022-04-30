import { useParams } from 'react-router-dom';
import { FlexItem } from 'react-styled-flex';
import styled from 'styled-components';
import { getTitleByRoute } from '../routes';

export const Demo = () => {
  const { demoPath } = useParams();

  return (
    <Page>
      {demoPath ? <h1>{getTitleByRoute(`/${demoPath}`)}</h1> : null}
      <FlexItem
        box
        center
        flex={1}
        gap={'3rem'}
        height={'100%'}
        aria-label={'content'}
      >
        <Frame
          title={'React 17'}
          src={`/react-18-features/pages/react-17.html#/${demoPath}`}
        ></Frame>
        <Frame
          title={'React 18'}
          src={`/react-18-features/pages/react-18.html#/${demoPath}`}
        ></Frame>
      </FlexItem>
    </Page>
  );
};

const Page = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0 3rem 3rem 3rem;

  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoint}) {
    height: 200%;
    padding: 0 1.5rem 1.5rem 1.5rem;

    [aria-label='content'] {
      flex-direction: column;
    }
  }
`;

const Frame = styled.iframe`
  flex: 1;
  height: 100%;
  width: 100%;
  border: none;
  box-shadow: 1px 1px 1rem 1px ${(props) => props.theme.color.shadow};
`;

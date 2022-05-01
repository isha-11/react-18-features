import { useParams } from 'react-router-dom';
import { FlexItem } from 'react-styled-flex';
import styled from 'styled-components';
import { FloatingHomeButton } from '../common/styled';
import { getTitleByRoute } from '../routes';

export const Demo = () => {
  const { demoPath } = useParams();

  return (
    <Page>
      <FloatingHomeButton />
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

  height: 100%;
  padding: ${(props) => props.theme.padding.app.desktop};
  padding-top: 0;

  @media (max-width: 64rem) {
    height: 200%;
    min-height: 16px;
    padding: ${(props) => props.theme.padding.app.mobile};
    padding-top: 0;

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

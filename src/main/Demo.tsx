import { useParams } from 'react-router-dom';
import { FlexBox, FlexItem } from 'react-styled-flex';
import styled from 'styled-components';
import { getTitleByRoute } from '../routes';

export const Demo = () => {
  const { demoPath } = useParams();

  return (
    <FlexBox column height={'100%'} padding={'0 3rem 3rem 3rem'}>
      {demoPath ? <h1>{getTitleByRoute(`/${demoPath}`)}</h1> : null}
      <Content box center flex={1} gap={'3rem'} height={'100%'}>
        <Frame
          title={'React 17'}
          src={`/react-18-features/pages/react-17.html#/${demoPath}`}
        ></Frame>
        <Frame
          title={'React 18'}
          src={`/react-18-features/pages/react-18.html#/${demoPath}`}
        ></Frame>
      </Content>
    </FlexBox>
  );
};

const Frame = styled.iframe`
  flex: 1;
  height: 100%;
  border: none;
  box-shadow: 1px 1px 1rem 1px ${(props) => props.theme.color.shadow};
`;

const Content = styled(FlexItem)`
  @media (max-width: 64rem) {
    flex-direction: column;

    ${Frame} {
      width: 100%;
    }
  }
`;

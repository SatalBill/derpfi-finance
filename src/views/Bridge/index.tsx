import React from 'react';
import styled from 'styled-components';
import { Container, useMediaQuery } from '@material-ui/core';
import './bridge.scss';

type Props = {};

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Bridge = (props: Props) => {
  const smallerScreen = useMediaQuery('(max-width: 650px)');
  const verySmallScreen = useMediaQuery('(max-width: 379px)');
  return (
    <IframeContainer>
      <Container
        style={{
          paddingLeft: smallerScreen || verySmallScreen ? '0' : '3.3rem',
          paddingRight: smallerScreen || verySmallScreen ? '0' : '3.3rem',
        }}
      >
        <iframe className="bridge-iframe" src="http://209.160.96.124/" title="Iframe Example"></iframe>
      </Container>
    </IframeContainer>
  );
};

export default Bridge;

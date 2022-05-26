import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export function CoinView() {
  return (
    <Container>
      <Text>New Coin View</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #96f1ff;
  justify-content: center;
  align-items: center;
`;

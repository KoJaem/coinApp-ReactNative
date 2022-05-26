import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {CoinView, TopBar} from './components';

export default function App() {
  return (
    <Container>
      <TopBar title="Show Me The Coin" />
      <CoinView />
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #b8f5ff;
`;

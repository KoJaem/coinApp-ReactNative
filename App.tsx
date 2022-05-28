import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import styled from 'styled-components/native';
import {CoinView, TopBar} from './components';
import timeStore from './store/timeStore';
// import {Provider} from 'react-redux';
export default function App() {
  return (
    <Provider store={timeStore}>
      <Container>
        <TopBar title={'Coin Information'} />
        <CoinView />
      </Container>
    </Provider>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #d5efff;
`;

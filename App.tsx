import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import styled from 'styled-components/native';
import {CoinView, MainView, TopBar} from './components';
import timeStore from './store/timeStore';

export type StackParamList = {
  Main: undefined;
  Coin: undefined;
};
const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <Provider store={timeStore}>
      <Container>
        <NavigationContainer>
          <TopBar title={'Coin Information'} />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={MainView} />
            <Stack.Screen name="Coin" component={CoinView} />
            {/* <CoinView /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </Provider>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #d5efff;
`;

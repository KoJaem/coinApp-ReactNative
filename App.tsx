import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Text>초기설정중</Text>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

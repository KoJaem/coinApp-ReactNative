import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  title: string;
};

export function TopBar({title}: Props) {
  return (
    <Container>
      <Text>Left</Text>
      <Text>{title}</Text>
      <Text>Right</Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  height: 52px;
  background-color: #94d2ff;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

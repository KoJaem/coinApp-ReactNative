import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useTimeSelector} from '../hooks/timeHook';

type Props = {
  title: string;
};

export function TopBar({title}: Props) {
  const {time} = useTimeSelector(state => state.timer);
  return (
    <Container>
      <Text>Left</Text>
      <Title>
        <Text>{title}</Text>
        <Text>{time}</Text>
      </Title>
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

const Title = styled.View`
  align-items: center;
`;

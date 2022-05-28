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
      <TitleWrapper>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </TitleWrapper>
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

const TitleWrapper = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #295881;
`;

const Time = styled.Text`
  font-size: 12px;
  color: #8b31d0;
`;

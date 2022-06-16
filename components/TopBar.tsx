import React from 'react';
import styled from 'styled-components/native';
import {useTimeSelector} from '../hooks/timeHook';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

type Props = {
  title: string;
};

export function TopBar({title}: Props) {
  const {time} = useTimeSelector(state => state.timer);
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrowleft" size={24} color="#c82ec5" />
      </TouchableOpacity>
      <TitleWrapper>
        <Title>{title}</Title>
        <Time>{time}</Time>
      </TitleWrapper>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  height: 52px;
  background-color: #94d2ff;
  align-items: center;
  padding: 0 10px;
`;
const TitleWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  z-index: -1; // 이유 : Icon onPress 이벤트를 TitleWrapper 가 가림.
`;

const Title = styled.Text`
  font-size: 20px;
  color: #295881;
`;

const Time = styled.Text`
  font-size: 12px;
  color: #8b31d0;
`;

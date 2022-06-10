import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';
import {StackParamList} from '../App';
const technology = [
  'React-native',
  'React-navigation',
  'React-vector-icons',
  'Context API',
];
type Props = {
  navigation: StackNavigationProp<StackParamList, 'Main'>;
};
export function MainView({navigation}: Props) {
  return (
    <Container>
      <Wrapper>
        <StyledTitle>KoJaem 의 CoinApp</StyledTitle>
        <StyledText>사용한 기술들</StyledText>
        <TechnologyWrapper>
          {technology.map((data, index) => (
            <Technology key={index}>- {data}</Technology>
          ))}
        </TechnologyWrapper>
      </Wrapper>
      <Button
        title="코인 정보 보러가기"
        onPress={() => {
          navigation.navigate('Coin');
        }}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.View`
  position: absolute;
  top: 30%;
  align-items: center;
`;

const StyledTitle = styled.Text`
  color: #8b31d0;
  font-size: 24px;
`;

const StyledText = styled.Text`
  margin-top: 4px;
  color: #0f3b82;
  font-size: 16px;
`;

const TechnologyWrapper = styled.View`
  margin-top: 4px;
  align-items: flex-start;
`;

const Technology = styled.Text`
  color: #11a08d;
  font-size: 14px;
`;

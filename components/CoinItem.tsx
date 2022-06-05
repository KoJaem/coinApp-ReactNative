import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  name: string;
  volume: number;
  price: number;
  change: string;
};
export function CoinItem({name, volume, price, change}: Props) {
  const iconInfo = (result: string) => {
    switch (result) {
      case 'RISE':
        return {
          iconName: 'arrowup',
          iconColor: '#155e44',
        };
      case 'FALL':
        return {
          iconName: 'arrowdown',
          iconColor: 'red',
        };
      case 'EVEN':
        return {
          iconName: 'minus',
          iconColor: '#554ad1',
        };
      default:
        return {
          iconName: '',
          iconColor: '',
        };
    }
  };
  return (
    <Container>
      <StyleImage source={require('../assets/image/coin_image.jpg')} />
      <InfoWrapper>
        <View>
          <Name>{name}</Name>
          <Volume>Volume : {volume}</Volume>
          <Price>Price : {price}</Price>
        </View>
        <ChangeWrapper>
          <ChangeTitle>전일대비</ChangeTitle>
          <Change change={change}>
            {change === 'RISE' ? '상승' : change === 'FALL' ? '하락' : '변화X'}
          </Change>
        </ChangeWrapper>
      </InfoWrapper>
      <IconWrapper>
        <Icon
          name={iconInfo(change).iconName}
          size={24}
          color={iconInfo(change).iconColor}
        />
      </IconWrapper>
    </Container>
  );
}

const Container = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;
`;

const InfoWrapper = styled.View`
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;
const Name = styled.Text`
  color: black;
  margin: 0 10px;
  font-size: 20px;
`;

const Volume = styled.Text`
  color: darkgray;
  margin: 0 10px;
  font-size: 16px;
`;

const Price = styled.Text`
  color: #286578;
  margin: 0 10px;
  font-size: 16px;
`;

const StyleImage = styled.Image`
  width: 35px;
  height: 35px;
  margin-left: 8px;
`;

const ChangeWrapper = styled.View`
  margin-right: 20px;
  align-items: center;
`;

const ChangeTitle = styled.Text`
  font-size: 14px;
  color: #554ad1;
  margin-bottom: 4px;
`;

type ChangeProps = {
  change: string;
};
const Change = styled.Text<ChangeProps>`
  font-size: 16px;
  color: ${({change}) =>
    change === 'RISE' ? '#155e44' : change === 'FALL' ? 'red' : '#554ad1'};
`;

const IconWrapper = styled.View`
  margin-right: 12px;
`;

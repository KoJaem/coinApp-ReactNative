import React from 'react';
import styled from 'styled-components/native';
type Props = {
  name: string;
  volume: string;
  price: string;
};
export function CoinItem({name, volume, price}: Props) {
  return (
    <Container>
      <StyleImage source={require('../assets/image/coin_image.jpg')} />
      <StyleText>{name}</StyleText>
      <StyleText>{volume}</StyleText>
      <StyleText>{price}</StyleText>
    </Container>
  );
}

const Container = styled.View`
  height: 80px;
  background-color: #4772ff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;

const StyleText = styled.Text`
  color: white;
  margin: 0 10px;
  flex: 0.3;
`;

const StyleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

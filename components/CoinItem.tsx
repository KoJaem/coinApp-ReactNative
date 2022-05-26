import React from 'react';
import styled from 'styled-components/native';

export function CoinItem({name, volume, price, rank}: any) {
  const now = new Date().toLocaleString();
  return (
    <Container>
      <StyleImage source={require('../assets/image/coin_image.jpg')} />
      <StyleText>{name}</StyleText>
      <StyleText>{volume}</StyleText>
      <StyleText>{price}</StyleText>
      <StyleText>{rank}</StyleText>
    </Container>
  );
}

const Container = styled.View`
  height: 80px;
  background-color: #4772ff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const StyleText = styled.Text`
  color: white;
  margin: 0 10px;
`;

const StyleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

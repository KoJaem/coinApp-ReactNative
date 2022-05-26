import React from 'react';
import styled from 'styled-components/native';
import {coinData} from '../dummy/coinData';
import {CoinItem} from './CoinItem';

export function CoinView() {
  return (
    <Container>
      {coinData.map((data, index) => (
        <CoinItem
          key={index}
          rank={data.rank}
          name={data.name}
          price={data.price_usd}
          volume={data.market_cap_usd}
        />
      ))}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #96f1ff;
`;

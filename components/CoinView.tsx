import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {CoinItem} from './CoinItem';

export function CoinView() {
  const [state, setState] = useState<any>({
    coinData: [],
    isLoading: false,
  });

  const getCoinData = useCallback(async () => {
    await setState({
      ...state,
      isLoading: true,
    });

    try {
      const response = await fetch(
        'https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETC,KRW-MTL,KRW-LTC,KRW-NEO,KRW-XRP,KRW-QTUM',
      );
      const responseJson = await response.json();
      await setState({
        coinData: responseJson,
        isLoading: false,
      });
    } catch (error) {
      console.error('getCoinData', error);
    }
  }, [state]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <Container>
      {state.coinData &&
        state.coinData.map((data: any, index: number) => (
          <CoinItem
            key={index}
            name={data.market}
            price={data.trade_price}
            volume={data.trade_volume}
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

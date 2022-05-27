import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {CoinItem} from './CoinItem';
import axios from 'axios';
import {useTimeDispatch} from '../hooks/timeHook';
import {refresh} from '../reducer/timerReducer';
type DataType = {
  market: string;
  trade_price: string;
  trade_volume: string;
};
export function CoinView() {
  const dispatch = useTimeDispatch();
  const [state, setState] = useState({
    coinData: [],
    isLoading: false,
  });

  const getCoinData = useCallback(async () => {
    await setState({
      ...state,
      isLoading: true,
    });
    try {
      const response = await axios.get(
        'https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETC,KRW-MTL,KRW-LTC,KRW-NEO,KRW-XRP,KRW-QTUM',
      );
      dispatch(refresh());
      await setState({
        coinData: response.data,
        isLoading: false,
      });
    } catch (error) {
      console.error('getCoinData', error);
    }
  }, [state, dispatch]);

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <Container>
      {state.coinData &&
        state.coinData.map((data: DataType, index) => (
          <CoinItem
            key={index}
            name={data.market}
            volume={data.trade_volume}
            price={data.trade_price}
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

import React, {useCallback, useEffect, useState} from 'react';
// import styled from 'styled-components/native';
import {CoinItem} from './CoinItem';
import axios from 'axios';
import {useTimeDispatch} from '../hooks/timeHook';
import {refresh} from '../reducer/timerReducer';
import {FlatList, ListRenderItem} from 'react-native';
type DataType = {
  market: string;
  trade_price: string;
  trade_volume: string;
  change: string;
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
        'https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETC,KRW-MTL,KRW-LTC,KRW-NEO,KRW-XRP,KRW-QTUM,KRW-XLM,KRW-STORJ,KRW-SNT',
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

  const renderItem: ListRenderItem<DataType> = ({item}) => {
    return (
      <CoinItem
        name={item.market}
        volume={item.trade_volume}
        price={item.trade_price}
        change={item.change}
      />
    );
  };

  return (
    <FlatList
      data={state.coinData}
      renderItem={renderItem}
      keyExtractor={(item: DataType) => item.market}
    />
  );
}

// const Container = styled.ScrollView`
//   flex: 1;
//   flex-direction: column;
// `;

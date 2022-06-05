import React, {useCallback, useEffect, useState} from 'react';
// import styled from 'styled-components/native';
import {CoinItem} from './CoinItem';
import axios from 'axios';
import {useTimeDispatch} from '../hooks/timeHook';
import {refresh} from '../reducer/timerReducer';
import {FlatList, ListRenderItem} from 'react-native';
import {coinDataType} from '../types/coinData.type';
type DataType = {
  market: string;
  trade_price: number;
  trade_volume: number;
  change: string;
};
type StateType = {
  coinData: coinDataType[];
  isLoading: boolean;
};
export function CoinView() {
  const dispatch = useTimeDispatch();
  const [state, setState] = useState<StateType>({
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
      refreshing={state.isLoading}
      onRefresh={getCoinData}
    />
  );
}

// const Container = styled.ScrollView`
//   flex: 1;
//   flex-direction: column;
// `;

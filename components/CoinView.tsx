import React, {useCallback, useEffect, useState} from 'react';
// import styled from 'styled-components/native';
import {CoinItem} from './CoinItem';
import axios from 'axios';
import {useTimeDispatch} from '../hooks/timeHook';
import {refresh} from '../reducer/timerReducer';
import {FlatList, ListRenderItem} from 'react-native';
import {coinDataType, coinDataName} from '../types/coinData.type';
type DataType = {
  market: string;
  trade_price: number;
  trade_volume: number;
  change: string;
};

export function CoinView() {
  const dispatch = useTimeDispatch();
  const [coinData, setCoinData] = useState<coinDataType[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [limit, setLimit] = useState(0);

  const getCoinData = useCallback(async () => {
    // setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.upbit.com/v1/ticker?markets=${coinDataName.join(',')}`,
      );
      dispatch(refresh());
      setCoinData(coinData.concat(response.data));
      // setIsLoading(false);
    } catch (error) {
      console.error('getCoinData', error);
    }
  }, [coinData, dispatch]);

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
      data={coinData}
      renderItem={renderItem}
      keyExtractor={(item: DataType) => item.market}
      refreshing={refreshing}
      onRefresh={getCoinData}
    />
  );
}

// const Container = styled.ScrollView`
//   flex: 1;
//   flex-direction: column;
// `;

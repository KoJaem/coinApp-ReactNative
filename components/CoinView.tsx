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

  const apiLimit = useCallback(() => {
    const coinArray = coinDataName.slice(limit, limit + 12).join(',');
    setLimit(limit + 12);
    return coinArray;
  }, [limit]);

  const getCoinData = useCallback(async () => {
    // setIsLoading(true);
    if (limit >= coinDataName.length) {
      return;
    }
    try {
      const response = await axios.get(
        `https://api.upbit.com/v1/ticker?markets=${apiLimit()}`,
      );
      dispatch(refresh());
      setCoinData(coinData.concat(response.data));
      // setIsLoading(false);
    } catch (error) {
      console.error('getCoinData', error);
    }
  }, [apiLimit, coinData, dispatch, limit]);

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
  const moreInfo = () => {
    setLimit(limit + 12);
    getCoinData();
  };

  const onRefresh = () => {
    setRefreshing(true);
    RefreshGetData();
    // setLimit(0), setCoinData([]) 을 하고 getCoinData 호출하는것이 아닌 위 코드를 따로 만든 이유는
    // 저 방법대로 하면 setUseState 가 두번 호출되는데, 그럼 마지막에 호출된것만 인식이 되기때문에
    // Refresh 를 했는데 그냥 아래에서 끌어오는것처럼 되기 때문임.
    setRefreshing(false);
  };

  const RefreshGetData = async () => {
    try {
      const response = await axios.get(
        `https://api.upbit.com/v1/ticker?markets=${coinDataName
          .slice(0, 12)
          .join(',')}`,
      );
      dispatch(refresh());
      setCoinData(response.data);
      setLimit(12);
      // setIsLoading(false);
    } catch (error) {
      console.error('getCoinData', error);
    }
  };

  return (
    <FlatList
      data={coinData}
      renderItem={renderItem}
      keyExtractor={(item: DataType) => item.market}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={moreInfo}
      onEndReachedThreshold={0.2}
    />
  );
}

// const Container = styled.ScrollView`
//   flex: 1;
//   flex-direction: column;
// `;

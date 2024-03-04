import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Toast from 'react-native-root-toast';
import { View } from "react-native";

import TabScreenWrapper from "../../components/TabScreenWrapper";
import useTxStore from "../../stores/useTxStore";
import { TransactionListItem } from "../../components/TransactionListItem";
import { MainStackParamList } from "../../navigation/main";
import MyFlatList from "../../components/MyFlatList";
import { scaleVertical } from "../../helpers/scale";

export const TransactionListScreen = () => {
  const navigator = useNavigation<StackNavigationProp<MainStackParamList>>();
  const { txs, offset, total, loading, error, loadTransactions } = useTxStore();

  const onEndReached = () => {
    if (offset >= total) {
      // no more to load
      Toast.show('You reached end of the transactions.', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      return;
    }
    if (!loading) {
      loadTransactions();
    }
  };

  useEffect(() => {
    if (error) {
      Toast.show(error, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
  }, [error]);

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TabScreenWrapper includePadding title="Transactions">
      <MyFlatList
        data={txs}
        isLoading={loading}
        renderItem={({ item }) => (
          <TransactionListItem
            key={item.id}
            data={item}
            onPress={() => {
              navigator.navigate("TransactionDetail", { trx: item });
            }}
          />
        )}
        onEndReached={onEndReached}
        ItemSeparatorComponent={() => <View style={{height: scaleVertical(8)}}/>}        
      />
    </TabScreenWrapper>
  );
};

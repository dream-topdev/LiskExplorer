import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Toast from "react-native-root-toast";

import useBlocksStore from "../../stores/useBlocksStore";
import { BlockListItem } from "../../components/BlockListItem";
import TabScreenWrapper from "../../components/TabScreenWrapper";
import { MainStackParamList } from "../../navigation/main";
import MyFlatList from "../../components/MyFlatList";
import { scaleVertical } from "../../helpers/scale";

export const BlockListScreen = () => {
  const { blocks, loading, error } = useBlocksStore();
  const navigator = useNavigation<StackNavigationProp<MainStackParamList>>();

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

  return (
    <TabScreenWrapper includePadding title="Blocks">
      <MyFlatList
        isLoading={loading}
        data={blocks}
        renderItem={({ item }) => (
          <BlockListItem
            key={item.id}
            data={item}
            onPress={() => {
              navigator.navigate("BlockDetail", { block: item });
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: scaleVertical(8) }} />
        )}
      />
    </TabScreenWrapper>
  );
};

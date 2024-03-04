import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import ScreenWrapper from "../../components/ScreenWrapper";
import { MainStackParamList } from "../../navigation/main";
import { LiskInlineInfo } from "../../components/LiskInlineInfo";
import { formatTime } from "../../helpers/time";
import { formatLSK } from "../../helpers/util";
import { scaleVertical } from "../../helpers/scale";

type Props = StackScreenProps<MainStackParamList, "BlockDetail">;
export const BlockDetailScreen: FC<Props> = ({ route }) => {
  const { block } = route.params;
  return (
    <ScreenWrapper title="Block Detail" includePadding>
      <View style={styles.container}>
        <LiskInlineInfo label="id" value={block.id} copyEnabled/>
        <LiskInlineInfo
          label="height"
          value={Intl.NumberFormat().format(block.height)}
          copyEnabled
        />
        <LiskInlineInfo label="Timestamp" value={formatTime(block.timestamp)} copyEnabled/>
        <LiskInlineInfo label="Network Fee" value={block.networkFee} copyEnabled/>
        <LiskInlineInfo
          label="Reward"
          value={formatLSK(parseInt(block.reward))}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scaleVertical(8),
  },
});

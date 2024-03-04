import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import ScreenWrapper from "../../components/ScreenWrapper";
import { MainStackParamList } from "../../navigation/main";
import { LiskInlineInfo } from "../../components/LiskInlineInfo";
import { scaleVertical } from "../../helpers/scale";
import { formatLSK } from "../../helpers/util";

type Props = StackScreenProps<MainStackParamList, "TransactionDetail">;
export const TransactionDetailScreen: FC<Props> = ({ route }) => {
  const { trx } = route.params;
  return (
    <ScreenWrapper title="Transaction Detail" includePadding>
      <View style={styles.container}>
        <LiskInlineInfo label="id" value={trx.id} copyEnabled />
        <LiskInlineInfo label="Block ID" value={trx.block.id} copyEnabled/>
        <LiskInlineInfo label="Status" value={trx.executionStatus} copyEnabled/>
        <LiskInlineInfo label="Type" value={trx.moduleCommand} copyEnabled/>
        <LiskInlineInfo label="From" value={trx.sender.address} copyEnabled/>
        <LiskInlineInfo label="To" value={trx.block.id} copyEnabled/>
        <LiskInlineInfo label="Nonce" value={trx.nonce} />
        <LiskInlineInfo label="Fee" value={formatLSK(parseInt(trx.fee))} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scaleVertical(8),
  },
});

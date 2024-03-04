import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { formatAgo } from "../helpers/time";
import { Colors } from "../constants/colors";
import { formatLSK } from "../helpers/util";
import { LiskTransaction } from "../types/transaction.type";

export const TransactionListItem = ({
  data,
  onPress,
}: {
  data: LiskTransaction;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.txid}>
          <Text
            style={{ width: "80%", color: Colors.blue }}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {data.id}
          </Text>
          <Text style={{ color: Colors.lightGray }}>
            {formatAgo(data.block.timestamp)}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={{ color: Colors.lightGray }}>
            Type:{" "}
            <Text style={{ color: Colors.black }}>{data.moduleCommand}</Text>
          </Text>
          <Text
            style={{ color: Colors.lightGray }}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            By: <Text style={{ color: Colors.black }}>{data.sender.name}</Text>
          </Text>
        </View>
        <Text style={styles.reward}>
          {data.params.amount ? formatLSK(parseInt(data.params.amount)) : "-"}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  txid: {
    flex: 1.5,
  },
  detail: {
    flex: 2,
  },
  reward: {
    flex: 1,
  },
});

import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { LiskBlock } from "../types/block.type";
import { formatAgo } from "../helpers/time";
import { Colors } from "../constants/colors";
import { formatLSK } from "../helpers/util";
import { scaleHorizontal } from "../helpers/scale";

export const BlockListItem = ({
  data,
  onPress,
}: {
  data: LiskBlock;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.blocks}>
          <Text
            style={{ width: "80%", color: Colors.blue }}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {data.id}
          </Text>
          <Text style={{ color: Colors.lightGray }}>
            {formatAgo(data.timestamp)}
          </Text>
        </View>
        <Text style={styles.height}>
          {Intl.NumberFormat().format(data.height)}
        </Text>
        <Text style={styles.generator} numberOfLines={1} ellipsizeMode="middle">
          {data.generator.name}
        </Text>
        <Text style={styles.reward}>{formatLSK(parseInt(data.reward))}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: scaleHorizontal(4)
  },
  blocks: {
    flex: 1.5,
  },
  height: {
    flex: 1,
    color: Colors.black,
  },
  generator: {
    flex: 1,
  },
  reward: {
    flex: 1,
  },
});

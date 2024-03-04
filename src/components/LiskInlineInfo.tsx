import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-root-toast";

import { scaleHorizontal } from "../helpers/scale";

export const LiskInlineInfo = ({
  label,
  value,
  copyEnabled = false,
}: {
  label: string;
  value: string;
  copyEnabled?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1} ellipsizeMode="middle">
        {label}
      </Text>
      <View style={styles.value}>
        <Text style={styles.valueText} numberOfLines={1} ellipsizeMode="middle">
          {value}
        </Text>
        {copyEnabled && (
          <Ionicons
            name="copy-outline"
            size={16}
            onPress={() => {
              Clipboard.setStringAsync(value);
              Toast.show("Copied to Clipboard", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: scaleHorizontal(16),
  },
  label: {
    flex: 1,
  },
  value: {
    flexDirection: 'row',
    flex: 2,
    gap: scaleHorizontal(8),
  },
  valueText: {
    flex: 1,
  }
});

import React, { ReactNode } from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { scaleHorizontal, scaleVertical } from "../helpers/scale";

export default function ScreenWrapper({
  children,
  includePadding = false,
  bgColor = "",
  title,
}: {
  children: ReactNode;
  bgColor?: string;
  includePadding?: boolean;
  title: string;
}) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          height: "100%",
          backgroundColor: bgColor,
        },
      ]}
    >
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title={title} />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          paddingHorizontal: includePadding ? scaleHorizontal(24) : 0,
          paddingTop: includePadding ? scaleVertical(16) : 0,
          paddingBottom: includePadding ? scaleVertical(16) : 0,
        }}
      >
        {children}
      </View>
    </View>
  );
}

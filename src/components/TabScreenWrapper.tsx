import React, { ReactNode } from "react";
import { View } from "react-native";
import { Appbar } from "react-native-paper";

import { scaleHorizontal, scaleVertical } from "../helpers/scale";

export default function TabScreenWrapper({
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

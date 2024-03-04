import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";

import { useMessageSocket } from "./src/hooks/useMessageSocket";
import { MainStack } from "./src/navigation/main";
import useBlocksStore from "./src/stores/useBlocksStore";
import { useEffect } from "react";

export default function App() {
  const {} = useMessageSocket();
  const { loadBlocks } = useBlocksStore();

  useEffect(() => {
    loadBlocks();
  }, []);
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <MainStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";

import { useMessageSocket } from "./src/hooks/useMessageSocket";
import { MainStack } from "./src/navigation/main";
import useBlocksStore from "./src/stores/useBlocksStore";

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
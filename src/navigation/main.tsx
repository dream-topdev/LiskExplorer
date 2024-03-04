import { createStackNavigator } from "@react-navigation/stack";

import { BlockDetailScreen } from "../screens/Blocks/detail";
import { HomeStack } from "./home";
import { LiskBlock } from "../types/block.type";
import { LiskTransaction } from "../types/transaction.type";
import { TransactionDetailScreen } from "../screens/Transaction/detail";

export type MainStackParamList = {
  HomeStack: undefined;
  BlockDetail: {
    block: LiskBlock
  };
  TransactionDetail: {
    trx: LiskTransaction
  };
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="BlockDetail" component={BlockDetailScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

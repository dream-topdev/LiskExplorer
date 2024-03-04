import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { BlockListScreen } from "../screens/Blocks/list";
import { TransactionListScreen } from "../screens/Transaction/list";

export type HomeStackParamList = {
  BlockList: undefined;
  TransactionList: undefined;
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="BlockList"
        options={{
          title: "Blocks",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        component={BlockListScreen}
      />
      <Tab.Screen
        name="TransactionList"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
        }}
        component={TransactionListScreen}
      />
    </Tab.Navigator>
  );
};

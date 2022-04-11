import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Products, Bag, Details } from "./list";
import { BagIcon } from "../Components";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          name="Products"
          component={Products}
          options={({ navigation }) => ({
            title: "Products",
            headerRight: () => <BagIcon navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            title: "Details",
            headerRight: () => <BagIcon navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="Bag"
          component={Bag}
          options={{
            headerTitle: "Your Bag",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

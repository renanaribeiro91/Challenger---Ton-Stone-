import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Products, Bag, Details, Login } from "./list";
import { BagIcon } from "../Components";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
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
            title: "Products",
            headerRight: () => <BagIcon navigation={navigation} />,
          })}
        />

        <Stack.Screen
          name="Bag"
          component={Bag}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

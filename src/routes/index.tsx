import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Products, Detail, Login } from "./list";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Challenger - Ton shop",
            headerTitleStyle: {
              fontFamily: "Anton_400Regular",
            },
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => addItem(item)}
              >
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => addItem(item)}
              >
                <Feather name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

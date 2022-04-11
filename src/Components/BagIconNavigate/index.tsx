import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { BagContext } from "../../Context/Bag";

export const BagIcon = ({ navigation }) => {
  const { getItemsCount } = useContext(BagContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bag");
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "Anton_400Regular" }}>
          Bag ({getItemsCount()})
        </Text>
        <Feather name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

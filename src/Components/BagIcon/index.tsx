import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

// import { BagContext } from "../BagContext";

export const BagIcon = ({ navigation }) => {
  //   const { getItemsCount } = useContext(BagContext);
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bag");
        }}
      >
        {/* <Text>Bag ({getItemsCount()})</Text> */}
        <Feather name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

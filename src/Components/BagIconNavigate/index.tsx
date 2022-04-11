import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BagContext } from "../../Context/Bag";
import styles from "./styles";

export const BagIcon = ({ navigation }) => {
  const { getItemsCount } = useContext(BagContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bag");
        }}
        style={styles.bag}
      >
        <Text>Bag ({getItemsCount()})</Text>
        <Feather name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

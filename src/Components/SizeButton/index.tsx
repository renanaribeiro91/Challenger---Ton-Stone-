import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ISizeButton } from "../../interfaces";

export const SizeButton = ({ ...props }): ISizeButton => {
  return (
    <View
      style={[styles.container, { backgroundColor: props.bgColor || "#FFF" }]}
    >
      <Text style={[styles.text, { color: props.color || "#c9c" }]}>
        {props.children}
      </Text>
    </View>
  );
};

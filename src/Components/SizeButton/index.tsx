import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "./styles";


export const SizeButton = ({ ...props }) => {
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

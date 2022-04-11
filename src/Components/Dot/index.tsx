import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

export const Dot = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}></View>
  );
};

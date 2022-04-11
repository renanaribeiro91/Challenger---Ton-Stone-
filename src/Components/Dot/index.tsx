import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { IDot } from "../../interfaces";

export const Dot = (props): IDot => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}></View>
  );
};

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import styles from "./styles";

export const Dot = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}></View>
  );
};

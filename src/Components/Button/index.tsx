import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IButton } from "../../interfaces";

export const Button = ({ textSubmit, submit }): IButton => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={submit}>
        <Text style={styles.title}>{textSubmit}</Text>
      </TouchableOpacity>
    </View>
  );
};

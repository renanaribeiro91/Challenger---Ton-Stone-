import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from "./styles";


export const Button = ({ textSubmit, submit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={submit}>
        <Text style={styles.title}>{textSubmit}</Text>
      </TouchableOpacity>
    </View>
  );
};

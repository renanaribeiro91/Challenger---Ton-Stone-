import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "../Button";

import styles from "./styles";

export const Form = ({ value, inputs, textSubmit, submit }) => {
  return (
    <View style={styles.form}>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholderTextColor="#999"
          {...input}
        />
      ))}
      <Button textSubmit={textSubmit} submit={submit} />
      <TouchableOpacity>
        <Text
          style={{ position: "absolute", alignSelf: "flex-end", marginTop: 50 }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

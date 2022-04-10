import React from "react";
import { Text } from "react-native";

export const Title = ({ color, text }) => (
  <Text
    style={{
      fontSize: 45,
      marginBottom: 15,
      fontWeight: "bold",
      color: "white",
    }}
  >
    {text}
  </Text>
);

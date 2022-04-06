import React from "react";
import { View } from "react-native";
import { Form, Title } from "../../Components";


export const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Title text="Login" />
      <Form
        textSubmit="LOGIN"
        submit={() => {}}
        inputs={[
          {
            placeholder: "Login",
            onChangeText: () => {},
          },
          {
            placeholder: "Senha...",
            onChangeText: () => {},
            secureTextEntry: true,
          },
        ]}
      />
    </View>
  );
};

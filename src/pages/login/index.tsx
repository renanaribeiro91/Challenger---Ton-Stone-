import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Form, Title } from "../../Components";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const handlerClick = async () => {
  //   try {
  //     await axios.post(
  //       "https://us-east-1.aws.data.mongodb-api.com/app/application-0-poucw/endpoint/login",
  //       {
  //         email,
  //         pass,
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const navigation = useNavigation();
  return (
    <>
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
          submit={() => navigation.navigate("Products")}
          inputs={[
            {
              placeholder: "Email...",
              value: email,
              onChangeText: (email) => {
                setEmail(email);
              },
            },
            {
              placeholder: "Senha...",
              value: pass,
              onChangeText: (password) => {
                setPass(password);
              },
              secureTextEntry: true,
            },
          ]}
        />
      </View>
    </>
  );
};

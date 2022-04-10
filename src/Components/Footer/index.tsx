import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Shoes } from "../Shoes";
import styles from "./styles";

export const Footer = () => {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../../assets/1.png")} price="110,90">
              Nike Air Max Dia
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../../assets/5.png")} price="360,90">
              Nike Epic React Flyknit 2
            </Shoes>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require("../../../assets/3.png")} price="890">
              Nike Squidward Tentacles
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { IShoes } from "../../interfaces";

export const Shoes = ({ ...props }): IShoes => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>{props.children}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}> {props.price} </Text>
      </View>
    </TouchableOpacity>
  );
};

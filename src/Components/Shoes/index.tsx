import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import styles from "./styles";


export const Shoes = ({ ...props }) => {
  function filterDesc(desc) {
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 23)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}> {props.price} </Text>
      </View>
    </TouchableOpacity>
  );
};

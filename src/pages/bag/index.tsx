import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Button } from "../../Components";
import { Feather } from "@expo/vector-icons";

import { BagContext } from "../../Context/Bag";
import styles from "./styles";

export const Bag = ({ navigation }) => {
  const { items, getItemsCount, getTotalPrice, removeItem } =
    useContext(BagContext);

  function Totals(item) {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });

    return (
      <>
        <View style={styles.BagLineTotal}>
          <Text
            style={[
              styles.lineTotal,
              { fontSize: 20, lineHeight: 40, fontFamily: "Anton_400Regular" },
            ]}
          >
            Total
          </Text>

          <Text style={styles.lineRight}>Valor: R$ {total.toFixed(2)}</Text>
        </View>
        <Button textSubmit="EFETUAR A COMPRA USANDO TON" />
        <Image
          source={require("../../../assets/bannerTon.png")}
          style={styles.image}
        />
      </>
    );
  }

  function renderItem({ item }) {
    return (
      <View style={styles.BagLine}>
        <Image source={item.product.img} style={styles.image} />
        <TouchableOpacity onPress={() => removeItem(item.id, item.qty)}>
          <Feather name="trash" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <View style={styles.container}></View>
        <Text style={styles.lineRight}>R$ {item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={Totals}
    />
  );
};

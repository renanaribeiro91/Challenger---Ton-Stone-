import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "../../Components";
import { Feather } from "@expo/vector-icons";

import { BagContext } from "../../Context/Bag";

export const Bag = ({ navigation }) => {
  const { items, getItemsCount, getTotalPrice, removeItem } =
    useContext(BagContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.BagLineTotal}>
        <Text style={[styles.lineTotal, { fontSize: 20, lineHeight: 40 }]}>
          Total
        </Text>
        <Text style={styles.lineRight}>R$ {total.toFixed(2)}</Text>
      </View>
    );
  }

  function renderItem({ item }) {
    console.log(item);
    return (
      <View style={styles.BagLine}>
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

const styles = StyleSheet.create({
  BagLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  BagLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
    marginLeft: 20,
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Dot, SizeButton, Button, Footer } from "../../Components";
import { getProductByIdApi } from "../../services/api";
import { BagContext } from "../../Context/Bag";
import styles from "./styles";

export const Details = ({ route }) => {
  const [product, setProduct] = useState({});

  const { addItemToBag } = useContext(BagContext);

  useEffect(() => {
    const result = getProductByIdApi(route.params.id).then((result) => {
      setProduct(result);
      console.log(result);
    });
  }, []);

  function onAddToBag() {
    addItemToBag(product.id);
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.img }}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>
            R${product.price}
          </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>{product.name}</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF">
              {product.size}
            </SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textContent}>{product.description}</Text>
          <Text style={styles.textContent}>{product.category}</Text>
          <Text style={styles.textContent}>{product.material}</Text>
        </View>

        <Button textSubmit="ADICIONAR AO CARRINHO" submit={onAddToBag} />

        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

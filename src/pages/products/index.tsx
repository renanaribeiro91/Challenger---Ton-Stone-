import react, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Shoes } from "../../Components";
import { ProductsPagePayload } from "../../services/mocks";
import { getProductsApi } from "../../services/api";

export const Products = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const result = getProductsApi().then((result) => {     
      setProducts(result);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={ProductsPagePayload.sessionHeader.img}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {ProductsPagePayload.sessionTypeProduct.name}
          </Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>
            {ProductsPagePayload.sessionGender.name}
          </Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <Feather name="list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />
      <ScrollView>
        <Text style={styles.text}>{ProductsPagePayload.sessionNews.name}</Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {products ? (
            products.map((elem, index) => {
              return (
                <Shoes
                  key={index}
                  img={elem.img}
                  price={`R$ ${elem.price}`}
                  onClick={() =>
                    navigation.navigate("Details", { id: elem.id })
                  }
                >
                  {elem.name}
                </Shoes>
              );
            })
          ) : (
            <Text>Carregando ..</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

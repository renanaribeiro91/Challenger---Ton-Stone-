import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Dot, SizeButton, Button, Footer } from "../../Components";
import { getProductById, ProducutsPagePayloads } from "../../services/mocks";
import styles from "./styles";

export const Details = ({ route }) => {
  // const { productId } = route.params;
  // const [product, setProduct] = useState({});

  // const { addItemToCart } = useContext(CartContext);

  // useEffect(() => {
  //   setProduct(getProduct(productId));
  // });

  // function onAddToCart() {
  //   addItemToCart(ProducutsPagePayloads.products.name);
  // }
  const item = getProductById(route.params.id);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/detail.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>{item.price}</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Max Dia</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {item.map((elem, index) => {
              return (
                <SizeButton key={index} bgColor="#17181a" color="#FFF">
                  {elem.size}
                </SizeButton>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike Downshifter 10</Text>
          <Text style={styles.textContent}>{item.description}</Text>
          <Text style={styles.textList}>{item.category}</Text>
          <Text style={styles.textList}>{item.material}</Text>
        </View>

        <Button textSubmit="ADD TO CART" submit={"onAddToCart"} />

        <View style={styles.line} />

        <Footer />
      </View>
    </ScrollView>
  );
};

import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Shoes } from "../../Components";

const homePagePayload = {
  sessionHeader: {
    img: require("../../../assets/banner.png"),
  },
  sessionTypeProduct: {
    name: "TÊNIS",
  },
  sessionGender: {
    name: "MASCULINO",
  },
  sessionNews: {
    name: "LANÇAMENTOS",
  },

  sessionProducts: {
    um: {
      name: " Nike Air Max Dia",
      cost: "R$140,90",
      img: require("../../../assets/1.png"),
    },
    dois: {
      name: " Nike Downshifter 10",
      cost: "R$280,90",
      img: require("../../../assets/2.png"),
    },
    tres: {
      name: "Nike Squidward Tentacles",
      cost: "R$560,90",
      img: require("../../../assets/3.png"),
    },
    quatro: {
      name: "Nike Epic React Flyknit 2",
      cost: require("../../../assets/5.png"),
      img: "",
    },
  },
};

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={homePagePayload.sessionHeader.img}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {homePagePayload.sessionTypeProduct.name}
          </Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>
            {homePagePayload.sessionGender.name}
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
        <Text style={styles.text}>{homePagePayload.sessionNews.name}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../../assets/1.png")}
            cost="R$140,90"
            onClick={() => navigation.navigate("Products")}
          >
            {homePagePayload.sessionProducts.um.name}
          </Shoes>
          <Shoes
            img={require("../../../assets/2.png")}
            cost="R$280,90"
            onClick={() => navigation.navigate("Products")}
          >
            {homePagePayload.sessionProducts.dois.name}
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../../assets/3.png")}
            cost="R$560,90"
            onClick={() => navigation.navigate("Products")}
          >
            {homePagePayload.sessionProducts.tres.name}
          </Shoes>
          <Shoes
            img={require("../../../assets/5.png")}
            cost="R$220"
            onClick={() => navigation.navigate("Products")}
          >
            {homePagePayload.sessionProducts.quatro.name}
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  header: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#D8d8d8",
    borderBottomWidth: 2,
  },
});

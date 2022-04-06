import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Shoes } from "../../Components";

const homePagePayload = {
  imgHeader: require("../../../assets/banner.png"),
};

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={homePagePayload.imgHeader} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[styles.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <Feather name="list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../../assets/1.png")}
            cost="R$140,90"
            onClick={() => navigation.navigate("Products")}
          >
            Nike Air Max Dia
          </Shoes>
          <Shoes
            img={require("../../../assets/2.png")}
            cost="R$280,90"
            onClick={() => navigation.navigate("Products")}
          >
            Nike Downshifter 10
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../../assets/3.png")}
            cost="R$560,90"
            onClick={() => navigation.navigate("Products")}
          >
            Nike Squidward Tentacles
          </Shoes>
          <Shoes
            img={require("../../../assets/5.png")}
            cost="R$220"
            onClick={() => navigation.navigate("Products")}
          >
            Nike Epic React Flyknit 2
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

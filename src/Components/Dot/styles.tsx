import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").width * 0.05,
    borderRadius: (Dimensions.get("window").width * 0.05) / 2,
    marginHorizontal: "2.5%",
    elevation: 5,
  },
});

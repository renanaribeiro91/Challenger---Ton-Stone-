import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  BagLine: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
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
    fontFamily: "Anton_400Regular",
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
  image: {
    marginTop: 50,
    width: 400,
    height: 200,
    resizeMode: "stretch",
  },
});

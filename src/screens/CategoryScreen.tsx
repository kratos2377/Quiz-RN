import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ListRenderItem,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import CategoryModel from "../model/category";
import { MainNavProps } from "../utils/MainParamList";

interface CategoryScreenProps {
  name: string;
  code: string;
}

export const CategoryScreen = ({ navigation }: MainNavProps<"Category">) => {
  const [category, setCategory] = useState("");

  const changeScreen = (item: ListRenderItem<CategoryScreenProps>) => {
    navigation.navigate("Difficulty", {
      category: category,
    });
  };

  const [items, setItems] = React.useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
    { name: "GREEN SEA", code: "#16a085" },
    { name: "NEPHRITIS", code: "#27ae60" },
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
    { name: "ALIZARIN", code: "#e74c3c" },
    { name: "CLOUDS", code: "#ecf0f1" },
    { name: "CONCRETE", code: "#95a5a6" },
    { name: "ORANGE", code: "#f39c12" },
    { name: "PUMPKIN", code: "#d35400" },
    { name: "POMEGRANATE", code: "#c0392b" },
    { name: "SILVER", code: "#bdc3c7" },
    { name: "ASBESTOS", code: "#7f8c8d" },
  ]);
  //For future reference
  //uri: "https://cdn-icons-png.flaticon.com/512/1077/1077340.png",
  //or this atom-variant
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "white" }}>
        <Appbar.Action
          icon="scoreboard"
          onPress={() => console.log("Pressed scoreboard")}
        />
        <Appbar.Content title="Select Category" />
      </Appbar.Header>
      <FlatGrid
        itemDimension={130}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setCategory(item.name);
              changeScreen(item);
            }}
          >
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});

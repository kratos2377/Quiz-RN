import React from "react";
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
import { MainNavProps } from "../utils/MainParamList";

export const CategoryScreen = ({ navigation }: MainNavProps<"Category">) => {
  const changeScreen = (name: string, code: number) => {
    navigation.navigate("Difficulty", {
      category: name,
      code: code,
    });
  };

  const [items, setItems] = React.useState([
    { name: "General Knowledge", color: "#1abc9c", code: 9 },
    { name: "Computers", color: "#2ecc71", code: 18 },
    { name: "Mathematics", color: "#3498db", code: 19 },
    { name: "History", color: "#9b59b6", code: 23 },
    { name: "Sports", color: "#34495e", code: 21 },
    { name: "Mythology", color: "#16a085", code: 20 },
    { name: "Anime & Manga", color: "#27ae60", code: 31 },
    { name: "Animals", color: "#2980b9", code: 27 },
    { name: "Geography", color: "#8e44ad", code: 22 },
    { name: "Celebrities", color: "#2c3e50", code: 26 },
    { name: "Politics", color: "#f1c40f", code: 24 },
    { name: "Video Games", color: "#e67e22", code: 15 },
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
              changeScreen(item.name, item.code);
            }}
          >
            <View
              style={[styles.itemContainer, { backgroundColor: item.color }]}
            >
              <Text style={styles.itemName}>{item.name}</Text>
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

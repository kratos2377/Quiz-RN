import React, { useState } from "react";
import {
  Touchable,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Button, Colors, IconButton } from "react-native-paper";
import Svg, { G, Path } from "react-native-svg";
import CowSvgComponent from "../SVG/cow";
import HenSvgComponent from "../SVG/hen";
import TigerSvgComponent from "../SVG/tiger";

interface DifficultyScreenProps {}

export const DifficultyScreen: React.FC<DifficultyScreenProps> = ({}) => {
  const [difficulty, setDifficulty] = useState("easy");

  const startQuiz = () => {
    console.log("Started Quiz");
  };

  return (
    <View>
      <View style={styles.container2}>
        <View style={styles.svgBoard}>
          {difficulty == "easy" ? (
            <HenSvgComponent />
          ) : difficulty == "medium" ? (
            <CowSvgComponent />
          ) : (
            <TigerSvgComponent />
          )}
        </View>
      </View>

      <View style={styles.container}>
        <Button
          style={styles.button}
          icon="camera"
          mode="contained"
          onPress={() => {
            setDifficulty("easy");
          }}
        >
          Easy
        </Button>

        <Button
          style={styles.button}
          icon="camera"
          mode="contained"
          onPress={() => {
            setDifficulty("medium");
          }}
        >
          Medium
        </Button>

        <Button
          style={styles.button}
          icon="camera"
          mode="contained"
          onPress={() => {
            setDifficulty("hard");
          }}
        >
          Hard
        </Button>
      </View>
      <Text style={{ margin: 10, alignSelf: "center" }}>
        Current Difficulty: {difficulty.toUpperCase()}
      </Text>

      <Button onPress={startQuiz}>Start Quiz</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  svgBoard: {
    height: "20%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },

  container2: {
    alignItems: "center",
    width: "100%",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
  },

  button: {
    margin: 10,
  },
});

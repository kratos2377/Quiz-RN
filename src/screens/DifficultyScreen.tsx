import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { fetchQuizQuestions } from "../API";
import CowSvgComponent from "../SVG/cow";
import HenSvgComponent from "../SVG/hen";
import TigerSvgComponent from "../SVG/tiger";
import { QuestionsState } from "../type";
import { MainNavProps } from "../utils/MainParamList";

interface DifficultyScreenProps {}

export const DifficultyScreen = ({
  navigation,
  route,
}: MainNavProps<"Difficulty">) => {
  const [categoryCode, setCategoryCode] = useState(route?.params?.code);

  const [difficulty, setDifficulty] = useState("easy");
  const [visible, setVisible] = useState(false);
  const [fetching, setFecthing] = useState(true);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);

  const startQuiz = async () => {
    setVisible(true);
    // const endpoint = `https://opentdb.com/api.php?amount=${10}&category=${categoryCode}&difficulty=${difficulty}&type=multiple`;
    // const result = await (await fetch(endpoint)).json();

    const newQuestions = await fetchQuizQuestions(categoryCode, difficulty);

    setQuestions(newQuestions);

    setFecthing(false);
  };

  return (
    <SafeAreaProvider>
      <Provider>
        <View>
          <Portal>
            <Dialog
              style={styles.dialogStyle}
              visible={visible}
              onDismiss={() => {}}
            >
              <Dialog.Content>
                {fetching ? (
                  <ActivityIndicator size="large" />
                ) : (
                  <View>
                    <Text>This Quiz contains 10 Questions</Text>
                    <Text>
                      The Category you selected was: {route?.params?.category}
                    </Text>
                    <Text>For Every Right answer you get +1 Point</Text>
                    <Text>For Every Wrong answer you get +0 Point</Text>
                  </View>
                )}
              </Dialog.Content>
              <Dialog.Actions>
                {!fetching ? (
                  <Button
                    onPress={() => {
                      navigation.replace("Quiz", {
                        question: questions,
                      });
                    }}
                  >
                    Go To Quiz Screen
                  </Button>
                ) : (
                  <View></View>
                )}
              </Dialog.Actions>
            </Dialog>
          </Portal>

          <View style={styles.container}>
            <View style={styles.svgBoard}>
              {difficulty == "easy" ? (
                <HenSvgComponent />
              ) : difficulty == "medium" ? (
                <CowSvgComponent />
              ) : (
                <TigerSvgComponent />
              )}
            </View>
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
            <Text style={{ margin: 10, alignSelf: "center" }}>
              Current Difficulty: {difficulty.toUpperCase()}
            </Text>

            <Button onPress={startQuiz}>Start Quiz</Button>
          </View>
        </View>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  svgBoard: {
    height: "20%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: -1,
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "90%",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: -1,
  },

  container2: {
    alignItems: "center",
    width: "100%",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: -1,
  },

  button: {
    margin: 10,
  },
  dialogStyle: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    height: "60%",
    zIndex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
  },
});

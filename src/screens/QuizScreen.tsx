import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import {
  Appbar,
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
  RadioButton,
} from "react-native-paper";
import { MainNavProps } from "../utils/MainParamList";
import ConfettiCannon from "react-native-confetti-cannon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface QuizScreenProps {}

export const QuizScreen = ({ navigation, route }: MainNavProps<"Quiz">) => {
  const [questions, setQuestions] = useState([...route?.params?.question]);

  const [ind, setInd] = useState(0);
  const [visible, setVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([...questions[ind].answers]);
  const [answerSelected, setAnswerSelected] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(
    questions[ind].correct_answer
  );

  const [pressed, setPressed] = useState(false);

  const [questionAsked, setQuestionAsked] = useState(questions[ind].question);
  const nextQuestion = () => {
    if (answerSelected == correctAnswer) {
      setScore(score + 1);
    }

    setQuestionAsked(questions[ind + 1].question);
    setAnswers([...questions[ind + 1].answers]);
    setCorrectAnswer(questions[ind + 1].correct_answer);
    setPressed(false);
    setInd(ind + 1);
  };

  const exitQuiz = () => {
    setVisible(false);
    navigation.pop();
  };

  const submitQuiz = () => {
    setVisible(true);
  };

  return (
    <SafeAreaProvider>
      <Provider>
        <Portal>
          <Dialog visible={visible}>
            <Dialog.Content>
              <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
              <Paragraph>Congrats...!!!</Paragraph>
              <Text>You have completed the Quiz</Text>
              <Paragraph>Your final Score is: {score} Points</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={exitQuiz}>Start a new Quiz</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <View style={styles.container}>
          <Appbar>
            <Appbar.Content title={"Questions " + (ind + 1).toString()} />
            <Appbar.Content title={score} />
          </Appbar>
          <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
            <Text>{questionAsked}</Text>
          </View>

          <View>
            <RadioButton.Group
              onValueChange={(answer) => {
                setAnswerSelected(answer);
                setPressed(true);
              }}
              value={answerSelected}
            >
              <RadioButton.Item
                position="leading"
                label={answers[0]}
                value={answers[0]}
              />
              <RadioButton.Item
                position="leading"
                label={answers[1]}
                value={answers[1]}
              />
              <RadioButton.Item
                position="leading"
                label={answers[2]}
                value={answers[2]}
              />
              <RadioButton.Item
                position="leading"
                label={answers[3]}
                value={answers[3]}
              />
            </RadioButton.Group>
          </View>

          {ind != questions.length - 1 ? (
            <Button
              mode="outlined"
              icon="arrow-right"
              style={styles.nextButton}
              onPress={nextQuestion}
              disabled={!pressed}
            >
              Next
            </Button>
          ) : (
            <Button
              mode="outlined"
              icon="arrow-right"
              style={styles.nextButton}
              disabled={!pressed}
              onPress={() => {
                setVisible(true);
              }}
            >
              Submit
            </Button>
          )}
        </View>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    position: "absolute",
    margin: 16,
    right: 10,
    bottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

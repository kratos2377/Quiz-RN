import React from "react";
import { View, Text } from "react-native";

interface QuestionProps {}

export const Question = (question: string) => {
  return (
    <View>
      <Text>{question}</Text>
    </View>
  );
};

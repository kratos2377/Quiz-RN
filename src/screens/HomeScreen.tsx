import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainParamList } from "../utils/MainParamList";
import { DifficultyScreen } from "./DifficultyScreen";
import { QuizScreen } from "./QuizScreen";
import { UserScreen } from "./UserScreen";
import { CategoryScreen } from "./CategoryScreen";
import { ScoreScreen } from "./ScoreScreen";

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const MainStack = createStackNavigator<MainParamList>();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Category">
        <MainStack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Difficulty"
          component={DifficultyScreen}
          options={{ title: "Select Difficulty" }}
        />
        <MainStack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen name="Score" component={ScoreScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

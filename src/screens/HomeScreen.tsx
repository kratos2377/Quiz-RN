import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MainParamList } from "../utils/MainParamList";
import { CategoryScreen } from "./CategoryScreen";
import { DifficultyScreen } from "./DifficultyScreen";
import { QuizScreen } from "./QuizScreen";
import { UserScreen } from "./UserScreen";

interface HomeScreenProps {}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const MainStack = createStackNavigator<MainParamList>();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="User">
        <MainStack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen name="Difficulty" component={DifficultyScreen} />
        <MainStack.Screen name="Quiz" component={QuizScreen} />
        <MainStack.Screen name="Category" component={CategoryScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type MainParamList = {
  User: undefined;
  Quiz: undefined;
  Category: undefined;
  Difficulty: undefined;
};

export type MainNavProps<T extends keyof MainParamList> = {
  navigation: StackNavigationProp<MainParamList, T>;
  route: RouteProp<MainParamList, T>;
};

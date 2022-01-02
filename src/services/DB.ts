import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";

export const openDatabaseService = () => {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("quiz-RN-1.db");
  return db;
};

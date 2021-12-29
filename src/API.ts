import { Question, QuestionsState } from "./type";
import { shuffleArray } from "./util";

export const fetchQuizQuestions = async (
  code: number,
  difficulty: string
): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${10}&category=${code}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

import { useQuery } from "@tanstack/react-query";
import { GetQuizQuery } from "../shareds/types";
import { API_ROOT } from "../shareds/constants";

const GET_QUIZ_KEY = "GET_QUIZ";

export const useGetQuiz = (query: GetQuizQuery) => {
  const { category, difficulty, type, amount } = query;

  const buildUrl = () => {
    const url = new URL(API_ROOT);

    url.searchParams.append("amount", amount);
    url.searchParams.append("category", category);
    url.searchParams.append("difficulty", difficulty);

    if (type) {
      url.searchParams.append("type", type);
    }

    return url;
  };

  const fetchQuiz = async () => {
    const url = buildUrl();
    return fetch(url.href).then((res) => res.json());
  };

  const quiz = useQuery(
    [GET_QUIZ_KEY,category, difficulty, type, amount],
    fetchQuiz,
  );

  return {...quiz};

};

import { useQuery } from "@tanstack/react-query";
import { API_CATEGORY_ROOT } from "../shareds/constants";
import { Option } from "../shareds/types";

const GET_CATEGORY_KEY = "GET_CATEGORY";

export const useGetCategory = () => {

  const fetchCategory = async () => {
    return fetch(API_CATEGORY_ROOT).then((res) => res.json());
  };
  

  const categorys = useQuery([GET_CATEGORY_KEY], fetchCategory);
  console.log(categorys,"what is that")
  return { ...categorys};
};

import { ChangeEventHandler, useState } from "react";
import { Stack, Form, Button } from "react-bootstrap";
import Select from "../Select";
import { useGetCategory } from "../../hooks/useGetCategory";
import { useNavigate } from "react-router-dom";
import { Option } from "../../shareds/types";
import { useQuiz } from "../../context/quiz";

export default function QuizForm() {
  const [currentCategory, setCurrentCategory] = useState<string>();
  const [currentDifficulty, setCurrentDifficulty] = useState<string>();

  const { data: categorys } = useGetCategory();

  console.log(categorys);

  const { setDifficulty, setCategory } = useQuiz();
  const navigate = useNavigate();

  const onDifficultyChange = (e: any) => {
    const value = e.target.value;
    setCurrentDifficulty(value);
  };

  const onCategoryChange = (e: any) => {
    const value = e.target.value;
    setCurrentCategory(value);
  };

  const onStartButtonClicked = () => {
    setDifficulty(currentDifficulty);
    setCategory(currentCategory);
    navigate(`quiz`);
  };

  const difficulties: Option[] = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];

  return (
    <Stack
      gap={3}
      style={{
        height: "200px",
        width: "500px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#cedfeb",
        borderRadius: "20px",
      }}
    >
      <Select onChange={onCategoryChange} options={difficulties} />
      <Select onChange={onCategoryChange} options={difficulties} />
      <Button onClick={onStartButtonClicked}>Start The Game</Button>
    </Stack>
  );
}

import { useState } from "react";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import QuizForm from "../../components/QuizForm";

export default function Home() {
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();

  const onQuizFormChange = (
    e: React.MouseEventHandler<HTMLButtonElement>
  ) => {};

  return (
    <Layout>
      <QuizForm />
    </Layout>
  );
}

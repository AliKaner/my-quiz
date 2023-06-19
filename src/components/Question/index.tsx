import { FC, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { shuffleArray } from "../../utils";
import { Question } from "../../shareds/types";
import { Choice } from "../Choice";

export function Question() {
  const [question, setQuestion] = useState<Question>({
    correct_answer: "",
    incorrect_answers: [],
    text: "",
  });

  const getQuestion = () => {
    return "";
  };

  const onClickChoice = () => {

  }

  const choices = shuffleArray([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);
  return (
    <Container>
      <Row>
        <Col>
          <h4>{question.text}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          {choices.map((choice, index) => (
            <Choice id={index.toString()} text={choice} onClick={onClickChoice}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

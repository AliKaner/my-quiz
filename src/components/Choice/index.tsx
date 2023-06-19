import { FC } from "react";
import { Col } from "react-bootstrap";

interface IChoice {
  id?: string;
  text: string;
  onClick: () => void;
}

export const Choice: FC<IChoice> = ({ id, text, onClick }) => {
  return (
    <Col xs={12} md={6} onClick={onClick} key={id}>
      {text}
    </Col>
  );
};

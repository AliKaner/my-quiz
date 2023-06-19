import { FC } from "react";
import { Form, FormSelectProps } from "react-bootstrap";
import {Option} from "../../shareds/types";



interface ISelect extends FormSelectProps {
  options?: Option[];
}

const Select: FC<ISelect> = ({options,...props}) => {
  return (
    <Form.Select  {...props}>
      {
      options?
      options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
        
      ))
      :null
      }
    </Form.Select>
  );
};

export default Select;

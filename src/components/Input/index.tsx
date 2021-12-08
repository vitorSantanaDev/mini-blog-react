import React from "react";
import * as S from "./styles";

interface InputProps {
  type: string;
  id?: string;
  name: string;
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ type, id, name, ...props }) => {
  return <S.InputElement type={type} id={id} name={name} {...props} />;
};

export default Input;

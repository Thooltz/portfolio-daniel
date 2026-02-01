// src/components/Input/index.tsx
import React from "react";
import * as C from "./style";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return <C.Input {...props} />;
};

export default Input;

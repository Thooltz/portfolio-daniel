import React from "react";
import * as C from "./style";

// define os tipos das props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Text: string;                         // texto exibido no botão
  Type?: "button" | "submit" | "reset"; // tipo do botão (default = "button")
}

// componente
const Button: React.FC<ButtonProps> = ({ Text, onClick, Type = "button", ...rest }) => {
  return (
    <C.Button type={Type} onClick={onClick} {...rest}>
      {Text}
    </C.Button>
  );
};

export default Button;

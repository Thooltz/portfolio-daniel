import { useState, type ChangeEventHandler } from "react";
import Input from "../../components/Input/index.tsx";
import Button from "../../components/Button/index.tsx";
import * as C from "./style.tsx"; // se o arquivo for styles.tsx, troque para "./styles.tsx"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.tsx";

type AuthShape = {
  signup?: (email: string, senha: string) => string | null;
};

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = (useAuth() as AuthShape) || {};

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const onEmailConfChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmailConf(e.target.value);
    setError("");
  };
  const onSenhaChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSenha(e.target.value);
    setError("");
  };

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos!");
      return;
    }
    if (email !== emailConf) {
      setError("Os e-mails não são iguais!");
      return;
    }
    if (typeof signup !== "function") {
      setError("Função de cadastro não encontrada no AuthContext.");
      return;
    }

    const res = signup(email, senha); // string de erro ou null
    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input type="email" placeholder="Digite seu E-mail" value={email} onChange={onEmailChange} />
        <Input type="email" placeholder="Confirme seu E-mail" value={emailConf} onChange={onEmailConfChange} />
        <Input type="password" placeholder="Digite sua Senha" value={senha} onChange={onSenhaChange} />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Inscrever-se" Type="button" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong><Link to="/">&nbsp;Faça o login</Link></C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
}
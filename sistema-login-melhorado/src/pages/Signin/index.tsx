import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin: React.FC = () => {
  // aceita tanto "signin" quanto "signIn" (caso o contexto use outro nome)
  const auth = useAuth() as {
    signin?: (email: string, senha: string) => string | null;
    signIn?: (email: string, senha: string) => string | null;
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos!");
      return;
    }

    const doSignin = auth.signin ?? auth.signIn;
    if (!doSignin) {
      setError("Função de login não encontrada no AuthContext.");
      return;
    }

    const res = doSignin(email, senha); // deve retornar string de erro ou null

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setError("");
          }}
        />

        <C.LabelError>{error}</C.LabelError>

        {/* Usa o padrão do teu Button (Text/Type) */}
        <Button Text="Entrar" Type="button" onClick={handleLogin} />

        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;

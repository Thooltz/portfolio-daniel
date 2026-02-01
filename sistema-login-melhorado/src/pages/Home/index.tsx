// src/pages/Home/index.tsx (trecho completo, pronto pra colar)
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index.tsx";
import useAuth from "../../hooks/useAuth.tsx";
import * as C from "./styles.tsx";

type Item = { id: string; nome: string; descricao?: string; qtd?: number };

const STORAGE_KEY = "itens";
const getItens = (): Item[] => {
  try {
    return (JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Item[]) || [];
  } catch {
    return [];
  }
};
const setItens = (itens: Item[]) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(itens));

export default function Home() {
  const navigate = useNavigate();
  const { signout } = (useAuth() as { signout?: () => void }) || {};
  const [itens, setItensState] = useState<Item[]>([]);

  useEffect(() => {
    setItensState(getItens());
  }, []);

  const handleDelete = (id: string) => {
    const novinhos = itens.filter((i) => i.id !== id);
    setItens(novinhos);
    setItensState(novinhos);
  };

  const handleLogout = () => {
    if (typeof signout === "function") signout();
    navigate("/");
  };

  return (
    <C.Container>
      <C.Shell>
        <C.Hero>
          <h1>Inventário</h1>
          <C.Subtitle>Gerencie seus itens de forma simples e rápida.</C.Subtitle>
          <C.Actions>
            <Button Text="➕ Novo Item" Type="button" onClick={() => navigate("/home/novo")} />
            <Button Text="Sair" Type="button" onClick={handleLogout} />
          </C.Actions>
        </C.Hero>

        <C.Card>
          <C.CardHeader>
            <h2>Lista de Itens</h2>
            <Button Text="Adicionar" Type="button" onClick={() => navigate("/home/novo")} />
          </C.CardHeader>

          {itens.length === 0 ? (
            <C.Empty>
              <div className="icon">🗒️</div>
              <h3>Nenhum item cadastrado</h3>
              <p>Comece criando um item novo.</p>
              <Button Text="Criar primeiro item" Type="button" onClick={() => navigate("/home/novo")} />
            </C.Empty>
          ) : (
            <C.List>
              {itens.map((item) => (
                <C.Row key={item.id}>
                  <C.RowLeft>
                    <C.ItemTitle>{item.nome}</C.ItemTitle>
                    {item.descricao && <C.ItemDesc>{item.descricao}</C.ItemDesc>}
                  </C.RowLeft>

                  <C.RowRight>
                    {typeof item.qtd !== "undefined" && <C.Badge>Qtd: {item.qtd}</C.Badge>}
                    <C.RowActions>
                      <Button
                        Text="Editar"
                        Type="button"
                        onClick={() => navigate(`/home/editar/${item.id}`)}
                      />
                      <Button
                        Text="Deletar"
                        Type="button"
                        onClick={() => handleDelete(item.id)}
                      />
                    </C.RowActions>
                  </C.RowRight>
                </C.Row>
              ))}
            </C.List>
          )}
        </C.Card>
      </C.Shell>
    </C.Container>
  );
}

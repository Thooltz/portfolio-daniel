import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";



type Item = {
  id: string;
  nome: string;
  descricao?: string;
  qtd: number;
};

const STORAGE_KEY = "itens";
const getItens = (): Item[] => {
  try {
    return (JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Item[]) || [];
  } catch {
    return [];
  }
};
const setItens = (itens: Item[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(itens));
};

export default function ItemForm() {
  const { id } = useParams<{ id?: string }>(); // id pode estar ausente
  const navigate = useNavigate();
  const editando = Boolean(id);

  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [qtd, setQtd] = useState<number>(1);

  useEffect(() => {
    if (editando && id) {
      const itens = getItens();
      const item = itens.find((i) => i.id === id);
      if (!item) {
        navigate("/home", { replace: true });
      } else {
        setNome(item.nome ?? "");
        setDescricao(item.descricao ?? "");
        setQtd(typeof item.qtd === "number" ? item.qtd : 1);
      }
    }
  }, [editando, id, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Nome é obrigatório.");
      return;
    }

    const itens = getItens();

    if (editando && id) {
      // atualizar existente
      const atualizados = itens.map((i) =>
        i.id === id
          ? {
              ...i,
              nome: nome.trim(),
              descricao: descricao.trim(),
              qtd: Number.isFinite(qtd) ? qtd : 0,
            }
          : i
      );
      setItens(atualizados);
    } else {
      // criar
      const novo: Item = {
        id: String(Date.now()),
        nome: nome.trim(),
        descricao: descricao.trim(),
        qtd: Number.isFinite(qtd) ? qtd : 0,
      };
      setItens([novo, ...itens]);
    }

    navigate("/home");
  };

  return (
    <div style={{ padding: 16, maxWidth: 720, margin: "0 auto" }}>
      <h2>{editando ? "Editar Item" : "Cadastrar Item"}</h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <div>
          <label style={{ display: "block", marginBottom: 4 }}>Nome *</label>
          <input
            placeholder="Ex.: Teclado Mecânico"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: 4 }}>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={4}
            placeholder="Detalhes do item"
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: 4 }}>Quantidade</label>
          <input
            type="number"
            min={0}
            value={qtd}
            onChange={(e) => setQtd(Number(e.target.value))}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
          />
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <Button Text={editando ? "Salvar" : "Cadastrar"} Type="submit" />
          <Button Text="Cancelar" onClick={() => navigate("/home")} Type="button" />
        </div>
      </form>
    </div>
  );
}

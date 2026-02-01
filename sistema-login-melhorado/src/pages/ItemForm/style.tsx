import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Item = { id: string; nome: string };

const STORAGE_KEY = "itens";

function readItens(): Item[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Item[]) : [];
  } catch {
    return [];
  }
}

function writeItens(itens: Item[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(itens));
}

export default function ItemForm() {
  const { id: routeId } = useParams();
  const id = routeId ?? null; // id vem como string
  const navigate = useNavigate();

  const [nome, setNome] = useState("");

  useEffect(() => {
    if (!id) return;
    const itens = readItens();
    const existing = itens.find((i) => i.id === id);
    if (!existing) {
      navigate("/home", { replace: true });
      return;
    }
    setNome(existing.nome);
  }, [id, navigate]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nomeClean = nome.trim();
    if (!nomeClean) return;

    const itens = readItens();

    if (id) {
      const updated = itens.map((it) =>
        it.id === id ? { ...it, nome: nomeClean } : it
      );
      writeItens(updated);
    } else {
      const novo: Item = { id: String(Date.now()), nome: nomeClean };
      writeItens([novo, ...itens]);
    }

    navigate("/home");
  };

  return (
    <div style={{ padding: 16, maxWidth: 720, margin: "0 auto" }}>
      <h2>{id ? "Editar Item" : "Cadastrar Item"}</h2>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <label style={{ display: "grid", gap: 4 }}>
          <span>Nome *</span>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do item"
            required
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #cbd5e1" }}
          />
        </label>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">{id ? "Salvar" : "Cadastrar"}</button>
          <button type="button" onClick={() => navigate("/home")}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

// src/pages/Home/styles.js
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%   { transform: translateY(0) }
  50%  { transform: translateY(-2px) }
  100% { transform: translateY(0) }
`;

export const Container = styled.div`
  --bg: #0b1220;
  --card: #0f172a;
  --muted: #94a3b8;
  --line: #1e293b;
  --text: #e5e7eb;
  --title: #f8fafc;

  min-height: 100vh;
  background: radial-gradient(1200px 600px at 20% -10%, #1e293b55, transparent 60%), var(--bg);
  color: var(--text);
  padding: 24px 16px 60px;
`;

export const Shell = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

export const Hero = styled.section`
  margin-bottom: 14px;

  h1 {
    margin: 0 0 6px;
    font-size: clamp(22px, 3.4vw, 30px);
    color: var(--title);
    letter-spacing: 0.3px;
  }
`;

export const Subtitle = styled.p`
  margin: 0 0 16px;
  color: var(--muted);
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Card = styled.section`
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
  padding: 16px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;

  h2 {
    margin: 0;
    font-size: 18px;
    color: var(--title);
  }
`;

export const Empty = styled.div`
  text-align: center;
  padding: 36px 16px 28px;
  color: var(--muted);

  .icon {
    font-size: 44px;
    margin-bottom: 8px;
  }

  h3 {
    margin: 6px 0 4px;
    color: var(--text);
  }

  p {
    margin: 0 0 14px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: grid;
  gap: 10px;

  /* rolagem gostosa quando a lista cresce */
  max-height: min(68vh, 800px);
  overflow: auto;
  padding-right: 2px;

  /* scrollbar discreta */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 999px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Row = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #0b1220;
  transition: transform .08s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0,0,0,.25);
    background: #0e1628;
    border-color: #243144;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const RowLeft = styled.div``;

export const ItemTitle = styled.div`
  font-weight: 700;
  color: #e2e8f0;
  letter-spacing: .2px;
`;

export const ItemDesc = styled.div`
  color: var(--muted);
  font-size: 14px;
  margin-top: 2px;
`;

export const RowRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-self: end;

  @media (max-width: 560px) {
    justify-self: start;
    flex-wrap: wrap;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 999px;
  background: #0ea5e9;
  color: #001322;
  font-weight: 800;
  box-shadow: 0 6px 14px rgba(14,165,233,.22);
  animation: ${float} 3.2s ease-in-out infinite;

  &::before {
    content: "•";
    font-size: 16px;
    line-height: 0;
  }
`;

export const RowActions = styled.div`
  display: flex;
  gap: 8px;
`;

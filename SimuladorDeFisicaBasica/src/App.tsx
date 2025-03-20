import { useEffect, useRef, useReducer, useState } from "react";
import "./App.css";

interface Posicao {
  x: number;
  y: number;
}

const initialState: Posicao = { x: 300, y: 200 };
const tamanhoInicial = 10;
const bolinhasIniciais: Posicao[] = [
  { x: 100, y: 100 },
  { x: 200, y: 150 },
  { x: 400, y: 250 },
  { x: 500, y: 300 },
];

function posicaoReducer(state: Posicao, action: { type: string; payload?: Posicao }) {
  switch (action.type) {
    case "MOVER":
      return action.payload ? { x: action.payload.x, y: action.payload.y } : state;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(posicaoReducer, initialState);
  const [bolinhas, setBolinhas] = useState(bolinhasIniciais);
  const [tamanho, setTamanho] = useState(tamanhoInicial);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mensagemRef = useRef<string>("");

  useEffect(() => {
    verificarColisoes();
    desenhar();
  }, [state]);

  function desenhar() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar bolinhas pequenas
    ctx.fillStyle = "yellow";
    bolinhas.forEach((bolinha) => {
      ctx.beginPath();
      ctx.arc(bolinha.x, bolinha.y, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // Desenhar bolinha principal
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(state.x, state.y, tamanho, 0, Math.PI * 2);
    ctx.fill();
  }

  function verificarColisoes() {
    setBolinhas((bolinhasAtuais) =>
      bolinhasAtuais.filter((bolinha) => {
        const distancia = Math.hypot(state.x - bolinha.x, state.y - bolinha.y);
        if (distancia < tamanho) {
          setTamanho((t) => t + 2);
          return false; // Remove a bolinha ao colidir
        }
        return true;
      })
    );
  }

  function lidarComando() {
    if (!inputRef.current) return;
    const partes = inputRef.current.value.toLowerCase().split(" ");

    if (partes[0] === "mover" && partes.length === 3) {
      const x = Number(partes[1]);
      const y = Number(partes[2]);
      if (!isNaN(x) && !isNaN(y)) {
        dispatch({ type: "MOVER", payload: { x, y } });
        mensagemRef.current = "Personagem movido!";
      } else {
        mensagemRef.current = "Coordenadas inválidas.";
      }
    }
    inputRef.current.value = "";
  }

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={400}></canvas>
      <div style={{ marginTop: "10px" }}>
        <input ref={inputRef} placeholder="Digite um comando" />
        <button onClick={lidarComando}>Executar</button>
        <p>{mensagemRef.current}</p>
      </div>
    </div>
  );
}

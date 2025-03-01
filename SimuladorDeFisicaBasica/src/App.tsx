import { useEffect, useRef, useState } from "react";
import './App.css'; 

interface Posicao {
  x: number;
  y: number;
}

export default function App() {
  const [inputComando, setInputComando] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [posicao, setPosicao] = useState<Posicao>({ x: 300, y: 200 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    desenhar();
  }, [posicao]);

  function desenhar() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(posicao.x, posicao.y, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  function LiadarComando() {
    const partes = inputComando.toLowerCase().split(" ");

    if (partes[0] === "mover" && partes.length === 3) {
      const x = Number(partes[1]);
      const y = Number(partes[2]);
      if (!isNaN(x) && !isNaN(y)) {
        setPosicao({ x, y });
        setMensagem("Personagem movido!");
      } else {
        setMensagem("Coordenadas inválidas.");
      }
    }
  }

  return (
    <div>
      
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
      ></canvas>
      <div style={{ marginTop: "10px" }}>
        <input
          value={inputComando}
          onChange={(e) => setInputComando(e.target.value)}
          placeholder="Digite um comando"
        />
        <button onClick={LiadarComando}>
          Executar
        </button>
        <p>{mensagem}</p>
      </div>
    </div>
  );
}

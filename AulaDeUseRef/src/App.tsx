import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [numero, setNumero] = useState(0);
  const numeroRef = useRef(0);
  const numeroAnteriorRef = useRef<HTMLButtonElement | null>(null);

  const BotaoRef = useRef<HTMLButtonElement | null>(null);

  // não renderiza o componente quando o valor do numeroRef é alterado
  useEffect(() => {
    //setNumero((prevNumero) => prevNumero + 10);
    numeroRef.current = Math.random();
  });
  // referencia para elementos de dom html
  useEffect(() => {
    console.log(BotaoRef.current?.click());
  }, []);

  // referencia do valor anterior
  useEffect(() => {
    numeroAnteriorRef.current = count;
  }, [count]);
  return (
    <>
      <div>
        <h1>o numero é: {numero}</h1>
        <h1>o contador é: {count}</h1>
        <h2> o contador anterior era: {numeroAnteriorRef.current}</h2>
        <button ref={BotaoRef} onClick={() => setCount((prevCount) => prevCount + 1)}>
          Adicionar
        </button>
        <h1>o numeroRef é: {numeroRef.current}</h1>

      </div>
    </>
  );
}

export default App;

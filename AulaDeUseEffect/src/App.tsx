import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10);
  const [usuario, setUsuario] = useState();

  //1- useEffect utilização
  useEffect(() => {
    console.log("roda toda vez que o componete é renderizado");
  });

  //2- array de dependencia
  useEffect(() => {
    console.log("so roda ao incrementar o count");
  }, [count]);

  //3- array de dependencia vazio
  useEffect(() => {
    console.log("so roda uma vez, quando a pagina é carregada");
  }, []);

  //4 função de limpeza
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(` o incrementador foi alterado ${count} vezes`);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  //5 - fetch api

  useEffect(() => {
    fetch("https://api.github.com/users/isaac-kapela")
      .then((resposta) => resposta.json())
      .then((json) => setUsuario(json));
  },[]);
  return (
    <>
      <div>
        <button onClick={() => setCount((prevCout) => prevCout + 1)}>
          redenerizar
        </button>
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => setCountB((prevCout) => prevCout + 1)}>
          redenerizar B
        </button>
        <p>{countB}</p>
      </div>
      <div>
        <p>{usuario?.name}</p>
        <p>{usuario?.location}</p>
        <p>{usuario?.bio}</p>
        
        
      </div>
    </>
  );
}

export default App;

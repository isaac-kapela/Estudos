import axios from "axios";
// AXIOS -> é a biblioteca de consumo de API que estamos utilizando.
// Terminal: npm install axios

import { useState, useEffect } from "react";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);

  // Uma função assíncrona é uma função que permite executar tarefas que podem levar tempo sem interromper a execução do resto do código.
  // async -> assíncrono
  const PegarDados = async () => {
    const Dados = await axios.get("https://rickandmortyapi.com/api/character");

    setPersonagens(Dados.data.results);

    // await -> espere
    // get -> pegar
  };

  // Dentro do useEffect estamos chamando a nossa função PegarDados() para buscar os dados no momento que a página é mostrada ao usuário, e executará apenas uma vez pois o useEffect está com array de dependencia vazio.
  useEffect(() => {
    PegarDados();
  }, []);

  console.log(personagens);

  return (
    <>
      {/* API - APPLICATION PROGRAMMING INTERFACE 
      (Interface de Aplicação de Programação), ELA É UMA DAS RESPONSÁVEIS POR PERMITIR A COMUNIÇÃO NA WEB(INTERNET) ENTRE DIFERENTES SISTEMAS  */}
      <h1>Aqui são os personagens</h1>
      <h2>Subtitulo</h2>
      {personagens.map((item) => (
        <div key={item.id} style={{background: 'red'}} >
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </>
  );
}

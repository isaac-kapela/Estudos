import Header from "./components/Header/Header"

export default function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

// import { useEffect, useState } from "react";

// // axios
// import axios from "axios";

// export default function App() {
//   // Categorias
//   const [genero, setGenero] = useState(`animation`);
//   const [filmes, setFilmes] = useState([]);

//   // Busca filmes
//   const [busca, setBusca] = useState("");

//   // Requisição
//   async function buscadados() {
//     const dados = await axios.get(
//       `https://api.sampleapis.com/movies/${genero}`
//     );
//     setFilmes(dados.data);
//   }

//   // useEffect
//   useEffect(() => {
//     buscadados();
//   }, [genero]);

//   // filtrando
//   const filtrados = filmes.filter((item) =>
//     // O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string
//     // O método toLowerCase() retorna o valor da string original convertido para minúsculo
//     // item.title.includes(busca)
//     item.title.toLowerCase().includes(busca.toLowerCase())
//   );

//   return (
//     <div className="App">
      

//       <div className="categoria">
//         <h1>CINE</h1>
//         <div className="busca">
//           <button onClick={() => setGenero("animation")}>Animação</button>
//           <button onClick={() => setGenero("comedy")}>Comedia</button>
//           <button onClick={() => setGenero("family")}>Familia</button>
//         </div>
//         <input
//           onChange={(e) => setBusca(e.target.value)}
//           placeholder="busca filmes..."
//           type="text"
//         />
//       </div>

//       <section className="container">
//         <div className="cards">
//           {filtrados.map((item,id) => (
//             <div key={id} className="card">
//               <img src={item.posterURL} />
//               <h2>{item.title}</h2>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

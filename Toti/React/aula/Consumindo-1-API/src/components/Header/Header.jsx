import * as S from "./Header_styled";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [AbrirMenu, setAbrirMenu] = useState(false);
  const [genero, setGenero] = useState("animation");
  const [busca, setBusca] = useState("");
  const [filmes, setFilmes] = useState([]);

  // Requisição
  async function buscadados() {
    const dados = await axios.get(`https://api.sampleapis.com/movies/${genero}`);
    setFilmes(dados.data);
  }

  // useEffect
  useEffect(() => {
    buscadados();
  }, [genero]);

  const filtrados = filmes.filter((item) =>
    item.title.toLowerCase().includes(busca.toLowerCase())
  );

  const Click = () => {
    setAbrirMenu(!AbrirMenu);
  };

  return (
    <div>
      <S.HeaderContainer>
        <header>
          <div className="nav-container">
            <div className="logo">
              <a href="#">
                <img src="" alt="" />
              </a>
            </div>

            <div className="hamburger" onClick={Click}>
              <div className="linha"></div>
              <div className="linha"></div>
              <div className="linha"></div>
            </div>

            <nav className={`navBar ${AbrirMenu ? "ativa" : ""}`}>
              <ul>
                <li>
                  <a href="/" className="ativa">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => setGenero("animation")}>Animação</a>
                </li>
                <li>
                  <a onClick={() => setGenero("comedy")}>Comedia</a>
                </li>
                <li>
                  <a onClick={() => setGenero("family")}>Familia</a>
                </li>
                <li>
                  <a href="#Footer">Contatos</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </S.HeaderContainer>
      
      <div> 
        <input
          onChange={(e) => setBusca(e.target.value)}
          placeholder="busca filmes..."
          type="text"
        />
      </div>

      <S.sectionContainer>
        <section className="container">
          <div className="cards">
            {filtrados.map((item, id) => (
              <div key={id} className="card">
                <img src={item.posterURL} alt="" />
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </section>
      </S.sectionContainer>
    </div>
  );
}

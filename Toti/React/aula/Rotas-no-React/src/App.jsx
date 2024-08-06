

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Galeria from "./components/Galeria";
import Contato from "./components/Contato";
import NaoEncontrado from "./components/NaoEcontrados"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>   
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/galeria">Galeria</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li> 
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/contato" element={<Contato/>} />
          <Route path="*" element={<NaoEncontrado/>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;

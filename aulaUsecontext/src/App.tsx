
import { useRef, useState } from 'react'
import './App.css'
import Prompt from './Prompt';
import Tela from './Tela';

function App() {
  const [estadoContado, setEstadoContador] = useState(0);
  let variavelContador = 0;
  const refContador = useRef(0);

  return (
    <>

      <div>
        <Prompt></Prompt>

      </div>
      <div>
        <Tela></Tela>
      </div>
      <div className='card'>

        <button onClick={() => setEstadoContador((count) => count + 1
        )}>
          estadoContado {estadoContado}
        </button>

        <button onClick={() => {
          variavelContador = variavelContador + 1;
          console.log("variavelContador", variavelContador)
        }}>
          VarivelContador {variavelContador}
        </button>

        <button onClick={() => {
          refContador.current = refContador.current + 1;
          console.log("refContador", refContador)
        }}>
          refContador {refContador.current}
        </button>
      </div >
    </>
  )
}

export default App

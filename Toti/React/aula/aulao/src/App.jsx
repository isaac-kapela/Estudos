import './App.css'
import { useState } from 'react'

function App() {
  const [nome, setNome] = useState('maria eduarda')
  const Mudar = ()=> {
    setNome("rebeca")
  }
  return (
    <>
    <button onClick={Mudar}>Clicar</button>
    <h1>{nome}</h1>
    

    </>
  )
}

export default App

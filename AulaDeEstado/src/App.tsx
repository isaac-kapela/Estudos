// import { useState } from 'react';
// import './App.css'

import { useReducer } from "react";

// function App() {
//   const [likes, setLikes] = useState(0);
//   const [input, setInput] = useState('nada');

//   function darLike() {
//     setLikes(prevLikes => prevLikes + 1);
//     console.log(likes);
//   }
//   return (
//     <>
//       <p>Quantidade de likes: {likes}</p>
//       <button onClick={darLike}>dar like</button>

//       <p>o que vc digitou no inpu{input}t</p>
//       <input type="text" value={input} onChange={event => setInput(event.target.value)} />
//     </>
//   )
// }

// export default App

//## UseReducer

estadoInicial = {
  likes: 0,
  input: 'nada'
}

function App() {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);



  return(
   <>
  </>

  )
}

export default App;

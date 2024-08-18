import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idEdicao, setIdEdicao] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoContato = { nome, telefone, email };

    if (idEdicao) {
      fetch(`http://localhost:3001/contatos/${idEdicao}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoContato),
      }).then(() => {
        setContatos(contatos.map(contato => (contato.id === idEdicao ? novoContato : contato)));
        setIdEdicao(null);
      });
    } else {
      fetch('http://localhost:3001/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoContato),
      }).then(() => {
        setContatos([...contatos, novoContato]);
      });
    }

    setNome('');
    setTelefone('');
    setEmail('');
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/contatos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setContatos(contatos.filter(contato => contato.id !== id));
    });
  };

  const handleEdit = (contato) => {
    setNome(contato.nome);
    setTelefone(contato.telefone);
    setEmail(contato.email);
    setIdEdicao(contato.id);
  };

  useEffect(() => {
    fetch('http://localhost:3001/contatos')
      .then(response => response.json())
      .then(data => setContatos(data));
  }, []);

  return (
    <div className='container'>
      <h1>Gerenciador de Contatos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>

      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            {contato.nome} - {contato.telefone} - {contato.email}
            <button onClick={() => handleDelete(contato.id)}>Excluir</button>
            <button onClick={() => handleEdit(contato)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

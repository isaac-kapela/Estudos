const usuarios = [];

class Pessoa {
  constructor(nome, sobrenome, idade, email, cidade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = parseInt(idade);
    this.email = email;
    this.cidade = cidade;
  }
}

function coletarDados() {
  const nome = prompt("Digite seu nome:");
  const sobrenome = prompt("Digite seu sobrenome:");
  const idade = prompt("Digite sua idade:");
  const email = prompt("Digite seu email:");
  const cidade = prompt("Digite sua cidade:");

  const usuario = new Pessoa(nome, sobrenome, idade, email, cidade);
  usuarios.push(usuario);

  exibirDadosUsuario(usuario);
  perguntarNovoRegistro();
}

function exibirDadosUsuario(usuario) {
  const novaEntrada = `
        <div class="dadosUsuario">
            <p><strong>Nome:</strong> ${usuario.nome}</p>
            <p><strong>Sobrenome:</strong> ${usuario.sobrenome}</p>
            <p><strong>Idade:</strong> ${usuario.idade}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Cidade:</strong> ${usuario.cidade}</p>
        </div>
    `;
  document.getElementById("dadosUsuario").innerHTML += novaEntrada;
}

function perguntarNovoRegistro() {
  const adicionarOutro = confirm("Deseja adicionar outro registro?");
  if (adicionarOutro) {
    coletarDados();
  } else {
    mostrarComparacoes();
  }
}

function compararIdades(user1, user2) {
  if (user1.idade > user2.idade) {
    return `${user1.nome} é mais velho que ${user2.nome}.`;
  } else if (user1.idade < user2.idade) {
    return `${user2.nome} é mais velho que ${user1.nome}.`;
  } else {
    return `${user1.nome} e ${user2.nome} têm a mesma idade.`;
  }
}

function compararCidades(user1, user2) {
  if (user1.cidade === user2.cidade) {
    return `${user1.nome} e ${user2.nome} moram na mesma cidade: ${user1.cidade}.`;
  } else {
    return `${user1.nome} e ${user2.nome} moram em cidades diferentes.`;
  }
}

function mostrarComparacoes() {
  if (usuarios.length < 2) {
    return;
  }

  const comparacoes = [];

  for (let i = 0; i < usuarios.length - 1; i++) {
    for (let j = i + 1; j < usuarios.length; j++) {
      const user1 = usuarios[i];
      const user2 = usuarios[j];

      comparacoes.push(compararIdades(user1, user2));
      comparacoes.push(compararCidades(user1, user2));
    }
  }

  const comparacoesHtml = comparacoes
    .map((comparacao) => `<p>${comparacao}</p>`)
    .join("");
  document.getElementById("comparacao").innerHTML = `
        <div class="comparacao">
            <h2>Comparações</h2>
            ${comparacoesHtml}
        </div>
    `;
}

const usuarios = [];

function coletarDados() {
    const nome = prompt("Digite seu nome:");
    const sobrenome = prompt("Digite seu sobrenome:");
    const idade = prompt("Digite sua idade:");
    const email = prompt("Digite seu email:");
    const cidade = prompt("Digite sua cidade:");

    const usuario = {
        nome,
        sobrenome,
        idade: parseInt(idade),
        email,
        cidade
    };

    usuarios.push(usuario);

    const novaEntrada = `
        <div class="dadosUsuário">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Sobrenome:</strong> ${sobrenome}</p>
            <p><strong>Idade:</strong> ${idade}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Cidade:</strong> ${cidade}</p>
        </div>
    `;

    document.getElementById("dadosUsuario").innerHTML += novaEntrada;
    compararDados();
}

function compararDados() {
    if (usuarios.length < 2) {
        return;
    }

    const comparacoes = [];

    for (let i = 0; i < usuarios.length - 1; i++) {
        for (let j = i + 1; j < usuarios.length; j++) {
            const user1 = usuarios[i];
            const user2 = usuarios[j];

            if (user1.idade > user2.idade) {
                comparacoes.push(`${user1.nome} é mais velho que ${user2.nome}.`);
            } else if (user1.idade < user2.idade) {
                comparacoes.push(`${user2.nome} é mais velho que ${user1.nome}.`);
            } else {
                comparacoes.push(`${user1.nome} e ${user2.nome} têm a mesma idade.`);
            }

            if (user1.cidade === user2.cidade) {
                comparacoes.push(`${user1.nome} e ${user2.nome} moram na mesma cidade: ${user1.cidade}.`);
            }
        }
    }

    const comparacoesHtml = comparacoes.map(comparacao => `<p>${comparacao}</p>`).join("");
    document.getElementById("comparacao").innerHTML = `
        <div class="comparacao">
            <h2>Comparações</h2>
            ${comparacoesHtml}
        </div>      
    `;
}

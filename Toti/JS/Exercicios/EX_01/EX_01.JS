function coletarDados() {
    const nome = prompt("Digite seu nome:");
    const sobrenome = prompt("Digite seu sobrenome:");
    const idade = prompt("Digite sua idade:");
    const email = prompt("Digite seu email:");
    const cidade = prompt("Digite sua cidade:");

    console.log("Nome: " + nome);
    console.log("Sobrenome: " + sobrenome);
    console.log("Idade: " + idade);
    console.log("Email: " + email);
    console.log("Cidade: " + cidade);

    const novaEntrada = `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Sobrenome:</strong> ${sobrenome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <hr>
    `;

    document.getElementById("dadosUsuario").innerHTML += novaEntrada;
}

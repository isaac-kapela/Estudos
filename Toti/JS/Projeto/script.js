document.getElementById("cepForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const cep = document.getElementById("cep").value;
    consultarAPI(cep);
});

function consultarAPI(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {

            if (data.erro) {
                exibirErro("CEP não encontrado");
            } else {
                exibirResultados(data);
            }
        })
        .catch((error) => {
            exibirErro("Erro ao consultar a API");
        });
}

function exibirResultados(data) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>Estado:</strong> ${data.uf}</p>
    `;
}

function exibirErro(mensagem) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `<p style="color: red;">${mensagem}</p>`;
}

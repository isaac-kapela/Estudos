let usuario= {
    nome: 'Isaac',
    sobrenome: 'Kapela',
    idade: 19,
    cidade: 'Juiz de fora'
};

console.log('Informações do usuário:');
console.log(`Nome: ${usuario.nome}`);
console.log(`Sobrenome: ${usuario.sobrenome}`);
console.log(`Idade: ${usuario.idade}`);
console.log(`Cidade: ${usuario.cidade}`);

console.table(usuario);

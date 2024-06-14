function ordenarDecrescente(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function inverterLista(arr) {
    if (arr.length === 0) {
        return [];
    } else {
        let ultimoElemento = arr.pop();
        return [ultimoElemento].concat(inverterLista(arr));
    }
}

function contarFaltas(nome, ...listas) {
    let faltas = 0;
    for (let lista of listas) {
        if (!lista.includes(nome)) {
            faltas++;
        }
    }
    return faltas;
}

const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio'];
const class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio'];
const class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo'];

console.log("Lista original (class1):", class1);
console.log("Lista ordenada decrescentemente:", ordenarDecrescente([...class1]));
console.log("Lista invertida recursivamente:", inverterLista([...class1]));
console.log("Quantidade de faltas de 'caio':", contarFaltas('caio', class1, class2, class3));

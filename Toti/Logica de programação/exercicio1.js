function codificar(texto) {
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    
    let textoCodificado = '';
    
    for (let char of texto) {
        if (substituicoes[char]) {
            textoCodificado += substituicoes[char];
        } else {
            textoCodificado += char;
        }
    }
    
    return textoCodificado;
}

function decodificar(texto) {
    const substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    
    let textoDecodificado = texto;
    
    for (let [original, substituto] of Object.entries(substituicoes)) {
        textoDecodificado = textoDecodificado.split(original).join(substituto);
    }
    
    return textoDecodificado;
}

let frase = "ola";
console.log("Frase original:", frase);
let fraseCodificada = codificar(frase);
console.log("Frase codificada:", fraseCodificada);
let fraseDecodificada = decodificar(fraseCodificada);
console.log("Frase decodificada:", fraseDecodificada);

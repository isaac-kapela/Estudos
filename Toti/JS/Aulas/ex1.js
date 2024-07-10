function ehPar() {
    let resultado = ""; 
    for (let i = 0; i < 21; i++) { 
        if (i % 2 == 0) { 
            resultado += i + "<br>"; 
        }
    }
    
    document.getElementById('resultado').innerHTML = resultado;
}
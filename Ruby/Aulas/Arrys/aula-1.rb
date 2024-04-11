# declaração de um array
lista = [1,2,3,4,5,6,7,8,9,10]

# adicionando um elemento ao array
lista.push("e o brazino", "jogo da galera")
# adicionando um elemento ao array
lista << "oiii"

lista.insert(0, "primeiro")  # inserindo no inicio do vetor
lista.insert(5, "quinto")  # inserindo no meio do vetor
lista.insert(13, "ultimo")  # inserindo no final do vetor

# removendo o ultimo elemento do array
lista.pop(13)
# removendo o primeiro elemento do array
lista.shift(0)
# removendo um elemento do array
lista.delete(5)

# imprimindo o array
puts lista;

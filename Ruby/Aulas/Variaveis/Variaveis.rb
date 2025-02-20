# declaração de variável
# o gets chomp serve para leitura
puts "Qual é o seu nome?";
nome = gets.chomp;
puts "Qual é a sua idade?";
idade = gets.chomp.to_i;  #conversão da string para um número


puts "Olá #{nome}, você tem #{idade} anos de idade";

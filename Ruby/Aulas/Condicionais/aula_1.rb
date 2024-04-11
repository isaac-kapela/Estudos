puts "digite a primeira nota";
n1 = gets.chomp.to_i;
puts "digite a segunda nota"
n2 = gets.chomp.to_i;
puts "digite a terceira nota"
n3 = gets.chomp.to_i;
media = (n1 + n2 + n3) / 3;

if media >= 6
    puts" aprovado com a media de #{media}";
elsif media>=4 && media<6
    puts"recuperação com a media de #{media}";
else
    puts"reprovado com a media de #{media}";
end;